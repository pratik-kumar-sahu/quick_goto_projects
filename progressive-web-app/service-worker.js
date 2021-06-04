var CACHE_STATIC = "static";
var CACHE_DYNAMIC = "dynamic";

var urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/image/favicon.ico",
  "/image/hero.svg",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_STATIC).then(function (cache) {
      console.log("Pre Caching");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", function (e) {
  console.log("SW activated");
});

// Cache with Network callback
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (res) {
      if (res) {
        return res;
      } else {
        return fetch(e.request).then(function (res) {
          return caches.open(CACHE_DYNAMIC).then(function (cache) {
            cache.put(e.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});

// Network with Cache Fallback
// self.addEventListener("fetch", function (e) {
//   e.respondWith(fetch(e.request))
//     .then(function (res) {
//       return caches.open(CACHE_DYNAMIC).then(function (cache) {
//         cache.put(e.request.url, res.clone());
//         return res;
//       });
//     })
//     .catch(function () {
//       return caches.match(e.request);
//     });
// });

// Network only startegy
// self.addEventListener("fetch", function (e) {
//   e.respondWith(fetch(e.request));
// });

// Cache only startegy
// self.addEventListener("fetch", function (e) {
//   e.respondWith(caches.match(e.request));
// });

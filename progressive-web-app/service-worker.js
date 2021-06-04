var CACHE_STATIC = "static-v3";
var CACHE_DYNAMIC = "dynamic-v3";

// Cache Versioning
var whiteListed = [CACHE_STATIC, CACHE_DYNAMIC];

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

// Handling Cache Versioning // new versions will only be present and deletes old caches
self.addEventListener("activate", function (e) {
  console.log("SW activated");
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (whiteListed.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Cache then Network strategy
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches
      .open(CACHE_DYNAMIC)
      .then(function (cache) {
        return fetch(e.request).then(function (res) {
          cache.put(e.request.url, res.clone());
          return res;
        });
      })
      .catch(function (err) {
        console.log(err);
        return caches.match(e.request);
        // or we can show an offline page here like this
        // return caches.match('/offline.html')
        // remember to include '/offline.html' in urlsToCache
      })
  );
});

// Cache with Network Fallback strategy
// self.addEventListener("fetch", function (e) {
//   e.respondWith(
//     caches.match(e.request).then(function (res) {
//       if (res) {
//         return res;
//       } else {
//         return fetch(e.request).then(function (res) {
//           return caches.open(CACHE_DYNAMIC).then(function (cache) {
//             cache.put(e.request.url, res.clone());
//             return res;
//           });
//         });
//       }
//     })
//   );
// });

// Network with Cache Fallback strategy
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

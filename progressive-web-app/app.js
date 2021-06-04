if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function () {
      console.log("SW Registered");
    })
    .catch(function (err) {
      console.log(err);
    });
}

// unregistering serviceWorker after 10 seconds automatically
setTimeout(() => {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}, 10000);

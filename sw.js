self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("geodata").then(function(cache) {
      return cache.add("/index_offline.html");
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match("/index_offline.html");
    })
  );
});
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('.').then(function(cache) {
      return cache.addAll([
        '/main.css',
        '/site.js'
        // etc
      ]);
    })
  );
});

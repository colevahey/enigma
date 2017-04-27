self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('colevahey.github.io/enigma').then(function(cache) {
      return cache.addAll([
        '/main.css',
        '/site.js'
        // etc
      ]);
    })
  );
});

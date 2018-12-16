importScripts('/cache-polyfill/index.js')

self.addEventListener('install', e => {
 e.waitUntil(
   caches.open('airhorner').then(cache => {
     return cache.addAll([
       '/',
       '/index.html',
       '/main.css',
       '/site.js',
       '/currentcode.js',
       '/manifest.json',
       '/assets/copytoclip.png',
       '/assets/enigmalogo.gif',
       '/assets/icon-144.png',
       '/assets/icon-192.png',
       '/assets/icon-512.png',
       '/assets/sms.png',
       '/assets/twitter.png'
     ])
   })
 )
})

self.addEventListener('fetch', event => {
  console.log(event.request.url)
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
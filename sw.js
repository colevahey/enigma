importScripts('/cache-polyfill.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('airhorner').then(function(cache) {
return cache.addAll([
'./',
'./index.html',
'./currentcode.js',
'./code',
'./main.css',
'./site.js',
'./manifest.json',
'./README.md',
'./assets/enigmalogo.gif',
'./assets/background.svg',
'./assets/copytoclip.png',
'./assets/icon.png'
]);
})
);
});

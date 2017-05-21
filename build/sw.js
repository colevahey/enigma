importScripts('workbox-sw.prod.v1.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/assets/copytoclip.png",
    "revision": "1f7eaacca3e1b6ef0306c722448e655c"
  },
  {
    "url": "/assets/enigmalogo.gif",
    "revision": "89e74b9dab5ebb28f9fc5b3d131adad0"
  },
  {
    "url": "/assets/icon-144.png",
    "revision": "67db9b94a98c1af2086e1377a7ae0576"
  },
  {
    "url": "/assets/icon-17.png",
    "revision": "3c5885d79bdc4400a81716947e84978b"
  },
  {
    "url": "/assets/icon-192.png",
    "revision": "ffdbae2e4ed178a04c1201a4f76fa2af"
  },
  {
    "url": "/assets/sms.png",
    "revision": "431fa67164238dc475957cdc4ac237fc"
  },
  {
    "url": "/assets/twitter.png",
    "revision": "4d41dc484830a1cf9e2ab34bfeab672f"
  },
  {
    "url": "/currentcode.js",
    "revision": "6d0b968e9c7249b127498931cb6f5bbc"
  },
  {
    "url": "/index.html",
    "revision": "3ee9143b86d1e027d4110865febebad6"
  },
  {
    "url": "/main.css",
    "revision": "1f4605bc3fade41997640ace529935e2"
  },
  {
    "url": "/manifest.json",
    "revision": "07fa2b3e243dff1a41f51919ea386f04"
  },
  {
    "url": "/README.md",
    "revision": "ec3090d197791a93f011bc7c642c4955"
  },
  {
    "url": "/site.js",
    "revision": "2ba642c57f04332f5fdca3472227c344"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);

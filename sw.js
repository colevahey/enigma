// cache-polyfill
(_ => {
  var nativeAddAll = Cache.prototype.addAll
  var userAgent = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/)

  // Has nice behavior of `var` which everyone hates
  if (userAgent) {
    var agent = userAgent[1]
    var version = parseInt(userAgent[2])
  }

  if (
    nativeAddAll && (!userAgent ||
      (agent === 'Firefox' && version >= 46) ||
      (agent === 'Chrome'  && version >= 50)
    )
  ) {
    return
  }

  Cache.prototype.addAll = function addAll(requests) {
    var cache = this

    // Since DOMExceptions are not constructable:
    function NetworkError(message) {
      this.name = 'NetworkError'
      this.code = 19
      this.message = message
    }

    NetworkError.prototype = Object.create(Error.prototype)

    return Promise.resolve().then(_ => {
      if (arguments.length < 1) throw new TypeError()

      // Simulate sequence<(Request or USVString)> binding:
      var sequence = []

      requests = requests.map(request => {
        if (request instanceof Request) {
          return request
        }
        else {
          return String(request) // may throw TypeError
        }
      })

      return Promise.all(
        requests.map(request => {
          if (typeof request === 'string') {
            request = new Request(request)
          }

          var scheme = new URL(request.url).protocol

          if (scheme !== 'http:' && scheme !== 'https:') {
            throw new NetworkError("Invalid scheme")
          }

          return fetch(request.clone())
        })
      )
    }).then(responses => {
      // If some of the responses has not OK-eish status,
      // then whole operation should reject
      if (responses.some(response => {
        return !response.ok
      })) {
        throw new NetworkError('Incorrect response status')
      }

      // TODO: check that requests don't overwrite one another
      // (don't think this is possible to polyfill due to opaque responses)
      return Promise.all(
        responses.map((response, i) => {
          return cache.put(requests[i], response)
        })
      )
    }).then(_ => {
      return undefined
    })
  }

  Cache.prototype.add = function add(request) {
    return this.addAll([request])
  }
})

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
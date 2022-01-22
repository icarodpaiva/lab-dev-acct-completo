var CACHE_NAME = 'Skins Shop'

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        'index.html',
        'manifest.json',
        '../src/index.js',
        '../src/index.css',
        '../src/App.js',
        '../src/App.css',
        '../src/images/load.png',
        '../src/images/load2.png',
        '../src/images/top.png',
        '../src/images/jg.png',
        '../src/images/mid.png',
        '../src/images/adc.png',
        '../src/images/sup.png'
      ])
    })
  )
})

self.addEventListener('activate', function activator(event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) {
            return key.indexOf(CACHE_NAME) !== 0
          })
          .map(function (key) {
            return caches.delete(key)
          })
      )
    })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      return cachedResponse || fetch(event.request)
    })
  )
})

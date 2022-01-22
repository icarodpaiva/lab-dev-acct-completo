var CACHE_NAME = 'Cook it Yourself'

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.js',
        '../src/App.js',
        '../src/components/Header.js',
        '../src/components/Inicio.js',
        '../src/css/App.css',
        '../src/css/Cadastro.css',
        '../src/css/Contato.css',
        '../src/css/Header.css',
        '../src/css/Inicio.css',
        '../src/css/Pesquisa.css',
        '../src/css/Sobre.css'
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

const CACHE_NAME = "ntagil-pwa-v1";
const urlsToCache = [
    '/',
    '/index.html',
    '/dostoprim.html',
    '/factories.html',
    '/culture.html',
    '/contact.html',
    '/todo.html',
    '/css/style.css',
    '/images/vid_night.jpeg',
    '/images/lisya_gora.jpeg',
    '/images/museum.jpeg',
    '/images/pond.jpeg',
    '/images/factory.jpeg',
    '/images/vid_night.jpeg',




    '/manifest.json'
  ];
  

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

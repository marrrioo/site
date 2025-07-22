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
    '/images/cher.jpeg',
    '/images/cherepanov.jpeg',
    '/images/dem.jpeg',
    '/images/dkntmk.jpeg',
    '/images/dram.jpeg',
    '/images/energy.jpeg',
    '/images/him.jpeg',
    '/images/izo_mus.jpeg',
    '/images/izo.jpeg',
    '/images/koksohim.jpeg',
    '/images/kos.jpeg',
    '/images/kraev.jpeg',
    '/images/lin.jpeg',
    '/images/lis.jpeg',
    '/images/mol_teatr.jpeg',
    '/images/mus.jpeg',
    '/images/ntmk.jpeg',
    '/images/okyn.jpeg',
    '/images/park.jpeg',
    '/images/prir.jpeg',
    '/images/prud.jpeg',
    '/images/sov.jpeg',
    '/images/teatr.jpeg',
    '/images/ub.jpeg',
    '/images/uvz.jpeg',
    '/images/zav.jpeg',
    





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

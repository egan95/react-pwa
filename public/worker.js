
var staticCacheName = 'react-v13';
var filesToCache = [
  '/index.html'

];

self.addEventListener('install', event => {
  console.log('Instal service worker');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  //const cacheAllowlist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.filter(function(cacheName){
              return cacheName!= staticCacheName;
          }).map(function(cacheName){
              return caches.delete(cacheName);
          })
        );
      // return Promise.all(
      //   cacheNames.map(cacheName => {
      //     if (cacheAllowlist.indexOf(cacheName) === -1) {
      //       return caches.delete(cacheName);
      //     }
      //   })
      // );
    })
  );
});

self.addEventListener('fetch', event => {
  console.log('isi event request :'+event.request)
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      // TODO 4 - Add fetched files to the cache

    }).catch(error => {

      // TODO 6 - Respond with custom offline page

    })
  );
});


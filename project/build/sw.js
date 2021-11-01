const CACHE_PREFIX = 'guitar-shop-cache';
const CACHE_VER = 'v14';
const CACHE_NAME = `${CACHE_PREFIX}-${CACHE_VER}`;

const HTTP_STATUS_OK = 200;
const RESPONSE_SAFE_TYPE = 'basic';

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/fonts/droid-sans-bold.woff2',
          '/fonts/droid-sans.woff2',
          '/img/guitar-1.png',
          '/img/guitar-1.webp',
          '/img/guitar-2.png',
          '/img/guitar-2.webp',
          '/img/guitar-3.png',
          '/img/guitar-3.webp',
          '/img/guitar-4.png',
          '/img/guitar-4.webp',
          '/img/guitar-5.png',
          '/img/guitar-5.webp',
          '/img/guitar-6.png',
          '/img/guitar-6.webp',
          '/img/logo-footer.svg',
          '/img/logo.svg',
        ]);
      }),
  );
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys()
      .then(
        (keys) => Promise.all(
          keys.map(
            (key) => {
              if (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) {
                return caches.delete(key);
              }

              return null;
            })
            .filter((key) => key !== null),
        ),
      ),
  );
});

const handleFetch = (evt) => {
  const {request} = evt;

  evt.respondWith(
    caches.match(request)
      .then((cacheResponse) => {
        if (cacheResponse) {
          return cacheResponse;
        }

        return fetch(request)
          .then((response) => {
            if (!response || response.status !== HTTP_STATUS_OK || response.type !== RESPONSE_SAFE_TYPE) {
              return response;
            }

            const clonedResponse = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => cache.put(request, clonedResponse));

            return response;
          });
      }),
  );
};

self.addEventListener('fetch', handleFetch);

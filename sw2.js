const APP_PREFIX = "GibberishUmbra_";
const VERSION = "{{ site.service_worker_version }}"; // Updated to use Liquid tag
const CACHE_NAME = APP_PREFIX + VERSION;
const CACHE_EXPIRATION = 7 * 24 * 60 * 60; // Cache expiration time in seconds (e.g., 7 days)
const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/main.css",
  "/gibberish-umbra-144-icon.png",
  "/gibberish-umbra-512-icon.png",
  "/assets/feed-tools-icons.svg",
  "/favicon.ico",
  "/js/search.js",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_URLS);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName.startsWith(APP_PREFIX) && cacheName !== CACHE_NAME;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
});

self.addEventListener("fetch", function (event) {
  const requestUrl = new URL(event.request.url);

  // Check if the request is for a local resource
  if (requestUrl.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        if (response) {
          return response; // Serve the cached resource
        } else {
          return fetch(event.request)
            .then(function (networkResponse) {
              if (
                event.request.method === "GET" &&
                networkResponse.status === 200
              ) {
                const clonedResponse = networkResponse.clone();
                caches.open(CACHE_NAME).then(function (cache) {
                  cache.put(event.request, clonedResponse); // Cache the fetched resource
                });
              }
              return networkResponse;
            })
            .catch(function (error) {
              // Handle fetch errors here (e.g., show fallback response)
              console.error("Fetch error:", error);
            });
        }
      })
    );
  }
});

self.addEventListener("message", function (event) {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("push", function (event) {
  // Handle push notifications here
  // ...
});

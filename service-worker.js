// ═══════════════════════════════════════════════════════════
// IT TOOLKIT v5.0 - SERVICE WORKER
// PWA Offline-First Support
// ═══════════════════════════════════════════════════════════

const CACHE_NAME = 'it-toolkit-v5.0.0';
const CACHE_VERSION = 'v5.0.0';

// Assets to cache on install
const ASSETS_TO_CACHE = [
  './',
  './IT_Toolkit_v5.html',
  './manifest.json'
];

// ═══ INSTALL: Cache essential assets ═══
self.addEventListener('install', event => {
  console.log('[SW] Installing Service Worker v5.0.0...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[SW] Installation complete');
        return self.skipWaiting(); // Activate immediately
      })
      .catch(err => {
        console.error('[SW] Installation failed:', err);
      })
  );
});

// ═══ ACTIVATE: Clean up old caches ═══
self.addEventListener('activate', event => {
  console.log('[SW] Activating Service Worker v5.0.0...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[SW] Activation complete');
        return self.clients.claim(); // Take control immediately
      })
  );
});

// ═══ FETCH: Offline-first strategy ═══
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http(s) requests
  if (!request.url.startsWith('http')) return;
  
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Return cached response if available
        if (cachedResponse) {
          console.log('[SW] Serving from cache:', request.url);
          return cachedResponse;
        }
        
        // Otherwise fetch from network
        console.log('[SW] Fetching from network:', request.url);
        return fetch(request)
          .then(response => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response (can only be consumed once)
            const responseToCache = response.clone();
            
            // Cache for future use
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(request, responseToCache);
              });
            
            return response;
          })
          .catch(error => {
            console.error('[SW] Fetch failed:', error);
            // Could return a custom offline page here
            return new Response('Offline - Service unavailable', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// ═══ MESSAGE: Handle messages from clients ═══
self.addEventListener('message', event => {
  console.log('[SW] Message received:', event.data);
  
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
  
  if (event.data.action === 'getCacheStatus') {
    caches.has(CACHE_NAME).then(exists => {
      event.ports[0].postMessage({
        cacheExists: exists,
        cacheName: CACHE_NAME,
        version: CACHE_VERSION
      });
    });
  }
  
  if (event.data.action === 'clearCache') {
    caches.delete(CACHE_NAME).then(() => {
      event.ports[0].postMessage({ cacheCleared: true });
    });
  }
});

// ═══ SYNC: Background sync (for future use) ═══
self.addEventListener('sync', event => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // Could sync localStorage data or other background tasks
      Promise.resolve()
    );
  }
});

// ═══ PUSH: Push notifications (for future use) ═══
self.addEventListener('push', event => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Nueva actualización disponible',
    icon: './icon-192.png',
    badge: './icon-72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('IT Toolkit', options)
  );
});

// ═══ NOTIFICATION CLICK: Handle notification clicks ═══
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification clicked:', event.notification.tag);
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('./IT_Toolkit_v5.html')
  );
});

console.log('[SW] Service Worker v5.0.0 loaded');

/* Devocional — Service Worker
 * Estrategia:
 *  - Navegaciones HTML: NetworkFirst (3s timeout) con fallback al cache de "/"
 *  - Assets same-origin (JS/CSS/imágenes/fuentes): StaleWhileRevalidate
 *  - Manifest e iconos: CacheFirst
 *  Esto cachea los chunks/textos automáticamente al navegar, permitiendo
 *  uso offline después de la primera visita a cada sección.
 */

const VERSION = "v1";
const RUNTIME_CACHE = `runtime-${VERSION}`;
const HTML_CACHE = `html-${VERSION}`;

const PRECACHE_URLS = [
  "/",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/rosario-maria",
  "/rosario-jose",
  "/rosario-familias",
  "/rosario-espiritu",
  "/coronilla-jose",
  "/creditos",
  "/ajustes",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(HTML_CACHE);
      await Promise.all(
        PRECACHE_URLS.map((url) =>
          fetch(url, { cache: "reload" })
            .then((res) => res.ok && cache.put(url, res.clone()))
            .catch(() => undefined),
        ),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((n) => n !== RUNTIME_CACHE && n !== HTML_CACHE)
          .map((n) => caches.delete(n)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
  if (event.data && event.data.type === "PREFETCH_ROUTES") {
    event.waitUntil(
      caches.open(HTML_CACHE).then((cache) =>
        Promise.all(
          PRECACHE_URLS.map((url) =>
            fetch(url, { cache: "reload" })
              .then((res) => (res.ok ? cache.put(url, res.clone()) : undefined))
              .catch(() => undefined),
          ),
        ),
      ),
    );
  }
});

const TIMEOUT = 3000;

function timeoutFetch(request, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("timeout")), ms);
    fetch(request).then(
      (res) => {
        clearTimeout(t);
        resolve(res);
      },
      (err) => {
        clearTimeout(t);
        reject(err);
      },
    );
  });
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Skip caching for API and internal endpoints
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/_build/")) {
    return;
  }

  // HTML navigations: NetworkFirst con fallback al shell cacheado
  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const res = await timeoutFetch(req, TIMEOUT);
          const cache = await caches.open(HTML_CACHE);
          cache.put("/", res.clone()).catch(() => undefined);
          return res;
        } catch {
          const cache = await caches.open(HTML_CACHE);
          const cached = (await cache.match(req)) || (await cache.match("/"));
          return (
            cached ||
            new Response("Sin conexión", {
              status: 503,
              headers: { "Content-Type": "text/plain; charset=utf-8" },
            })
          );
        }
      })(),
    );
    return;
  }

  // Assets same-origin: StaleWhileRevalidate
  event.respondWith(
    (async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      const cached = await cache.match(req);
      const fetchPromise = fetch(req)
        .then((res) => {
          if (res && res.ok && res.type === "basic") {
            cache.put(req, res.clone()).catch(() => undefined);
          }
          return res;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })(),
  );
});

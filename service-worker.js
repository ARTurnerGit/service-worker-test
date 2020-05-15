const cacheName = "cache-v1";
const resourcesToPrecache = [
  "/",
  "index.html",
  "contact.html",
  "about.html",
  "portfolio.html",
  "/styles/index.css",
  "/images/alun.jpg",
  "/images/alun2.jpg",
  "/images/portfolio1.jpg",
  "/images/portfolio2.jpg",
  "/images/portfolio3.jpg",
  "/images/portfolio4.jpg",
  "https://fonts.googleapis.com/css?family=Montserrat|Roboto+Slab&display=swap",
];

self.addEventListener("install", (e) => {
  console.log("install event triggered");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  ).catch((err) => {
    console.log("there has been an error");
    console.dir(err);
  });
});

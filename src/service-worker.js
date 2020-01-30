/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || []);
//workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// App Shell
workbox.routing.registerNavigationRoute("/index.html");

/*Si tenemos algo ya cacheado en el service worker y tiene algún comportamiento por defecto lo va a respetar pero
si ingresa a otra url no va fallar la url directamente sino que en este caso va a buscar en este caso index.html 
que tiene la responsabilidad de decir que tiene que ver
*/

/*Para cualquier ruta que comience con https va aplicar una estrategia Network first */
//Va a tratar de salir por red primero sino tenemos conexión va hacerlo por el cache 
workbox.routing.registerRoute(
    /^https?.*/,
    workbox.strategies.networkFirst(),
    "GET"
);

// // Last fuentes van con Cache First y vencen al mes
// workbox.routing.registerRoute(
//     /^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
//     workbox.strategies.cacheFirst({
//         cacheName: "google-fonts-cache",
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxAgeSeconds: 30 * 24 * 60 * 60
//             })
//         ]
//     }),
//     "GET"
// );

// // Todo lo demÃ¡s usa Network First
// workbox.routing.registerRoute(
//     /^https?.*/,
//     workbox.strategies.networkFirst(),
//     "GET"
// );
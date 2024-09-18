// Nome della cache corrente
const CACHE_NAME = "version-1";

// Risorse da mettere in cache
const urlsToCache = ["index.html", "offline.html"];

// Evento 'install' - viene attivato quando il Service Worker viene installato
this.addEventListener("install", (event) => {
    event.waitUntil(
        // Apri (o crea) una cache con il nome specificato
        caches.open(CACHE_NAME).then((cache) => {
            console.log(cache);
            // Aggiungi le risorse specificate nell'array urlsToCache alla cache
            return cache.addAll(urlsToCache);
        })
    );
});

// Evento 'fetch' - intercetta tutte le richieste di rete
this.addEventListener("fetch", (event) => {
    event.respondWith(
        // Controlla se la richiesta corrisponde a qualcosa di già presente nella cache
        caches.match(event.request).then((res) => {
            // Se la risorsa è nella cache, restituiscila. Altrimenti fai la richiesta alla rete
            return res || fetch(event.request).catch(() => {
                // Se la richiesta alla rete fallisce (es. utente offline), restituisci la pagina 'offline.html'
                return caches.match("offline.html");
            });
        })
    );
});

// Evento 'activate' - viene attivato quando il Service Worker viene attivato (di solito dopo l'installazione)
this.addEventListener("activate", (event) => {
    // Lista delle cache da conservare (in questo caso solo la versione corrente)
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);

    event.waitUntil(
        // Recupera tutti i nomi delle cache attualmente salvate
        caches.keys().then((cacheNames) => {
            return Promise.all(
                // Itera su tutte le cache e rimuovi quelle che non sono nella whitelist
                cacheNames.map((cacheName) => {
                    if (!cacheWhiteList.includes(cacheName)) {
                        // Se la cache non è nella whitelist, cancellala
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

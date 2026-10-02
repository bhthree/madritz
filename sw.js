// GENERADO POR build_pwa.py — service worker.
//
// v1 era cache-first para TODO. Eso hace que una PWA ya instalada no vea
// nunca una versión nueva: por muchas veces que regeneres ./pwa, el iPhone
// sigue sirviendo lo que guardó el primer día.
//
// v2:
//   · navegación (abrir la app) → RED primero, caché si no hay red. Así una
//     versión nueva entra sola en cuanto haya conexión, y sin red sigue
//     abriendo.
//   · el resto → caché primero y revalidación en segundo plano.
const CACHE='madritz-v3.0';
const FILES=['./','./index.html','./plantillas.js','./inventor.js','./app.js','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./splash-1290x2796.png','./splash-1179x2556.png','./splash-1170x2532.png','./splash-1125x2436.png','./splash-828x1792.png','./splash-750x1334.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(
    ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  if(req.mode==='navigate'){
    e.respondWith(
      fetch(req).then(r=>{
        const copia=r.clone();
        caches.open(CACHE).then(c=>c.put('./index.html',copia)).catch(()=>{});
        return r;
      }).catch(()=>caches.match('./index.html').then(r=>r||caches.match('./')))
    );
    return;
  }
  e.respondWith(caches.match(req).then(hit=>{
    const red=fetch(req).then(r=>{
      if(r&&r.ok){const copia=r.clone();
                  caches.open(CACHE).then(c=>c.put(req,copia)).catch(()=>{});}
      return r;
    }).catch(()=>hit);
    return hit||red;
  }));
});

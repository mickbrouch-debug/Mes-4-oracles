const CACHE='les-6-oracles-voice-v3-20261113';
const FILES=['./','./index.html','./tarot-78.html','./lenormand-54.html','./portes-intuition.html','./belline.html','./astrologie.html','./runes.html','./analyse-croisee.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon.svg'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET') return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin) return;
  const isHTML=request.mode==='navigate'||request.destination==='document'||/\\.html?$/i.test(url.pathname);
  if(isHTML){
    event.respondWith(fetch(request).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}
      return response;
    }).catch(()=>caches.match(request).then(hit=>hit||caches.match('./index.html'))));
  } else {
    event.respondWith(caches.match(request).then(hit=>hit||fetch(request).then(response=>{
      if(response&&response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy));}
      return response;
    })));
  }
});

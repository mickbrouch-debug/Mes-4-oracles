const CACHE='six-oracles-release-20261113-r2';
const CORE=['./','./index.html','./tarot-78.html','./lenormand-54.html','./portes-intuition.html','./belline.html','./astrologie.html','./runes.html','./analyse-croisee.html','./oracle-runtime.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon.svg'];
self.addEventListener('install',event=>{event.waitUntil((async()=>{const cache=await caches.open(CACHE);await Promise.all(CORE.map(async url=>{try{const response=await fetch(url,{cache:'reload'});if(response.ok)await cache.put(url,response)}catch(e){}}));await self.skipWaiting()})())});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;if(url.pathname.includes('/api/'))return;
 const isNavigation=req.mode==='navigate'||/\.html?$/i.test(url.pathname)||url.pathname.endsWith('/');
 if(isNavigation){event.respondWith((async()=>{try{const fresh=await fetch(req,{cache:'no-store'});if(fresh.ok){const c=await caches.open(CACHE);c.put(req,fresh.clone());return fresh}}catch(e){}return (await caches.match(req))||(await caches.match('./index.html'))})());return;}
 event.respondWith((async()=>{const hit=await caches.match(req);if(hit)return hit;try{const fresh=await fetch(req);if(fresh.ok){const c=await caches.open(CACHE);c.put(req,fresh.clone())}return fresh}catch(e){return hit||Response.error()}})());
});

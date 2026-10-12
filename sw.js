// Cache only the application shell. Never cache live audio or external broadcasters.
const NAME="egypt-radio-pwa-shell-v2-maspero";
const PATHS=["./","./index.html","./app.js","./maspero.js","./manifest.webmanifest","./icon.svg"];
self.addEventListener("install",event=>event.waitUntil(caches.open(NAME).then(cache=>cache.addAll(PATHS)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==NAME).map(key=>caches.delete(key))))])));
self.addEventListener("fetch",event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=="GET"||url.origin!==self.location.origin||request.destination==="audio"||request.destination==="video"||request.headers.has("range"))return;
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{
   if(response.ok)caches.open(NAME).then(cache=>cache.put(request,response.clone()));
   return response;
 })));
});

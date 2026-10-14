const BUILD_ID="4914d5bccf0e6b75e101";
const PUBLIC_FILES=["assets/app-D-7tj2UL.js","assets/style-B6thsnGm.css","icons/app-180.png","icons/app-192.png","icons/app-512.png","icons/app.svg","index.html","manifest.webmanifest"];
/* Public application shell only. No background business requests, location, photos or saved sessions. */
const CACHE_PREFIX='qltt-public:'+self.registration.scope;
const CACHE_NAME=CACHE_PREFIX+BUILD_ID;
const PUBLIC_URLS=new Set(PUBLIC_FILES.map(path=>new URL(path,self.registration.scope).href));
const SHELL_URL=new URL('index.html',self.registration.scope).href;
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll([...PUBLIC_URLS])))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_PUBLIC_UPDATE')void self.skipWaiting()});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);url.hash='';
 if(request.method!=='GET'||url.search||request.headers.has('authorization')||url.origin!==new URL(self.registration.scope).origin)return;
 const navigation=request.mode==='navigate'&&(url.href===self.registration.scope||url.href===SHELL_URL);
 if(navigation){event.respondWith(fetch(request).then(response=>response.ok?response:caches.open(CACHE_NAME).then(cache=>cache.match(SHELL_URL).then(cached=>cached||response))).catch(()=>caches.open(CACHE_NAME).then(cache=>cache.match(SHELL_URL))));return}
 if(!PUBLIC_URLS.has(url.href))return;
 // Exact build files are immutable. Do not add arbitrary same-origin GETs to this cache.
 event.respondWith(caches.open(CACHE_NAME).then(cache=>cache.match(request).then(cached=>cached||fetch(request))));
});

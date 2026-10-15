const BUILD_ID="c354ab2ac11ac2be26b4";
const PUBLIC_FILES=["assets/Admin-BgTU1fWm.js","assets/AssignmentQueue-DteZO1xV.js","assets/Audit-BWYUP0fS.js","assets/Campaigns-Cx4QxHyI.js","assets/Field-09MnK_zz.js","assets/IncidentTrash-Db0zOSp5.js","assets/Reports-CW1sneYb.js","assets/WorkflowScreens-SZ0TQmpM.js","assets/Workspace-ou3GALIT.js","assets/app-BKqo9KNG.js","assets/gas-Admin-cgW0_brt.js","assets/gas-AssignmentQueue-CSq3N9VJ.js","assets/gas-Audit-4a6RzbW-.js","assets/gas-Campaigns-BO6gjb1O.js","assets/gas-Field-D0VY660C.js","assets/gas-IncidentTrash-D-OFbZio.js","assets/gas-Reports-D-7g1JdW.js","assets/gas-WorkflowScreens-Dt2H_qXp.js","assets/gas-Workspace-4iZROyeT.js","assets/gas-login-BEhvSrhM.js","assets/gas-photos-CFUUM_AQ.js","assets/gas-reports-DQNDUe50.js","assets/login-CG039EeV.js","assets/photos-DNFeUyKs.js","assets/reports-DQNDUe50.js","assets/style-hNql_5XA.css","icons/app-180.png","icons/app-192.png","icons/app-512.png","icons/app.svg","index.html","manifest.webmanifest"];
const PRECACHE_FILES=["assets/app-BKqo9KNG.js","assets/login-CG039EeV.js","assets/style-hNql_5XA.css","icons/app-180.png","icons/app-192.png","icons/app-512.png","icons/app.svg","index.html","manifest.webmanifest"];
/* Public application shell only. No background business requests, location, photos or saved sessions. */
const CACHE_PREFIX='qltt-public:'+self.registration.scope;
const CACHE_NAME=CACHE_PREFIX+BUILD_ID;
const PUBLIC_URLS=new Set(PUBLIC_FILES.map(path=>new URL(path,self.registration.scope).href));
const PRECACHE_URLS=PRECACHE_FILES.map(path=>new URL(path,self.registration.scope).href);
const SHELL_URL=new URL('index.html',self.registration.scope).href;
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(PRECACHE_URLS)))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_PUBLIC_UPDATE')void self.skipWaiting()});
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);url.hash='';
 if(request.method!=='GET'||url.search||request.headers.has('authorization')||url.origin!==new URL(self.registration.scope).origin)return;
 const navigation=request.mode==='navigate'&&(url.href===self.registration.scope||url.href===SHELL_URL);
 // Use the installed shell together with its exact build assets. A weak connection
 // must not hold an already installed app behind a navigation fetch. The normal
 // worker update flow checks for a new build separately and activates it explicitly.
 if(navigation){event.respondWith(caches.open(CACHE_NAME).then(cache=>cache.match(SHELL_URL)).catch(()=>undefined).then(cached=>cached||fetch(request)));return}
 if(!PUBLIC_URLS.has(url.href))return;
 // Store an exact deferred module only after a real screen requests it. This
 // keeps previously opened local capture available offline without prefetching
 // admin/report/capture code on the login screen. Storage failure cannot prevent
 // a successful network response from opening the feature.
 const load=async()=>{
  let cache;try{cache=await caches.open(CACHE_NAME);const cached=await cache.match(request);if(cached)return cached}catch{/* Fall through to the network. */}
  const response=await fetch(request);
  if(cache&&response.ok&&response.type!=='opaque'){try{await cache.put(request,response.clone())}catch{/* Keep the successful response even if storage is full. */}}
  return response;
 };
 event.respondWith(load());
});

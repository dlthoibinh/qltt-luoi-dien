const BUILD_ID="1442fe8bbe11bd61af92";
const PUBLIC_FILES=["assets/Admin-hLf0tf45.js","assets/AssignmentQueue-Dyxjt47W.js","assets/Audit-DzIot_6V.js","assets/Campaigns-D7THdx6Q.js","assets/Field-DBupV6Mi.js","assets/IncidentTrash-DNjFki7_.js","assets/Reports-3js80vr0.js","assets/WorkflowScreens-DQiUtBMZ.js","assets/Workspace-BdFwc1sR.js","assets/app-CRK19a3E.js","assets/gas-Admin-F5-FqMJF.js","assets/gas-AssignmentQueue-DynsO0dO.js","assets/gas-Audit-DruXmcpa.js","assets/gas-Campaigns-BkWTSNIT.js","assets/gas-Field-BjNTAR2r.js","assets/gas-IncidentTrash-_BJIc46s.js","assets/gas-Reports-BTBSIKt1.js","assets/gas-WorkflowScreens-B-7aP4NU.js","assets/gas-Workspace-B-vSkEWl.js","assets/gas-login-C4DLAOqf.js","assets/gas-photos-D8no_mNB.js","assets/gas-reports-DQNDUe50.js","assets/login-w3cAmhTE.js","assets/photos-CrfnZ9cs.js","assets/reports-DQNDUe50.js","assets/style-BYfTqdDv.css","icons/app-180.png","icons/app-192.png","icons/app-512.png","icons/app.svg","index.html","manifest.webmanifest"];
const PRECACHE_FILES=["assets/app-CRK19a3E.js","assets/login-w3cAmhTE.js","assets/style-BYfTqdDv.css","icons/app-180.png","icons/app-192.png","icons/app-512.png","icons/app.svg","index.html","manifest.webmanifest"];
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

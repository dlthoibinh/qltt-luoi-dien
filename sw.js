const BUILD_ID="af0563d7a45795bd03c4";
const PUBLIC_FILES=["assets/Admin-D3qHnToM.js","assets/AssignmentQueue-lJMC2TAR.js","assets/Audit-2l-s1hV0.js","assets/Campaigns-DJjRBj3p.js","assets/Field-DU-F9s27.js","assets/IncidentTrash-98Vawm12.js","assets/Reports-BfGDPhvg.js","assets/WorkflowScreens-DfCV1jzO.js","assets/Workspace-i8fTMAUO.js","assets/app-w6fhbhku.js","assets/gas-Admin-Cz6Ygs34.js","assets/gas-AssignmentQueue-J13lrTia.js","assets/gas-Audit-CTJTkAlI.js","assets/gas-Campaigns-DuZkKt2w.js","assets/gas-Field-CmWmN7UV.js","assets/gas-IncidentTrash-ColM9ZlI.js","assets/gas-Reports-DwjjPt3n.js","assets/gas-WorkflowScreens-Dtqq9RmC.js","assets/gas-Workspace-CRiDx0eY.js","assets/gas-login-D9o46xcq.js","assets/gas-photos-CTXWPbXD.js","assets/gas-reports-DQNDUe50.js","assets/login-BhMJ9xW1.js","assets/photos-DrOsHIwK.js","assets/reports-DQNDUe50.js","assets/style-B_-Op57e.css","icons/app-180.png","icons/app-192.png","icons/app-512.png","icons/app.svg","index.html","manifest.webmanifest"];
const PRECACHE_FILES=["assets/app-w6fhbhku.js","assets/login-BhMJ9xW1.js","assets/style-B_-Op57e.css","icons/app-180.png","icons/app-192.png","icons/app-512.png","icons/app.svg","index.html","manifest.webmanifest"];
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

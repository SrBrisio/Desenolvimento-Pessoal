const CACHE_NAME='meu-desenvolvimento-v18';
const ASSETS=['./','./index.html','./manifest.json','./config.js','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const x=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,x));return r;}).catch(()=>caches.match('./index.html'))));});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(list => {
      for(const client of list){
        if('focus' in client) return client.focus();
      }
      if(clients.openWindow) return clients.openWindow('./');
    })
  );
});

self.addEventListener('push', event => {
  let data={title:'Level Up',body:'Você tem um lembrete.',url:'./'};
  try{
    if(event.data) data={...data,...event.data.json()};
  }catch(e){
    if(event.data) data.body=event.data.text();
  }
  event.waitUntil(
    self.registration.showNotification(data.title,{
      body:data.body,
      icon:'./icon-192.png',
      badge:'./icon-192.png',
      tag:data.tag||'level-up-reminder',
      renotify:true,
      data:{url:data.url||'./'}
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  const target=event.notification.data?.url || './';
  event.waitUntil(
    clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
      for(const client of list){
        if('focus' in client){
          client.navigate(target);
          return client.focus();
        }
      }
      return clients.openWindow ? clients.openWindow(target) : undefined;
    })
  );
});

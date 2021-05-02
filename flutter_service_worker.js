'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2bd2f3604200a55f0f08dda149f663e0",
"favicon.ico": "0e3c49eac608a46fd89e6678fe3ea527",
"index.html": "f218a9d4e0a5f21d117bbbcd19071411",
"/": "f218a9d4e0a5f21d117bbbcd19071411",
"main.dart.js": "130a3955e035ac6057ebe2165e067ecd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1f566359d54a67c02eee9d2443d86650",
".git/config": "1aa03f6a0b6175e1bfdf0dcc0c874f98",
".git/objects/59/c10507d597a2fa281d91a61d58392333fdc4fc": "fde237dffdffe1f446322c3829a294fc",
".git/objects/3e/6c82b74ab76c0c893a65e0bbff8aee0219c0ea": "3551123668e4099c09404afcc92de128",
".git/objects/3e/fcf5db0be1571938fc02870777d86e011d5e1f": "572e562b99c4a79e89bfdfaf886e61ae",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6a/7f3eea5bd9437a95c6a3c652320d93d13f138e": "6b0168b99e4575f0d28c090e77e858c8",
".git/objects/60/09cede401d75aeff591038de68cbdfffbfe90d": "5e0ba85763bed53e18c60cd4447863a8",
".git/objects/33/1b0f1b06f0f3d6a60ce39f76c963ed56097101": "18de3008f0696908ac4b143f6d7386d8",
".git/objects/ae/6be4807a303fefba332e6af7a6bf68fcbdfa04": "0145f0e92bc904439930f4a3a5752a53",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/ca/c4b8ed45d94f9de6e6602f5ee479a38ad3d152": "f75979eec1941fb78be97410bb134b87",
".git/objects/16/790502c85317e3033047eae66226c139413c2c": "69a7c81888abe0a2937155cd6c3f0c9f",
".git/objects/89/e2b50e1f68435dc1b8b7107a82aa3a8289df86": "7bb089cdfc257baf6a6feaa4ad64f9a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/f72e1f30f26acf41ebf48dd5a6564f4a139093": "78fd66ec55c436b6eddcafee24ca8ca7",
".git/objects/72/cd825b0d1563c9bc7884467041923a4fe569d0": "e63c5cc14dd13f096308d5ebd13c30d5",
".git/objects/36/9715ea746caeecb7f3b9fea2ff7e666e1c86ce": "739319e3d8dfd6835c7e7232b4c99cbe",
".git/objects/09/9f1f036bafdb7b6c70d31cd2e492113a5d9e43": "d6ab3ff7607814fb6851ce1f2eb129c5",
".git/objects/37/01b5c836b92e8a8271e2f6477608e89b9d7922": "f419b0020e89539fad1917fd8b22dca6",
".git/objects/63/e11d5cd3ecd9dc66d8afa6224355db1d5e4ec3": "02b150d3fb2835fad8ce7cdae086c86e",
".git/objects/bf/2d0b1fefd5d9fbeff9c0d766cf2764ef102599": "9739d8264c00030de36cf2f2909eac27",
".git/objects/dc/25267478e85a6cf147d497cfb6a7ee4d4fb5ff": "33c56015d9fc46464e0ad6e9b33f8826",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/2bce180894655642b2e4b5761916749a67df50": "014bc09eb16e471c7c8a03469d91b31d",
".git/objects/f0/a65761e1107aba09581639993480a43625162b": "2de732aacc0f5437b44522a3bdc76aed",
".git/objects/f1/9ceaaebef925fb74da728334c4079d81caaad2": "3bec58c8d8e236eb4ea344fb6f14d40d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/ec4deff23ba05ebae52e622a42bd41fbae0ea2": "0538b731bfe3f13558b14d1c51f67735",
".git/objects/84/aac6f1269fde6fe6ae439b74fd7c1db943c692": "5b1c78a4c3b637f52a058bcacdb16c40",
".git/objects/12/cf54aead4e42437b90871978372ff0552850da": "4926def64bbbefebca3366d2df495398",
".git/objects/76/8af1116d81076a94f7b520281a54158f0c166c": "c656d903b94d316b2eb089550ca9d65e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5b28a953f3c26e44a61cf509b3f35b6c",
".git/logs/refs/heads/master": "5b28a953f3c26e44a61cf509b3f35b6c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "de7f9d768cd4383f3db1e31345c4c453",
".git/index": "72439e5ced72f7d8ba10602b2d9bf622",
".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
"assets/AssetManifest.json": "bd8c7b817e0fd2f18844703fc5f615e3",
"assets/NOTICES": "f8e96da2b5aa05506e339c02c914b328",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/me.png": "c971fc8ae2e4c3cb0417d15eeeb59f1b",
"assets/assets/currency.gif": "381ec7bea6df9060f4cd4ef1e4851a93",
"assets/assets/github.png": "79309b751fc01736ea1cc3d786b25651",
"assets/assets/estim8.gif": "3a4230511b80144a23de3f60522fcf7f",
"assets/assets/img.png": "e03b6c6e7ad0cfa28b34778c7d856697",
"assets/assets/earthquake.gif": "225a757d6e5353033d2902fed8e85dce",
"assets/assets/img1.png": "51482f08b200f86441515a0bdc1d3a0b",
"assets/assets/binumara_ios.gif": "c1f4ef79c46a251cea2e5405e2882e30",
"assets/assets/bg.png": "09d85ac5070abc71415d9386e62b547a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

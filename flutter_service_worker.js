'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a629c5329838819cac4eb9bf8765e779",
"version.json": "0efdfdef06e8995097876189e7023009",
"index.html": "628e3922dd6a209c51b15e8c75484778",
"/": "628e3922dd6a209c51b15e8c75484778",
"main.dart.js": "2d632dbe88f1e583a6e946a301fb3965",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ddf4ec1cd58c18223f56000fd4db8ce0",
"assets/NOTICES": "f91d26503dbaeddce30b1e9bb2d0b57e",
"assets/FontManifest.json": "ae025476e4752314628395482971d0ad",
"assets/AssetManifest.bin.json": "ef65da12321389a761a5e4378138dba4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "6bd46eb72c336829ea133e891a8d3a26",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "19d55bde88b5681535e6b15ff85293fa",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "123f6d1903267944f136b157ff87c20b",
"assets/fonts/MaterialIcons-Regular.otf": "56aec771881faf1fae27bc78ceb82dc2",
"assets/assets/images/card.png": "4b2d168c29fd87b05b41014e876a5130",
"assets/assets/images/home/splash/splash_dsms.png": "2c68e06dc5e7eb43bb834f0625eb4232",
"assets/assets/images/home/splash/splash.png": "ffc35aced975d4408944f6fa4b6575e5",
"assets/assets/images/home/splash/splash_right.png": "5cc09a563bccf2a58f63b3476117d72b",
"assets/assets/images/home/splash/splash_iebrid.png": "b7cbb0f3d285f1bae858da1520643c88",
"assets/assets/images/home/centre_home/CentreHome_Background.png": "2b9c7d301901fac664ddd2ea39d7fd95",
"assets/assets/images/home/centre_home/slider/img3.png": "e97c1e5b5ce5eb917d8aa7ce16fd9f54",
"assets/assets/images/home/centre_home/slider/img2.png": "85ac8750b1b3e8e5cba02691e5cb4579",
"assets/assets/images/home/centre_home/slider/img1.png": "ade18935fc958b7ce783d4c468ece139",
"assets/assets/images/aboutus/slid_aboutus1.jpeg": "8b5b1746a1098eedd2417f0e306020f8",
"assets/assets/images/aboutus/slid_aboutus2.jpeg": "8d0bd22e262b6fae0c3eb4f1d9005715",
"assets/assets/images/aboutus/slid_aboutus3.jpeg": "69eb3fa0d050b6a29c94741878ad6845",
"assets/assets/images/main.png": "bc7af942e007f409ceffe1fd27fda658",
"assets/assets/images/lms/empty_video.png": "87282e7004793615719f7811db807f57",
"assets/assets/images/lms/lms_button_bg.jpg": "06b5ffaffac5f5f96464acaed2588eb6",
"assets/assets/images/leads_dasboard_empty.jpg": "10eb05cedc9b75eddfe8881221d91ef5",
"assets/assets/images/university/4.jpg": "c1774f09e078e17ebc69e13b6478548c",
"assets/assets/images/university/5.jpg": "50ea77c2789f2a1c1684de0739924094",
"assets/assets/images/university/6.jpg": "eed288c9bac55da77d18d791901aefe7",
"assets/assets/images/university/2.jpg": "c2f65a4fa2ed3aa46dd7797c9ad66155",
"assets/assets/images/university/3.jpg": "5d6cd287eb64791d82d658f6428d1e6d",
"assets/assets/images/university/1.jpg": "64403b83a58224e351379ca7791e23d9",
"assets/assets/images/bottom1.png": "6b84f28383721d9658f43202fc05df65",
"assets/assets/images/students/unknown-student.jpg": "e2862a26a227b907764c094f3dd8202e",
"assets/assets/images/top2.png": "5ba82c2d5a07482a351172f7b5ebcfb7",
"assets/assets/images/dsms_dasboard.png": "b71ab2c2b9c785f45cdd5cdb477f5246",
"assets/assets/images/Female-Student.png": "e22fdcc3346492ff577e7e742f7cfc42",
"assets/assets/images/bottom2.png": "d75870ab4305146f8f4098192422a4d2",
"assets/assets/images/logo.png": "821fff93925ff88cebdfe5d66103a055",
"assets/assets/images/top1.png": "b080bce9f5b1ea61f79200807d3d154d",
"assets/assets/images/profile.jpg": "e2862a26a227b907764c094f3dd8202e",
"assets/assets/images/gym/fitness_dashboard.png": "df89ab53cc4bda31d165d73566b97edc",
"assets/assets/images/gym/exercise2.jpg": "cbb9461b81ed6c17a823d36c35cc809d",
"assets/assets/images/gym/exercise1.jpg": "ff90e87ae827f8279965fde375acc135",
"assets/assets/images/logo.svg": "fda9a67f9449fd3a1b4c59cb2735bb4f",
"assets/assets/icon/icon.png": "913b155279c5ad557266981811bb8041",
"assets/assets/fonts/RobotoCondensed-VariableFont_wght.ttf": "db98a47617ff4be3def284d81a518149",
"assets/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf": "78609089d3dad36318ae0190321e6f3e",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

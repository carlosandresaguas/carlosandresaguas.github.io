'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "217737a882d8632b56977d6b0210dc88",
"assets/assets/eci.docx": "2ef3b846e03c97767a6d545c8a768c5f",
"assets/assets/ecm.docx": "e892526de20b303101485777f6283b4c",
"assets/assets/ehi.docx": "6667a2ff78b93ca7ec41a0fc9b7e4788",
"assets/assets/ehm.docx": "75181c04963d866c9c93fac3c5887c1f",
"assets/assets/eri.docx": "171851ef8e8c5a10419707b1fb1d1dcb",
"assets/assets/erm.docx": "ef14e77a09adf948b1e8c163fe88c6b9",
"assets/assets/images/a_ri.jpg": "56bda7c0417cf3aed2e73b9cb475edbf",
"assets/assets/images/b_ri.jpg": "066114cb7457b5028837f4ead40e42a4",
"assets/assets/images/ci_ao.jpg": "ceb7cb8770ce6f256b4b68c98e0274fa",
"assets/assets/images/ci_ch.jpg": "20e84468b84cf8adcdbc2858a2b57dbc",
"assets/assets/images/ci_cl.jpg": "d00226443d97f013b566c8667f616cfc",
"assets/assets/images/ci_cs.jpg": "d9795fe9299f841112578fd78e724302",
"assets/assets/images/ci_dav.jpg": "e86e0966fd54e2fd26b5e2c9de72a256",
"assets/assets/images/ci_dp.jpg": "c89d4d1f111919e0f5c87bc1b908b4b0",
"assets/assets/images/ci_epm.jpg": "44c086585836cb23d85724c0ab7e073d",
"assets/assets/images/ci_esf.jpg": "e4f55f39e21c228165e5cd79d8e0750f",
"assets/assets/images/ci_esfc.jpg": "2c5790adf82a2cd1933c78240a75831d",
"assets/assets/images/ci_esfperm.jpg": "80d20db5f1fe310aa2f5de562e4a89af",
"assets/assets/images/ci_f.jpg": "e80a44ac7488f6cf3b9974f8cfcd94bc",
"assets/assets/images/ci_g.jpg": "dfe8643dfa0cede1a74cf3feb09cc971",
"assets/assets/images/ci_kl.jpg": "6000f1b7be728131d3bdd9d8a3341b91",
"assets/assets/images/ci_km.jpg": "16cfaa8e94c663cd9577b80cdbcc573e",
"assets/assets/images/ci_kr.jpg": "296b41edada3f98f7a7a4aff1aba2b84",
"assets/assets/images/ci_ks.jpg": "155e4919cb90b2f6c2bf64d0bed94872",
"assets/assets/images/ci_kt.jpg": "ae48cfd6a35b535a86466bf9f701bac4",
"assets/assets/images/ci_kx.jpg": "9f1b1284ee7b622b89a27960d2731879",
"assets/assets/images/ci_r.jpg": "994f261b75844169ecbf9449b260d758",
"assets/assets/images/ci_sf1.jpg": "abfa2034e48c7cd39057292457b5ce9e",
"assets/assets/images/ci_sh.jpg": "43f4c0deb6a3902d77c0e909cfd2f67f",
"assets/assets/images/ci_vmax.jpg": "0e1dfc09692447138d18facfe303f174",
"assets/assets/images/ci_wa.jpg": "e6419871afed694bf7444a7ee7fca77b",
"assets/assets/images/ci_wr.jpg": "5ae44543f68458a2d7ea930259b455f6",
"assets/assets/images/cma.jpg": "e253074983bdb5b8c72016598d27152c",
"assets/assets/images/cmc_ri.jpg": "a202faf8f1a2f4d9da28343bf95cb6fa",
"assets/assets/images/cm_cp.jpg": "0bea92f33a920d17900fa43de786a4ac",
"assets/assets/images/cm_cs.jpg": "39a9954fef3d0217ede5c67c06f85720",
"assets/assets/images/cm_dp.jpg": "c298a6f38aa5f8debfca3fb45e037dce",
"assets/assets/images/cm_esfc.jpg": "07e5ce60a816ec779c51e430496398b7",
"assets/assets/images/cm_esff.jpg": "792246ac47ceb479bb68950e00d4aeb4",
"assets/assets/images/cm_f.jpg": "ab1396445f36e10aafa54dc78bddefa4",
"assets/assets/images/cm_km.jpg": "763e490de46ab78416bb07e4ba10749d",
"assets/assets/images/cm_ks.jpg": "09a09914e1c5a5042d5cb46e2a6b61fc",
"assets/assets/images/cm_kv.jpg": "ad731569ab1c440aa7ede0e8eb0e5f9b",
"assets/assets/images/cm_v.jpg": "75cc5e9a30bb0a6bf006e1f33b729d41",
"assets/assets/images/cm_vmax.jpg": "b8a760b884f59f9b18fd4c789812ef06",
"assets/assets/images/cm_wt.jpg": "45a687bac7754edfae47b8d3e039eac6",
"assets/assets/images/conico_1.jpg": "c94f3b8023d408649ce0a727cb5fe54e",
"assets/assets/images/conico_2.jpg": "07a33447deaf59eb48eb340fab239cbf",
"assets/assets/images/cp.jpg": "70c69c022c3615054b5d852947709d16",
"assets/assets/images/cpf_ri.jpg": "5d514ea04c4a574aef82b3d330ca6e6c",
"assets/assets/images/cpm.jpg": "0cce2d54bdc8c86ef9baaec4e17f7868",
"assets/assets/images/dp_ri.jpg": "20baea0e98e88ee245b6099bfc2d6f7c",
"assets/assets/images/ef_ri.jpg": "169e4635f664f70480c8abc95ae6c2d0",
"assets/assets/images/fm.jpg": "496461b145c785bf6b02b4292c400a41",
"assets/assets/images/f_ri.jpg": "6ed5575fe80bd35610654a2783912803",
"assets/assets/images/gears.png": "23333ade9bc210088ae047f4792d3575",
"assets/assets/images/helicoidal_1.jpg": "92459ffa8368e3f6808603531dea9264",
"assets/assets/images/helicoidal_2.jpg": "c952cd4fe420f20e136835bcb68b9f04",
"assets/assets/images/hi_apt.jpg": "e6ff67a5422d2b92b3f10d965259870e",
"assets/assets/images/hi_dp.jpg": "5a661f0a4b740c53d0e19c280840de02",
"assets/assets/images/hi_mn.jpg": "5427acd8248d54999ef1f20f472b875b",
"assets/assets/images/hi_pn.jpg": "a8fc182dea12d6bc9b3ecebfc092b12c",
"assets/assets/images/hi_pt.jpg": "3952257af6c6abfe381742533d568eff",
"assets/assets/images/hi_z.jpg": "27aa0b3181ad2f4631b0c37de242b539",
"assets/assets/images/hm_dp.jpg": "24a87db9484dad0991b5c2616b2f84dc",
"assets/assets/images/hm_esfc.jpg": "cb5be538c3d7ea96c60da05db58a06bc",
"assets/assets/images/hm_esff.jpg": "406f0593d3e171c94c05a883a4d279c0",
"assets/assets/images/hm_f.jpg": "10ed07bf5865e4718c4c49371eb69d7f",
"assets/assets/images/hm_ks.jpg": "bc55408bf6625eb25bb4f6680beb53f0",
"assets/assets/images/hm_kv.jpg": "a49d1bf23f8ce902d2d39c12e6d9aa40",
"assets/assets/images/hm_mt.jpg": "8576d3a5735398a9bc5d1a1a43cd4c81",
"assets/assets/images/hm_pn.jpg": "89cce4cf2ea4b99652319ecba337a6e6",
"assets/assets/images/hm_v.jpg": "6d59758fe8af94511fb49f75736c5edb",
"assets/assets/images/hm_wt.jpg": "3f350e5b27f0dd23ce0c23e1d6c1f53c",
"assets/assets/images/I.jpg": "b420bc8b45069a55ea7b5ec92e281537",
"assets/assets/images/jh.jpg": "192d36e2bf5e588325f56eaadf4fec3f",
"assets/assets/images/JT.jpg": "60a42794db12aee0c82fc9d3be60356c",
"assets/assets/images/j_ec.jpg": "4c96b6cae815f6d641c15f130aac7232",
"assets/assets/images/km_ri.jpg": "bf89d0fd96e8b512c3583c763489e41f",
"assets/assets/images/ko.jpg": "47bf379516882c604a872b767ac41f15",
"assets/assets/images/ko_ec1.jpg": "c5d4f96fd70a1657222eec21fb221749",
"assets/assets/images/ks_ri.jpg": "afc716c64920862b5b7a3dfd48536055",
"assets/assets/images/kv.jpg": "c8f6c436575d8b857b518e16defd4f6c",
"assets/assets/images/kv_ri.jpg": "7e87f34b64bea31f7f818ae1907d2ba6",
"assets/assets/images/recto_1.jpg": "63b8390382369ef4bd2885d710dcf920",
"assets/assets/images/recto_2.jpg": "628394b49d4e923d378a27ce1be90609",
"assets/assets/images/ri_sc.jpg": "9c5d4290e334c79951619b14e33a7777",
"assets/assets/images/rm_cpf.jpg": "80cc664b88a8d34436200ce9d944e5a4",
"assets/assets/images/rm_dp.jpg": "688c71e6e44dee5dfb0cc9e7f03ea25c",
"assets/assets/images/rm_esfa.jpg": "10320b5ae44d409ad035d313d2bd3279",
"assets/assets/images/rm_esfc.jpg": "11cffb4ebb7cf2dac49e07a0ec5def79",
"assets/assets/images/rm_esff.jpg": "c8de43e8ba3a5cb9e056b7b3e48b74d8",
"assets/assets/images/rm_f.jpg": "c984ec44b8602a23bbf8d06a1a8adc38",
"assets/assets/images/rm_wt.jpg": "5317b1afafd9aade713daa198615e172",
"assets/assets/images/sac.jpg": "c2239d683b6761674a7fe5d2cdad58f6",
"assets/assets/images/sac_m.jpg": "1f3d84d62ce9a0c47cf74f8e86962e68",
"assets/assets/images/sat.jpg": "468a0f5f8a68ddb136f88286fcbf3842",
"assets/assets/images/sfg_ri.jpg": "807c10dacf9dc08bd2093d5f65b69779",
"assets/assets/images/sf_ri.jpg": "65ee286df661cbe16da15d2d242dc3dc",
"assets/assets/images/shg_ri.jpg": "20071f224736d6c2cfe8b25fcd25ce95",
"assets/assets/images/shp_ri.jpg": "eddc45e8960ea4a96994cbf61f2fbd26",
"assets/assets/images/s_mec.png": "1f58c5523cfdbaa4eabf539fedefc7df",
"assets/assets/images/t_lewis.JPG": "771499edd8c80536557da61c89ae4712",
"assets/assets/images/v_ri.jpg": "64cf1c75aed10f63389c2d733d892b08",
"assets/assets/images/wt_ri.jpg": "6d0b1a7af39fd61241ad30f999805648",
"assets/assets/images/YN.jpg": "0bb3126c94bb80d8de17a38d203095f9",
"assets/assets/images/zn.jpg": "b4adac2996b71304388db540f9af0d92",
"assets/assets/plantillas/eri.docx": "20f69e2a30e6d19b29a0b664b6d11fd6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f9a6463c12c12c38ab02bf7d4fbe8e6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "4301bdbec3be4f2cba522d43908a5408",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "8f6fdcd74a01f00266fb76394d6f90e3",
"icons/Icon-512.png": "435c9cd40f99f1a98831a4a0e2d50798",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a249698e9525172f09d0c24202bbe9a1",
"/": "a249698e9525172f09d0c24202bbe9a1",
"main.dart.js": "51caa0ecdf911927feadd2b5528ce98a",
"manifest.json": "63ac8c62789497583d04b0e5c810ce5d",
"version.json": "fe7bc1c922ddfe6558f97c2456ea02be"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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

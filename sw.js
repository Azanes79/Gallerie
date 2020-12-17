
self.addEventListener('fetch', event => {
    // console.log('fetch sans event')
    event.waitUntil(console.log('fetch'));
});

self.addEventListener('install', event => {
    event.waitUntil(console.log('Install success'));
});



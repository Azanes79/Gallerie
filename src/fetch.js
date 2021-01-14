self.addEventListener("fetch", event => {
	console.log(event.request.url);
});

self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  if (url.indexOf("http://wonderful-haibt-c1c7e8.netlify.app/images.json") === 0) {
    event.respondWith(
      fetch(event.request).then((response) => {
        if(response.status !== 200) {
          console.error(
            "Service Worker",
            "Error when fetching",
            event.request.url
          );
		  
          return response;
        }
        console.info("Formatting data");

        return response.json().then((json) => {
			const formattedResponse = json.map((j) => ({
				link: j.link,
				desc: j.desc
			}));

			//return new Response(JSON.stringify(formattedResponse));
			const finalResponse = new Response(JSON.stringify(formattedResponse));
			let savedResponse = finalResponse.clone();

			caches.open(cacheName).then(cache => {
			cache.put(event.request,savedResponse);
			});

			return finalResponse;
        });
      })
    );
  }
  else {
    event.respondWith(
      caches
        .open(cacheName)
        .then(cache => cache.match(event.request))
        .then(response => response || fetch(event.request))
    );
  }
});
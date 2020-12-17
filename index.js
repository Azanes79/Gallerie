const button = document.getElementById('add-image');
var images = [];
var i = 0;
let html = ``;
button.addEventListener('click', async event => {
  await getImages();
  html += `<div class="card">
    <div class="header">
      <img src="${images[i].link}">
    </div>
    <div class="content">
      <p>${images[i].desc}</p>
    </div>
  </div>`;
  document.getElementById('grid-container').innerHTML = html
  if ( i === 4) {
    i = 0;
  } else {
    i++
  }
});

async function getImages() {
  try {
    const data = await ((await fetch('https://wonderful-haibt-c1c7e8.netlify.app/images.json')).json());
    images = data;
  } catch(e) {
    alert("Images inaccessibles");
  }
}

let deferredPrompt;
const addBtn = document.getElementById('test');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    addBtn.style.display = 'block';
    addBtn.addEventListener('click', (e) => {
      addBtn.style.display = 'none';
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });
  });
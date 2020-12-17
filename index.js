const button = document.querySelector('button');
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
  const data = await ((await fetch('https://wonderful-haibt-c1c7e8.netlify.app/images.json')).json());
  images = data;
}
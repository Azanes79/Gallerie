const button = document.querySelector('button');
var images = [];
var i = 1;
let html = ``;
button.addEventListener('click', event => {
  let requests = fetch('./images.json');
  let promise = new Promise(requests).then(_res => {
    console.log(_res);
  });
  html += `<div class="card">
    <div class="header">
      <img src="./img/img${i}.jpg">
    </div>
    <div class="content">
      <p>Ceci est une description</p>
    </div>
  </div>`;
  document.getElementById('grid-container').innerHTML = html
  if ( i === 5) {
    i = 1;
  } else {
    i++
  }
});
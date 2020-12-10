const button = document.querySelector('button');
var images = [];
button.addEventListener('click', event => {
  var image = new Image();
  image.src = "./img/img1.jpg";
  images.push(image);
  console.log(document.getElementById('grid-container'));
  console.log(images)
  for (var i = images.length - 1; i >= 0; i--) {
  	document.getElementById('grid-container').appendChild(images[i]);
  }
  
});
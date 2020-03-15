var canvas = document.getElementById("main-canvas");
var canvasWidth = canvas.width = window.innerWidth;
var canvasHeight = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var heightScale = 0.866;

function render() {
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img, 0, 0);
  }
  img.src = "data/kitchen.jpg"
};

render();

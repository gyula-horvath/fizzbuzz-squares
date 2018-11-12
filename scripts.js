var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

var a = 40;

var starterCw = cw/120;
var starterCh = ch/40;

for (var i=1; i<=15; i++) {
  if (i%15 === 0) {
    context.fillStyle = 'rgba(9, 222, 0, 0.5)';
  } else if (i%3 === 0) {
    context.fillStyle = 'rgba(48, 44, 190, 0.5)';
  } else if (i%5 === 0) {
    context.fillStyle = 'rgba(255, 255, 0, 0.5)';
  } else {
    context.fillStyle = 'rgba(63, 61, 65, 0.5)';
  }
  
  context.fillRect(starterCw + i * a / 2.5, starterCh + i * a / 3, a, a);
}

function initContext(id) {
  var canvas = document.getElementById(id);
  return canvas.getContext('2d');
}

function drawOverlapRect(id) {
  var ctx = initContext(id);
  // red rectangle
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(5, 5, 100, 100);
  ctx.fillStyle="rgba(0,0,200,0.5)";
  ctx.fillRect(55, 55, 100, 100);

  // outline of a rectangle
  ctx.strokeRect(250,150, 25,25);

  //clear rectangle, clear space
  ctx.clearRect(25,25,25,25);
}

function drawPictureFrame(id) {
  var ctx = initContext(id);
  ctx.fillStyle = 'blue';
  ctx.fillRect(5,5,180,180);
  ctx.clearRect(25,25,140,140);
  ctx.strokeRect(40,40,110,110);
}

function drawTriangle(id) {
  var ctx = initContext(id);
  ctx.fillStyle = 'rgba(200,0,0,0.5)';
  ctx.beginPath();
  ctx.moveTo(5,5);
  ctx.lineTo(100,200);
  ctx.lineTo(200,5);
  ctx.fill();

  // second triangle
  ctx.fillStyle = 'rgba(0,200,0,0.5)';
  ctx.beginPath();
  ctx.moveTo(5,5);
  ctx.lineTo(5,205);
  ctx.lineTo(205,5);
  ctx.fill();

  //third triangle
  ctx.fillStyle = 'rgba(10,100,100,0.6)';
  ctx.beginPath();
  ctx.moveTo(5,5);
  ctx.lineTo(205,205);
  ctx.lineTo(205,105);
  ctx.fill();
}

function drawSmiley(id) {
  var ctx = initContext(id);
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.moveTo(110,75);
  ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
  ctx.moveTo(65,65);
  ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
  ctx.moveTo(95,65);
  ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
  ctx.stroke();
}

function drawMultiline(id) {
  var ctx = initContext(id);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(100,5);
  ctx.lineTo(15,195);
  ctx.lineTo(195,75);
  ctx.lineTo(5,75);
  ctx.lineTo(175,195);
  ctx.lineTo(100,5);
  ctx.stroke();
  ctx.fillStyle='yellow';
  ctx.fill();
}

drawOverlapRect('canvas-example');
drawPictureFrame('picture-frame');
drawTriangle('triangle-example');
drawSmiley('smiley-face');
drawMultiline('multiline');
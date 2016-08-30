function initContext(id) {
  var canvas = document.getElementById(id);
  return canvas.getContext('2d');
}

function drawOverlapRect(id) {
  var ctx = initContext(id);

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(5, 5, 100, 100);
  ctx.fillStyle="rgba(0,0,200,0.5)";
  ctx.fillRect(55, 55, 100, 100);

  // outline of a rectangle
  ctx.strokeRect(250,150, 25,25);

  //clear rectangle, clear space
  ctx.clearRect(25,25,25,25);
}

// picture frame
function drawPictureFrame(id) {
  var ctx = initContext(id);

  ctx.fillStyle = 'blue';
  ctx.fillRect(5,5,180,180);
  ctx.clearRect(25,25,140,140);
  ctx.strokeRect(40,40,110,110);
}

drawOverlapRect('canvas-example');
drawPictureFrame('picture-frame');
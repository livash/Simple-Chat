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

function drawDiagonalTriangles(id) {
  var ctx = initContext(id);
  // first triangle
  ctx.beginPath();
  ctx.moveTo(10,5);
  ctx.lineTo(195,5);
  ctx.lineTo(195,190);
  ctx.fill();
  // second triangle
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(10,15);
  ctx.lineTo(10,185);
  ctx.lineTo(185,185);
  ctx.lineTo(10,15);
  ctx.stroke();
}

function drawArcs(id) {
  var ctx = initContext(id);
  var colors = ['red', 'blue', 'green'];
  for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
          ctx.fillStyle = colors[j];
          ctx.strokeStyle = colors[j];
          ctx.beginPath();
          var x = 25+j*50; // x coordinate
          var y = 25+i*50; // y coordinate
          var radius = 20; // Arc radius
          var startAngle = 0; // Starting point on circle
          var endAngle = Math.PI+(Math.PI*j)/2; // End point on circle
          var anticlockwise = i%2==0 ? false : true; // clockwise or anticlockwise

          ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

          if (i>1){
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
}

function drawOverlappingArcs(id) {
  var ctx = initContext(id);
  // arc one
  ctx.beginPath();
  ctx.arc(130, 15, 120, Math.PI, 0, true);
  ctx.stroke();

  // arc two
  ctx.beginPath();
  ctx.strokeColor = 'grey';
  ctx.arc(130, 130, 120, Math.PI, 0, false);
  ctx.stroke();

  // circle
  ctx.beginPath();
  ctx.fillStyle = 'cyan';
  ctx.arc(130, 70, 50, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.strokeColor = 'blue';
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(130, 70, 25, 0, 2 * Math.PI, true);
  ctx.fill();
  ctx.strokeStyle = 'black';
  ctx.stroke();
}

function drawQuadraticCurve(id) {
  var ctx = initContext(id);
  //x-axis
  ctx.beginPath();
  ctx.moveTo(10,170);
  ctx.lineTo(290, 170);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(290,170);
  ctx.lineTo(280,175);
  ctx.lineTo(280,165);
  ctx.fill();
  // y-axis
  ctx.moveTo(150,10);
  ctx.lineTo(150, 190);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(150,10);
  ctx.lineTo(155,20);
  ctx.lineTo(145,20);
  ctx.fill();
  // quadratic curve
  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.moveTo(65,25);
  ctx.quadraticCurveTo(150,315, 235,25);
  ctx.stroke();
  // cubic curve
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(95,25);
  ctx.quadraticCurveTo(150,315, 205,25);
  ctx.stroke();

  // legend
  ctx.font = "20px Arial";
  ctx.fillStyle = 'blue';
  ctx.fillText("y = x ^ 2",10,130);
  ctx.fillStyle = 'red';
  ctx.fillText("y = x ^ 4",10,100);
}

function getTransform(offset, zoom) {
  var k = zoom || 1;
  return function (value) {
    return k * (offset + value);
  }
}

function drawHeart(ctx, offsetX, offsetY, zoom) {
  var x = getTransform(offsetX, zoom);
  var y = getTransform(offsetY, zoom);
  ctx.beginPath();
  ctx.moveTo(x(75),y(40));
  ctx.bezierCurveTo(x(75),y(37),x(70),y(25),x(50),y(25));
  ctx.bezierCurveTo(x(20),y(25),x(20),y(62.5),x(20),y(62.5));
  ctx.bezierCurveTo(x(20),y(80),x(40),y(102),x(75),y(120));
  ctx.bezierCurveTo(x(110),y(102),x(130),y(80),x(130),y(62.5));
  ctx.bezierCurveTo(x(130),y(62.5),x(130),y(25),x(100),y(25));
  ctx.bezierCurveTo(x(85),y(25),x(75),y(37),x(75),y(40));
  ctx.fill();
}

function drawRedHeart(id) {
  var ctx = initContext(id);
  // background
  ctx.fillStyle = 'lightsalmon';
  ctx.fillRect(0,0,300,200);

  ctx.fillStyle = 'crimson';
  drawHeart(ctx, 25, 5, 1.5);

  ctx.fillStyle = 'orangered';
  drawHeart(ctx, 75, 45, 1);

  ctx.fillStyle = 'palevioletred';
  drawHeart(ctx, 138, 98, 0.7);

  // var p = new Path2D("M10 10 h 80 v 80 h -80 Z");
  // ctx.fill(p);
}

function drawColorSwatch(id, options) {
  var ctx = document.getElementById(id).getContext('2d');
  var i, k;
  for (i = 0; i < 6; i++) {
    for(k = 0; k < 6; k++) {
      if (options.r && options.g) {
        ctx.fillStyle = 'rgb(' + Math.floor(255 * (1 - k / 6)) + ',' +
                                  Math.floor(255 * (1 - i / 6)) + ',0)';
      } else if (options.g && options.b) {
        ctx.fillStyle = 'rgb(0,' + Math.floor(255 * (1 - i / 6)) + ',' +
                                  Math.floor(255 * (1 - k / 6)) + ')';
      }
      ctx.fillRect(75 + k * 25, 25 + i * 25, 25, 25);
    }
  }
}

function drawCirclesWithStroke(id, options) {
  var ctx = document.getElementById(id).getContext('2d');
  var i, k;
  ctx.lineWidth = 1.5;
  for(i = 0; i < 6; i++) {
    for(k = 0; k < 6; k++) {
      // set stroke color
      if (options.r && options.g) {
        ctx.strokeStyle = 'rgb(' + Math.floor(255 * (1 - k / 6)) + ',' +
                                  Math.floor(255 * (1 - i / 6)) + ',0)';
      } else if (options.g && options.b) {
        ctx.strokeStyle = 'rgb(0,' + Math.floor(255 * (1 - i / 6)) + ',' +
                                  Math.floor(255 * (1 - k / 6)) + ')';
      }

      // draw circle
      ctx.beginPath();
      ctx.arc(12.5 + k * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}

function drawTransparentCircles(id, offset) {
  var offset = offset || {x: 0, y: 0};
  var ctx = document.getElementById(id).getContext('2d');
  // draw background
  ctx.fillStyle = '#F30';
  ctx.fillRect(0 + offset.x, 0 + offset.y, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(75 + offset.x, 0 + offset.y, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(0 + offset.x, 75 + offset.y, 75, 75);
  ctx.fillStyle = '#FD0';
  ctx.fillRect(75 + offset.x, 75 + offset.y, 75, 75);
  ctx.fillStyle = '#FFF';

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75 + offset.x, 75 + offset.y, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function drawLineWidth(id) {
  var ctx = document.getElementById(id).getContext('2d');
  var i;
  for (i = 1; i < 10; i++) {
    ctx.lineWidth = i;
    ctx.beginPath();
    ctx.moveTo(25 + i * 15, 10);
    ctx.lineTo(25 + i * 15, 190);
    ctx.stroke();
  }
}

drawOverlapRect('canvas-example');
drawPictureFrame('picture-frame');
drawTriangle('triangle-example');
drawSmiley('smiley-face');
drawMultiline('multiline');
drawDiagonalTriangles('triangles');
drawArcs('arcs');
drawOverlappingArcs('overlapping-arcs');
drawQuadraticCurve('quadrati-curve');
drawRedHeart('red-heart');
drawColorSwatch('color-swatch-one', {r: true, g: true, b: false});
drawColorSwatch('color-swatch-two', {r: false, g: true, b: true});
drawCirclesWithStroke('circles-with-stroke-one', {r: true, g: true, b: false});
drawCirclesWithStroke('circles-with-stroke-two', {r: false, g: true, b: true});
drawTransparentCircles('transparent-circles', {x: 75, y: 25});
drawLineWidth('line-width');
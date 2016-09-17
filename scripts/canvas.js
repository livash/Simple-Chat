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

function drawLineCap(id) {
  var ctx = document.getElementById(id).getContext('2d');
  var capStyles = ['butt', 'round', 'square'];
  var colors = ['navy', 'limegreen', 'orangered'];
  var i;
  for (i = 0; i < capStyles.length; i++) {
    ctx.lineWidth = 20;
    ctx.strokeStyle = colors[i];
    ctx.lineCap = capStyles[i];
    ctx.beginPath();
    ctx.moveTo(25, 25 + i * 40);
    ctx.lineTo(275, 25 + i * 40);
    ctx.stroke();
  }
}

function drawZigzag(ctx, joinStyle, color, i) {
  ctx.lineJoin = joinStyle;
  ctx.strokeStyle = color;
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(150,75 + i * 40);
  ctx.lineTo(175, 50 + i * 40);
  ctx.lineTo(200,75 + i * 40);
  ctx.lineTo(225, 50 + i * 40);
  ctx.lineTo(250, 75 + i * 40)
  ctx.stroke();
}

function drawLineJoin(id) {
  var ctx = document.getElementById(id).getContext('2d');
  var joinStyles = ['round', 'bevel', 'miter'];
  var colors = ['blue', 'crimson', 'lime'];
  var i;
  for (i = 0; i < joinStyles.length; i++) {
    drawZigzag(ctx, joinStyles[i], colors[i], i);
  }

  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
 
  ctx.font = "30px Arial";
  ctx.fillStyle = "Blue";
  ctx.fillText("Metro Sign", 10, 40);
}


function drawMarchingPattern(id) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext('2d');
  var offset = 0;

  function drawRect() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.lineWidth = 4;
    ctx.setLineDash([4,2]);
    ctx.strokeStyle = 'blue';
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(50,50,200,100);
  }

  function drawSquigly() {
    ctx.lineJoin = "round ";
    ctx.strokeStyle = "red";
    ctx.lineWidth = 15;
    ctx.beginPath();
    var i = 1;
    ctx.moveTo(50,75 + i * 40);
    ctx.lineTo(75, 50 + i * 40);
    ctx.lineTo(100,75 + i * 40);
    ctx.lineTo(125, 50 + i * 40);
    ctx.lineTo(150, 75 + i * 40)
    ctx.stroke();
  }

  function march() {
    offset += 1;
    if (offset > 24) offset = 0;
    drawRect();
    drawSquigly();
    setTimeout(march, 200);
  }

  march();
}

function drawMoreVerticalLines(id) {
  var ctx = document.getElementById(id).getContext('2d');
  var offset = { x: 225, y:25 };
  var i, spacer = 20;
  for (i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.lineWidth = i * 2 + 1;
    ctx.strokeStyle = 'blue';
    ctx.moveTo(offset.x - i * spacer, offset.y);
    ctx.lineTo(offset.x - i * spacer, offset.y + 150);
    ctx.stroke();
  }

  for (i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.lineWidth = i * 2 + 1;
    ctx.strokeStyle = 'navy';
    ctx.moveTo(25 + i * spacer, offset.y);
    ctx.lineTo(25 + i * spacer, offset.y + 150);
    ctx.stroke();
  }
}

function drawSimpleLinearGradient(id) {
  var ctx = document.getElementById(id).getContext('2d');

  // create fill gradient as a rainbow
  var gradient = ctx.createLinearGradient(0,0,300,300);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(0.15, 'orange');
  gradient.addColorStop(0.3, 'yellow');
  gradient.addColorStop(0.5, 'green');
  gradient.addColorStop(0.7, 'cyan');
  gradient.addColorStop(0.8, 'blue');
  gradient.addColorStop(1, 'purple');

  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,300,200);
}

function drawSimpleRadialGradient(id) {
  var ctx = document.getElementById(id).getContext('2d');

  // create fill gradient
  var gradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
  gradient.addColorStop(0, 'white');
  gradient.addColorStop(1, 'black');

  ctx.fillStyle = gradient;
  ctx.arc(100,100,75,0, Math.PI * 2, true);
  ctx.fill();
}

function drawFunRadialGradient(id) {
  var ctx = document.getElementById(id).getContext('2d');

  // Create gradients
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');

  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, '#FF5F98');
  radgrad2.addColorStop(0.75, '#FF0188');
  radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, '#00C9FF');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');

  var radgrad4 = ctx.createRadialGradient(175, 120, 50, 175, 110, 90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');

  // draw shapes
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 300, 200);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 300, 200);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 300, 200);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 300, 200);
}

function drawRoundPinholeInterferencePattern(id) {
  var ctx = document.getElementById(id).getContext('2d'); 
  ctx.beginPath();
  ctx.fillStyle = 'crimson';
  for (var i = 0; i < 10; i++) {
    ctx.arc(150, 100, 100 - i * 10, 0, Math.PI * 2, true);
  }
  ctx.fill("evenodd");
}

function drawSquarePinholeInterencePattern(id, angle) {
  var ctx = document.getElementById(id).getContext('2d');
  var lineWidth = 15;
  var offsetX = angle ? 10 : 50;
  ctx.beginPath();
  ctx.rotate(angle);
  if (angle) {
    ctx.translate(90, -120);
  }
  ctx.fillStyle = 'navy';
  for (var i = 0; i < 7; i++) {
    if (i%2 === 0) {
      ctx.fillRect(offsetX + lineWidth*i, lineWidth*i, 200 - i*lineWidth*2, 200 - i*lineWidth*2);
    } else {
      ctx.clearRect(offsetX + lineWidth*i, lineWidth*i, 200 - i*lineWidth*2, 200 - i*lineWidth*2);
    }
  }
}

function drawMyName(id) {
  var ctx = document.getElementById(id).getContext('2d');
  ctx.font = '40px Arial';
  ctx.fillStyle = 'lawngreen';
  ctx.strokeStyle = 'darkgreen';
  ctx.rotate((Math.PI) / 10);
  ctx.fillText('ELENA', 75, 15);
  ctx.strokeText('ELENA', 100, 60);
  ctx.fillStyle = 'seagreen';
  ctx.fillText('ELENA', 125, 105);
  ctx.stokeStyle = 'darkgreen';
  ctx.strokeText('ELENA', 150, 150);
}

function drawTextAndScale(id) {
  var ctx = document.getElementById(id).getContext('2d');
  ctx.font = '25px Arial';
  ctx.fillStyle = 'crimson';
  ctx.scale(1, -1); // mirror image along the x-axis
  ctx.fillText('HELLO WORLD', 50, -75);
}

function drawRotatingSquares(id) {
  var ctx = document.getElementById(id).getContext('2d');
  // square one
  ctx.fillStyle = 'cyan';
  ctx.fillRect(75,25,100,100);

  // square two
  ctx.fillStyle = 'grey';
  ctx.rotate(Math.PI/3);
  ctx.translate(10,-150);
  ctx.fillRect(75,25,90,90);

  // square three
  ctx.strokeStyle = 'green';
  ctx.rotate(0.4);
  ctx.translate(120, 10);
  ctx.strokeRect(10,10,50,50);
}

function drawOlympicRings(id) {
  var ctx = document.getElementById(id).getContext('2d');
  ctx.translate(-15,25);
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(75,50,40, 0, Math.PI * 2, true);
  ctx.strokeStyle = 'blue';
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'yellow';
  ctx.arc(120, 100, 40, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.arc(165, 50, 40, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.arc(210, 100, 40, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.arc(255, 50, 40, 0, Math.PI * 2, true);
  ctx.stroke();
}

function drawOlympicSquares(id) {
  var ctx = document.getElementById(id).getContext('2d');
  ctx.translate(-30,10);
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.strokeRect(75,50,40,40);

  ctx.beginPath();
  ctx.strokeStyle = 'yellow';
  ctx.strokeRect(120,100,40,40);

  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.strokeRect(165,50,40,40);

  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.strokeRect(210,100,40,40);

  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.strokeRect(255,50,40,40);
}

function drawBasicShapes(id) {
  var ctx = document.getElementById(id).getContext('2d');
  ctx.lineWidth = 5;
  ctx.scale(1.5, 1.5);

  ctx.strokeStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(50, 25);
  ctx.lineTo(100, 25);
  ctx.lineTo(75, 75);
  ctx.lineTo(50, 25);
  ctx.lineTo(100, 25);
  ctx.stroke();

  ctx.strokeStyle = 'blue';
  ctx.strokeRect(50, 50, 50, 50);

  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.arc(100, 50, 20, 0, Math.PI * 2, true);
  ctx.stroke();
}

function drawArch(id) {
  var ctx = document.getElementById(id).getContext('2d');

  ctx.beginPath();
  ctx.arc(150,125,100, Math.PI, 0, false);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(175,125,50, Math.PI, 0, false);
  ctx.fillStyle = 'white';
  ctx.fill();

}

function drawSnowflake(id) {
  var ctx = document.getElementById(id).getContext('2d');

  var sin = Math.sin(Math.PI/6),
      cos = Math.cos(Math.PI/6),
      c;
  ctx.translate(150, 100);
  for (var i=1; i <= 12; i++) {
    c = Math.floor(255 / 12 * i);
    ctx.fillStyle = "rgb(" + c + "," + (c*2) + "," + c + ")";
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
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
drawLineCap('line-cap');
drawLineJoin('line-join');
drawMarchingPattern('marching-ants');
drawMoreVerticalLines('more-lines');
drawSimpleLinearGradient('simple-linear-gradient');
drawSimpleRadialGradient('simple-radial-gradient');
drawFunRadialGradient('fun-radial-gradient');
drawRoundPinholeInterferencePattern('pinhole-interference');
drawSquarePinholeInterencePattern('square-pinhole-pattern');
drawMyName('my-name');
drawSquarePinholeInterencePattern('rotated-square', Math.PI/4);
drawTextAndScale('upside-down-text');
drawRotatingSquares('rotating-squares');
drawOlympicRings('olympic-rings');
drawOlympicSquares('olympic-squares');
drawBasicShapes('basic-shapes');
drawArch('an-arch');
drawSnowflake('snowflake');
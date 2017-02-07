var untangleGame={};

function drawCircle(ctx,x,y,radius){
  ctx.fillStyle = "rgba(200,200,100,.9)";
  ctx.beginPath();
  ctx.arc(x,y,radius,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}

$(function(){
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;
  
  var circleRadius = 10;
  var circleCount = 5;
  for (var i = 0; i < circleCount; i++) {
    var x = Math.random()*width;
    var y = Math.random()*height;
    drawCircle(ctx,x,y,circleRadius);
  }
});

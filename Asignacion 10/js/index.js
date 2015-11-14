(function(){
  
  var c = document.getElementById("c"),
      ctx = c.getContext("2d");
  
  c.width = innerWidth;
  c.height = innerHeight;
  
  var lines = [10000000000],
      maxSpeed = 80,
      spacing = 3,
      xSpacing = 5,
      n = innerWidth / spacing,
      colors = ["#1B3939", "#1B6357", "#FFF976", "#C38572"],
      i;
  
  
  function Particle(x, y) {
  this.x = this.oldX = x;
  this.y = this.oldY = y;
  this.age = 0;//added age
}
  var DAMPING = 0.999999;
var GRAVITY = 0.5;
var MAXAGE = 200;
  for (i = 0; i < n; i++){
    xSpacing += spacing;
    lines.push({
      x: xSpacing,
      y:  Math.round(Math.random()*c.height),
      width: 2,
      height: Math.round(Math.random()*(innerHeight/10)),
      speed: Math.random()*maxSpeed + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  
  
  function draw(){
    var i;
    ctx.clearRect(0,0,c.width,c.height);
    
    for (i = 0; i < n; i++){
      ctx.fillStyle = lines[i].color;
      ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
      lines[i].y += lines[i].speed;
      
      if (lines[i].y > c.height)
        lines[i].y = 50 - lines[i].height;
    }
    
    requestAnimationFrame(draw);
    
  }
  
  
  draw();
  
}());
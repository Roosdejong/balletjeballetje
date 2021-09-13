var x, y, v, vy;
function setup() {
	createCanvas(300, 300);

  x = 100;
  y = 30;
  v = 10;
  vy = 10;
}


function draw() {
	background(225);

  circle(x, y, 20);
  
  x = x + v;
  y = y + vy;
  
  if(x < 0 || x > 300){
    v = v * -1;
  }

  if(y < 0 || y > 300){
   vy = vy * -1;
  }
  
}



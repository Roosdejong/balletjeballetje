var x, y, v;
function setup() {
	createCanvas(300, 300);

  x = 30;
  y = 30;
  v = 10;
}


function draw() {
	background(225);

  circle(x, y, 20);
  
  x = x + v;
  y = y + v;
  
  if(x < 0 || x > 300)
  if(y < 0 || x > 300){
   v = v * -1;
  }
  
}



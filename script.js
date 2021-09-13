var x, v;
function setup() {
	createCanvas(500, 400);

  x = 30;
  v = 10;
}


function draw() {
	background(225);

  circle(x, 130, 20);
  
  x = x + v;
  
  if(x < 0 || x > 300){
   v = v * -1;
  }

}



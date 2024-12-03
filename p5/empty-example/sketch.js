var ellipseX = 100;
var ellispseY = 200;
let isStopped 

function setup() {
 // put setup code here
  createCanvas(1280, 720);
  background('white');

}

function draw() {
  // put drawing code here
  
  if(mouseIsPressed){
    fill('black')
    stroke('black')
    ellipse(mouseX,mouseY,30,30);

  }
  else {
    text('Draw on me! Reload to clear', 100, 100);
    stroke('black')
     
   }





}

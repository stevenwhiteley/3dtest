var circleX;
var circleY;
var circleZ;
var frames = 100;

function setup() {
  createCanvas(900, 900, WEBGL);
     background(0);

  circleX = width/10;
  circleY = height/10;
  circleZ = width/10;
  
}

function draw(){
    var rotationAmount = radians(frames);
     frames++;
  frames = frames % 360;
 
  push();
//translate(width/2, height/2.3, 0); 
rotateY(rotationAmount*0.5);
rotateX(rotationAmount*0.5);
box(250);
fill(random(55), 55, random(55), 55);
pop();  
    
  
  push();
ellipse(20, 20, circleY*60, circleX*50);
//translate (400, 300); 
pop();  
  
  push();
ellipse(width/2, height/2, circleZ*20, circleX*20);
fill(255, random(255), random(255), 255);
//translate (400, 300); 
pop();
  
push();
//translate (width/2, height/2, width/2);
beginShape();
  rotateX(rotationAmount*2);
  rotateY(rotationAmount*2);
  vertex(0, 0, 50);
  bezierVertex(50, 200, circleZ, circleX, circleY, circleY, circleZ, circleX, circleZ);
lights();
endShape(CLOSE);
pop();

push();
//translate (width/2, height/2, width/2);
beginShape();
  rotateX(rotationAmount*2);
  rotateY(rotationAmount*2);
  vertex(0, 0, 50);
  bezierVertex(200, circleX, 600, circleX, 400, 800, 257, 200, circleZ);
lights();
endShape(CLOSE);
pop();

push();
//translate (width/2, height/2, width/2);
beginShape();
  rotateX(rotationAmount*2);
  rotateY(rotationAmount*2);
  vertex(0, 0, 50);
  bezierVertex(circleY, 500, 300, circleX, 100, 80, 247, 200, circleZ);
lights();
endShape(CLOSE);
pop();

push();
//translate (width/2, height/2, width/2);
beginShape();
  rotateX(rotationAmount*2);
  rotateZ(rotationAmount*2);
  vertex(0, 0, 50);
  bezierVertex(300, circleX, 300, circleX, 100, 80, 247, 200, circleZ);
lights();
endShape(CLOSE);
pop();

   circleX = random(-40,40);
    circleY = random(-20,20);
   circleZ = random(-30,20);

}
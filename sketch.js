let torso;
//let song;

var circleX;
var circleY;
var circleZ;
var frames = 10;

function preload() {
torso = loadModel('assets/venus.obj', true);

// }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //song = loadSound('assets/INTERNATIONALLOVErEMIX.mp3');

  circleX = width/10;
  circleY = height/10;
  circleZ = width/10;
}

// function mousePressed() {
//   if (song.isPlaying()) {
//     // .isPlaying() returns a boolean
//     song.stop();
//   } else {
//     song.play();

//   	}
//   }

function draw() {
  background(0);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  push();
  rectMode(CENTER);
  // rotateZ *3;
  // rotateX * 2; 
  rotateX(frameCount * .01);
  rotateZ(30, 22);
  rotateY(frameCount * .01);
  //scale(circleX);
  normalMaterial(circleX);
  torus(120, 30, 50, 40);
  pop();

  push();
  rectMode(CENTER);
  // rotateZ *3;
  // rotateX * 2; 
  rotateX(frameCount * .1);
  rotateZ(frameCount * .1);
  rotateY(frameCount * .1);
  scale(0.4);
  normalMaterial();
  model(torso);
  pop();


   circleX = circleZ / random(5,10);
   circleY = circleX + random(5,80);
   circleZ = random(5,10);

	}}
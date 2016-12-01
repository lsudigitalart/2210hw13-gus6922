// var a = [];
var img;
var num = 6000;
var range = 18;
var ax = [];
var ay = [];
// var x = 0;
//
function preload(){
  img = loadImage("particle.png");
}

// function setup(){
//   createCanvas(1000,600);
//   // frameRate(100);
// }

// function draw(){
//     image(img,random(-width, width), random(-height, height));
//     background(255,random(255),random(255),10);
//
// }




function setup() {
  createCanvas(1000, 600);
  for ( var i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }
  frameRate(100);
}

function draw() {
  // background(51);

  image(img,random(-width, width), random(-height, height));
  background(255,random(255),random(255),10);

  // Shift all elements 1 place to the left
  for ( var i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);

  // Constrain all points to the screen
  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height);

  // Draw a line connecting the points
  for ( var j = 1; j < num; j++ ) {
    stroke(255,random(255),random(255));
    noFill();
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
}

let mainfont;
let secondryfont;
let title = "Two-Ten";
let message = "Hang tight, we're on the way... :)"

/** This function sets up our sketch. */
function setup() {
  
  createCanvas(windowWidth, windowHeight);

  let midx = windowWidth / 2;
  let midy = windowHeight / 2;

}

 /** This function loads resources that will be used later. */
function preload() {
  mainfont = loadFont("Array.otf");
  secondryfont = loadFont("Tabular.otf");
}

/** This function redraws the sketch multiple times a second. */
function draw() {
  
  background(35);

  let localmidx = windowWidth / 2;
  let localmidy = windowHeight / 2;

  // Title
  fill(225,225);
  textSize(200);
  textFont(mainfont);
  textAlign(CENTER, CENTER);
  text(title, localmidx, localmidy - 100);
  
  // Message
  fill(225);
  textSize(50);
  textFont(secondryfont);
  textAlign(CENTER, CENTER);
  text(message, localmidx + 40, localmidy + 50);
  
}
/** This function is called when the mouse is pressed. */
function mousePressed() {
  // Do something.
}

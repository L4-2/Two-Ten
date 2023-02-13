function setup() {
  createCanvas(windowWidth, windowHeight);
  background(43,42,42);
}

let logofont;
let regfont;
function preload(){
  logofont = loadFont('Array.otf');
  regfont = loadFont('Tabular.otf');
}

  var fade;
  var fadeAmount = 1

function draw() {
/*
let title = {
  text: 'Two-Ten',
  size: 200,
  font: logofont,
  alignment: CENTER,
  locx: windowWidth/2,
  locy: windowHeight/2
};
  
let secondary = {
  text: "Hang tight, we're on the way :D.",
  size: 35,
  font: regfont,
  alignment: CENTER,
  locx: windowWidth/2,
  locy: windowHeight/2
};
*/
 
  // Brand Name Title
  
  let title = 'Two-Ten';
  
  titlelocx = (windowWidth/2) + 0;
  titlelocy = (windowHeight/2) - 40;
  

  fill(225, 225, 225, fade);
  textSize(200);
  textFont(logofont);
  textAlign(CENTER);
  text(title, titlelocx, titlelocy);
  
  if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-10; 
 
  fade += fadeAmount; 
  
  //Subtext
  
  let secondary = "Hang tight, we're on the way :D.";
  
  secondlocx = (windowWidth/2) + 40;
  secondlocy = (windowHeight/2) + 40;
  
  fill(225);
  textSize(35);
  textFont(regfont);
  textAlign(CENTER);
  smooth();
  text(secondary, secondlocx, secondlocy);
  
}
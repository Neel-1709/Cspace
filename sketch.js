var backgroundIMG;
var spaceship;
var spaceShipRight;
var spaceShipLeft;
var spaceshipup;
var spaceshipIMG;
var iss;
var issIMG;



function preload(){
backgroundIMG = loadImage("./docking-undocking/spacebg.jpg");
issIMG = loadImage("./Docking-undocking/iss.png");
spaceShipRight = loadImage("./Docking-undocking/spacecraft3.png");
spaceShipLeft = loadImage("./Docking-undocking/spacecraft4.png");
spaceshipup = loadImage("./Docking-undocking/spacecraft2.png");
spaceshipIMG = loadImage("./Docking-undocking/spacecraft1.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issIMG);

  spaceship = createSprite(400,350,50,50);
  spaceship.addImage(spaceShipRight);
  spaceship.addImage(spaceShipLeft);
  spaceship.addImage(spaceshipup);
  spaceship.addImage(spaceshipIMG);
  spaceship.scale = 0.2;
}

function draw() {
  background(backgroundIMG);  
  
  if(!hasDocked){
    spaceship.x = 
  }

  
  drawSprites();
 
}

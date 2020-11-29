var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
weight = random(400,1500);

zenia = createSprite(50,40,30,20);
zenia.velocityX = 60;

tourus = createSprite(50,150,30,20);
tourus.velocityX = 50;

cyclap = createSprite(50,270,30,20);
cyclap.velocityX = 45;

wall = createSprite(1590,200,70,370);
wall.shapecolor = (80,80,80);

carPoint1 = createSprite(50,40,20,50);

carPoint2 = createSprite(50,150,20,50);

carPoint3 = createSprite(50,270,20,50);

line1 = createSprite(70,95,3100,10);
line1.shapecolor = "white";

line2 = createSprite(70,210,3100,10);
line2.shapecolor = "white";

line3 = createSprite(70,330,3100,10);
line3.shapecolor = "white";

}

function draw() {
  background("black");  
  
  if(wall.x-torus.x <(torus.width+wall.width)/2)
{
  torus.velocityX = 0;
  var deformation = 0.5 * 1522 * 50 * 50/22509;
  if(deformation>100)
  {   
  tourus.shapecolor = green(0,255,0);
  }
if(deformation<180 && deformation>100){
  cyclap.shapecolor = yellow(230,230,0);
}
if (deformation<100){
    zenia.shapecolor = red(255,0,0);
}
}  
   drawSprites();
}
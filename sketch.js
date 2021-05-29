// defining sprites
var bullet, wall, speed, weight, thickness; 

function setup() {

  // creating canavas
  createCanvas(1600, 400);

  // random values
	speed=random(223,321);
	weight=random(30,52);
  thickness=random(22,83);

  // creating bullet
	bullet=createSprite(50, 200,50, 10);   
	bullet.velocityX = speed;
	bullet.shapeColor = color(255);

  // creating wall
  wall=createSprite(1200,200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {

  // giving background color
  background(0);

  // collided action
  if(hasCollided(bullet, wall)){

    bullet.velocityX = 0;

    var damage = 0.5* weight* speed* speed/(thickness* thickness* thickness); 

    if (damage > 10 ){
      wall .shapeColor = color(255,0,0);
    } 
    if (damage < 10 ){
      wall.shapeColor = color(0,255,0);
    }
  }

  // displaying sprites
  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
 return false;
}
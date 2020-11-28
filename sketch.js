var r1
var r2
var r3
var r4

function setup() {
  createCanvas(400,400);
  
 r1 =  createSprite(200, 200, 50,50);
 r2 = createSprite(100,100,20,20);
 r3 = createSprite(100,100,20,20);
 r4 = createSprite(300,100,20,20);
 r3.shapeColor = ("purple");
r4.shapeColor = ("orange");

}


function draw() {
  background("yellow");  
  drawSprites();
r2.x =  World.mouseX;
r2.y = World.mouseY;

r3.velocityX = 2;
r4.velocityX = -2;
/*algorithm 1 : if 2 rectangle they will change colour
to green and red otherwise they will remain at blue*/



Aloukik(r1,r2);
//Aloukik(r3,r4)


hi(r3,r4);

}


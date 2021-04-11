var fixedRect,movingRect,game;
function setup() { 
 createCanvas(800,800);
 fixedRect=createSprite(400, 100, 50, 50);
 fixedRect.shapeColor="green";
fixedRect.debug=true;

  game=createSprite(400,700,50,100);
  game.shapeColor="green";
   game.debug=true; 
   fixedRect.velocityY = 3;
   game.velocityY = -3;
         }
 function draw() {
 background("black");

 
/*if( isTouching(game,movingRect)){
 game.shapeColor="red";
    movingRect.shapeColor="red";
}
else{
    game.shapeColor="green";
      movingRect.shapeColor="green";
}*/
bounceOff(fixedRect,game);
  drawSprites();
 }
 

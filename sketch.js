var tennisCourt, tennisCourtImage;
var ball
var player1, player2;
var mainUmpire;



function preload() {
  tennisCourtImage = loadImage("tennisCourt.png");
  
  
}







function setup() {
  createCanvas(400, 400);
  tennisCourt = createSprite(200,200,150,150)
  tennisCourt.addImage("tennisCourt.png", tennisCourtImage);
  tennisCourt.scale = 0.9;
  
  player1 = createSprite(150,20,15,15)
  player1.shapeColor = "black";
  
  player2 = createSprite(220,365,15,15);
  player2.shapeColor = "black";
  
  mainUmpire = createSprite(320,200,15,15);
  mainUmpire.shapeColor = "white";
  
  ball = createSprite(220,350,10,10);
  ball.shapeColor = "green";

  
  edges = createEdgeSprites(); 
  
}

function draw() {
  background("green");
  
 
  

 
  ball.bounceOff(player1);
  ball.bounceOff(player2);
  ball.bounceOff(edges);
  
  if(keyDown("space")){
    serveball();
  }
  
  player1.x = ball.x;
  player2.x = World.mouseX;
  

drawSprites();
  
  if(ball.x < 109 || ball.x > 293){
   fill("black");
   textSize(15); 
   text("OUT",10,200);
   ball.setVelocity(0,0); 
    
 }
  
}

function serveball(){
   ball.velocityY = -5;
    ball.velocityX = -0.5;

}

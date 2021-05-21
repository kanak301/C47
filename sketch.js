var player;
var opp1,opp2,opp3,opp4,opp5,opp6,opp7,opp8;
var ball;

var gameState = "hold";

var score = 0;

var goal;

var oppGroup;

function preload()
{
	
}

function setup() {
	
createCanvas(1200, 700);

oppGroup = new Group();

player = new Pcclass(600,350);

opp1 = new Npcclass();
opp2 = new Npcclass();
opp3 = new Npcclass();
opp4 = new Npcclass();
opp5 = new Npcclass();
opp6 = new Npcclass();
opp7 = new Npcclass();
opp8 = new Npcclass();

ball = createSprite(player.pc.x,player.pc.y-20,20,20);
ball.shapeColor = "yellow";

goal = createSprite(600,50,200,100);
goal.visibility = false;
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  // designing goalpost
  fill("white");
  strokeWeight(5);
stroke("white");
  line(500,100,700,100);
  line(500,0,500,100);   
  line(700,0,700,100);  

  //score
strokeWeight(1);
  text("score:"+score,50,50);

  // condition to check goal 

  if (ball.isTouching(goal)){
	  score = score + 0.1;
  }

  if ( ball.isTouching(opp1)) {
	  text("game has ended");
  }

  if(gameState=="hold") {
	ball.x = player.pc.x ;
	ball.y = player.pc.y - 20;
  
  }
  
  // to hold and move ball along with player

  if(keyIsDown(UP_ARROW)&&player.pc.y>10){
	player.pc.y = player.pc.y-10;
}

if(keyIsDown(DOWN_ARROW)&&player.pc.y<700){
  player.pc.y = player.pc.y+10;
}

if(keyIsDown(RIGHT_ARROW)&&player.pc.x<1200){
  player.pc.x = player.pc.x+10;
}

if(keyIsDown(LEFT_ARROW)&&player.pc.x>10){
  player.pc.x = player.pc.x-10;
}

// logic to kick the ball when a,w,d keys are pressed along wiht space key

if(keyIsDown(32) && keyIsDown(65)) {
	gameState = "kicked";
ball.velocityX=-5;
ball.velocityY=-5;

}

if(keyIsDown(32) && keyIsDown(68)) {
	gameState = "kicked";
ball.velocityX=5;
ball.velocityY=-5;

}

if(keyIsDown(32) && keyIsDown(87)) {
	gameState = "kicked";
ball.velocityX=0;
ball.velocityY=-5;

}
  drawSprites();

}



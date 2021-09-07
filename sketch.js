 var anabellaImg,playerImg,score,obstaclesImg,backgroundImg 
var tressImg,END,PLAY
var gamestate=Play
    

  
   


function preload(){
  backgroundImg=loadImage("Background.jpg")
  background=loadAnimation("image/Background.jpg","background.jpg")
  
  gameOver=loadImage("Game Over.jpg")
  gameoverImg=loadAnimation("image/Game Over.jpg")
  
  player=loadImage("Running boy.gif")
  playerImg=loadAnimation("image/Running boy.gif")
  
  anabella=loadImage("Horror 2.jpg")
  anabellaImg=loadAnimation("image/Horror 2.jpg")
  
  obstacles=loadImage("Obstacles.jpg")
  obstaclesImg=loadAnimation=("image/Obstacles.jpg","obstacle all.jpg","Obstcale 1.jpg","obstacle 2.jpg","obstacle 2.jpg")
  
  background2=loadImage("Background2.gif")
  background2Img=loadAnimation(" image/Background2.jpg")
}


tress=loadImage=("Tress.jpg")
tress=loadAnimation("image/Tress.jpg")




function setup(){
createCanvas(windowWidth,windowHeight);
  //Moving backgroung
  background=createSprite(width-500,height/2)
  background.addImage(backgroundImg)
  background.velocityX = -6
  
  
  anabella=createSprite(50,height/2)
  anabella=addImage(anabellaImg)
  anabella.velocityX= -3
  anabella.velocityY= -5
  
  
  player=createSprite(50,height/2);
  player=addImage(playerImg)
  player.velocityX= -6
  player.velocityY= -3
  
  
  gameOver = createSprite(width/2,height/2);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.8;
  gameOver.visible = false;  
  
  
  obstacle=createSprite(50,height/2)
  obstacle.addImange(obstacleImg)
  obstacle.velocityX= -5
  
  
  tress=createSprite(30,height/2)
  tress.addImage(tressImg)
  
  
  obstacle.newGroup()
  tress.newGroup()
}
  
  
  function draw(){
  background(0)
    
    drawSprites();
  textSize(20);
  fill(255);
    
    text("score: "+ score,width/2,20)
    
  if(gameState===PLAY){
  
  score = score + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*score/150);
    
    player.y= World.mouse.y
  
  edges= createEdgeSprites();
    player.collide(edges);
  
  
  //code to reset the background
  if(background.x < 0 ){
    background.x = width/2;
  }
    //code to play cycle bell sound
  if(keyDown("space")) {
    cycleBell.play();
  }
  } 
  
  
  //creating continous opponent players
  var select_anabella = Math.round(random(1,3));
    
    
    if (World.frameCount % 150 == 0) {
    if (select_anabella == 1) {
      tress();
    } else if (select_anabella == 2) {
      obstacle();
    }
      
      
    if(anabella.isTouching(player)){
     gameState = END;
     player.velocityY = 0;
     player.addAnimation("anabella1",anabellaImg)
    }
      
      if(player.isTouching(tress)){
        gamestate=END
        tress.velocity=0
        trrss.addanimation("player",playerImg)
      
      }
  
  
  
  
  
  
  
}
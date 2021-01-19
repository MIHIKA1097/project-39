var sword,swordImage;
var PLAY=2;
var END=0;
var gameState=2;
var gameOverImage;
var fruit,fruit1,fruit2,fruit3,fruit4,fruitsGroup,monster,monsterGroup;
var monsterImage;
var score=0; 
var gameOverSound;
function preload(){
swordImage=loadImage("sword.png")
 gameOverImage=loadImage("gameover.png")
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  monsterImage=loadAnimation("alien1.png","alien2.png")
  gameOverSound=loadSound("gameover.mp3")
}
function setup(){
  createCanvas(600,600);
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  
  gameOver=createSprite(300,100,1,1);
  gameOver.addImage(gameOverImage);
  gameOver.visible=false;
  gameOver.scale=0.5;
  sword.x=200;
  sword.y=200;
  
  fruitsGroup=new Group();
  monsterGroup=new Group();
}
function draw(){
background("lightblue");
  
  if(gameState===PLAY){
     sword.y=mouseY;
    sword.x=mouseX;
     fruits();
enemy();
     if(fruitsGroup.isTouching(sword)){
  fruitsGroup.destroyEach();     
     score=score+2  
     }
     else if(monsterGroup.isTouching(sword)){
        fruitsGroup.destroyEach();
       monsterGroup.destroyEach();
        fruitsGroup.setVelocityXEach(0);
       monsterGroup.setVelocityXEach(0);
        gameState=END;
        gameOver.visible=true;
       gameOverSound.play();
      
        }
     
     }else if(gameState===END){
    swordImage=gameOverImage;   
    gameOver.visible=true;
              
              
              }
  
  drawSprites();
  text("score "+score,500,30);
}
function fruits(){
if(frameCount%80===0){
   fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
   position=Math.round(random(1,2));
  if(position===1){
    fruit.x=400;
     fruits.velocityX=-(7+(score/4));
     }
  else if(position===2){
      fruit.x=0;   
     fruits.velocityX=(7+(score/4));
          
          }
   r=Math.round(random(1,4));
  if(r===1){
    fruit.addImage(fruit1)
  fruit1.scale=0.1}
   else if(r===2){
     fruit.addImage(fruit2)
       fruit1.scale=0.1
   }else if(r===3){
     fruit.addImage(fruit3)
            fruit1.scale=0.1
   }else if(r===4){
     fruit.addImage(fruit4)
     fruit1.scale=0.1
   }
  fruit.y=Math.round(random(50,340));
  fruit.velocityX=-7;
  fruit.setLifeTime=100;
  fruitsGroup.add(fruit);
 
   }
}
function enemy(){
  if (frameCount%200===0){
      monster=createSprite(400,200,20,20);
     monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monsterGroup.add(monster);
    monster.velocityX=-(8+(score/10));
    monster.setLifetime=50;
      }
  
  
  
  
  
}

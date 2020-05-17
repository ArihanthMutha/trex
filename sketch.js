var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloudsAnimation,ob1,ob2,ob3,ob4,ob5,ob6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudsAnimation=loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  ob1=loadImage("obstacle1.png");
   ob2=loadImage("obstacle2.png");
   ob3=loadImage("obstacle3.png");
   ob4=loadImage("obstacle4.png");
   ob5=loadImage("obstacle5.png");
   ob6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  drawSprites();
  spawnClouds();
  spawnObstacles();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,160,40,10);
    cloud.y = random(50,120);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.addImage("cloud",cloudsAnimation);
     //assign lifetime to the variable
    cloud.lifetime = 600/3;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
        case 1:obstacle.addImage(ob1);
        break;
        case 2:obstacle.addImage(ob2);
        break;
        case 3:obstacle.addImage(ob3);
        break;
        case 4:obstacle.addImage(ob4);
        break;
        case 5:obstacle.addImage(ob5);
        break;
        case 6:obstacle.addImage(ob6);
        break;
        default:
        break;
    }
    console.log(rand)
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 600/6;
  }
}
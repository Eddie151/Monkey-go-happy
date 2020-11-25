
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground
var score;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);
bananaGroup = new Group();
obstacleGroup = new Group();
score = 0;
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x);
}


function draw() {
background("white");
text("score"+score,100,100);
if (keyDown("space")){
  monkey.y = monkey.y - 10; 
}
monkey.y = monkey.y + 6;
drawSprites();
monkey.collide(ground);
if (monkey.y<50){
  monkey.y = monkey.y+600;
}
if (ground.x<0){
  ground.x = ground.width/2
}
spawnObstacles();
spawnBananas();
if (bananaGroup.isTouching(monkey)){
  score = score + 1
}
}
function spawnObstacles() {
  if(frameCount % 120 === 0) {
    var obstacle = createSprite(600,305,10,40);
    obstacle.velocityX = -4
    obstacle.addImage(obstacleImage);
    obstacle.scale = random(0.2,0.3)
    obstacle.X = random(150,200);
    obstacleGroup.add(obstacle);
  }
}
function spawnBananas() {
  if(frameCount % 120 === 0) {
    var banana = createSprite(600,200,10,40);
    banana.velocityX = -4
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    bananaGroup.add(banana);
    banana.y = random(220,230);
  }
}
//function gameOver() {
 // if (obstacleGroup.isTouching(monkey)){
  //obstaclesGroup = destroy
 // bananaGroup = destroy
 // text("GAME OVER",200,200);
//}
//}




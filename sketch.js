
var boy , boy_running;
function preload(){
  boy_running = loadAnimation("boy1.png", "boy2.png", "boy4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  boy = createSprite(50,160,20,50);
  boy.addAnimation("running", boy_running);
}

function draw(){
  background("white")
  drawSprites();

}
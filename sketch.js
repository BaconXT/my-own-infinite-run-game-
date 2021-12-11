//historia:
//Alex foi caminhar e sentiu que ainda tinha energia para correr e fazer exercicios mais nao se lembra como fazer
//voce pode ajudar Alex?

var path, pathImg;
var runner,runnerImg;
var swordImg;
var frameCount;
//Estados do Jogo
var PLAY=1;
var END=0;
var gameState=1;


function preload(){
    pathImg = loadImage("Road.png");
    runnerImg = loadImage("runner.png");
    swordImg = loadImage("sword.png");
}


function setup(){
  

    createCanvas(1200,400);
  // Movendo fundo
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityX = -4;
  runner = createSprite(200,495,20,20);
  runner.scale=0.25;
  runner.addImage(runnerImg);

  swordG=new Group();
}

function draw() {
    if(gameState===PLAY){
        background(0);
        runner.y = World.mouseY;

        if(path.x < 0 ){
            path.x = height/2;
        }
        createSword();   
        runner.display();
        drawSprites();
        if (swordG.isTouching(runner)) {
            gameState=END;
            swordG.destroyEach();
            swordG.setVelocityX = 0;
            swordG.setVelocityXEach(0);
            path.velocityX = 0;
            runner.destroy();
            
            textSize(50);
            fill(255, 0, 0);
            text("Voce perdeu!, Aperte F5 para recomeçar o jogo", 112.5,300);          
            
        }
        
             
         
        }

}


function createSword() {
    if (World.frameCount % 100 == 0) {
    var sword = createSprite(1140,Math.round(random(50, 350), 10, 10));
    sword.addImage(swordImg);
    sword.scale=0.12;
    sword.velocityX = -3;
    sword.lifetime = 350;
    swordG.add(sword);
    }
  }
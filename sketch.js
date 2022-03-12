//var PLAY = 1;
/*var END = 0;
var gameState = PLAY;



var score=0;
*/var humano1,humanoimg;
var gameOver, restart;
var fondo1, fondo1img;
var virusimg;
var virus1img;
var virus2img;
var virus3img;
var edges;
var ataqueimg;
var bala,balaimg;
var virusg;
function preload(){
 fondo1img=loadImage("fondo.png");
 humanoimg=loadAnimation("humano.gif");
 virusimg=loadImage("virus.gif");
 virus1img=loadImage("virus1.gif");
 virus2img=loadImage("virus2.gif");
 virus3img=loadImage("virus3.gif");
 ataqueimg=loadAnimation("ataque.gif");
 balaimg=loadImage("bala.gif");
}

function setup() {
  createCanvas(2000, 2000);
  
  humano1=createSprite(100,1500,100,300);
 humano1.addAnimation("humanoimgg",humanoimg);
 humano1.addAnimation("ataque",ataqueimg);
 humano1.scale=3;
 virusg=new Group();
}
function draw(){
background(fondo1img);
bala();
console.log(frameCount);
   if(keyDown("q")){
  humano1.changeAnimation("ataque",ataqueimg);
  bala=createSprite(10,20);
  bala.addImage(balaimg);
  bala.x=humano1.x;
  bala.y=humano1.y;
  bala.velocityX=10;
  }
  else{
    humano1.changeAnimation("humanoimgg",humanoimg);
  }
  
    movimientos();
    edges=createEdgeSprites();
     bolitas();
     if(bala.isTouching(virusg)){
      virusg.destroyEach();
    }
drawSprites();
}
function bolitas(){
if(frameCount%10 === 0){
  var virus;

  virus=createSprite(1800,Math.round(random(500,1500)),100,300);
  virus.velocityX=Math.round(random(-2,-3));
  virus.velocityY=Math.round(random(-2,4)); 
 

var rand=Math.round(random(1,3))
switch(rand){
  case 1:virus.addImage(virus1img);
  break;
  case 2:virus.addImage(virus2img);
  break;
  case 3:virus.addImage(virus3img);
  break;
  default: break;

}
virusg.add(virus);
bounceOff(edges,virusg);

}}
function movimientos(){  
  if(keyWentDown("d" )){
  humano1.velocityX=4;
      humano1.velocityY=0;
  }
    if(keyWentDown("a" )){
    humano1.velocityX = -4;
      humano1.velocityY = 0;}
     if(keyWentDown("w")) {
      humano1.velocityX = 0;
      humano1.velocityY = -4;
    }
    if(keyWentDown("s")){
      humano1.velocityX=0;
      humano1.velocityY=4;
    }
    if(keyWentUp("d")){
    humano1.velocityX=0;
    humano1.velocityY=0;
    }
     if(keyWentUp("a")){
        humano1.velocityX=0;
    humano1.velocityY=0;
     }
     if(keyWentUp("w")){
        humano1.velocityX=0;
    humano1.velocityY=0;
     }
     if(keyWentUp("s")){
        humano1.velocityX=0;
    humano1.velocityY=0;
     }
    }
    function bounceOff(object1,object2)
    { 
      if (object1.x - object2.x < object2.width/2 + object1.width/2
       && object2.x - object1.x < object2.width/2 + object1.width/2)
        { object1.velocityX = object1.velocityX * (-1);
           object2.velocityX = object2.velocityX * (-1); } 
           if (object1.y - object2.y < object2.height/2 + object1.height/2 
           && object2.y - object2.y < object2.height/2 + object1.height/2)
            { object1.velocityY = object1.velocityY * (-1); 
              object2.velocityY = object2.velocityY * (-1); } 
            }
  function bala(){
  
 
            }
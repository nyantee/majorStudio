var cam;
var print2;


//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
//var sheasp;
//var shea;

function preload() {

mySound = loadSound('assets/best.mp3');

  print2 = loadImage("assets/print2.png");
//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
//"assets/ghost_standing0001.png", "assets/ghost_standing0007.png"
//bob = loadAnimation("assets/bob1.png", "assets/bob1.png","assets/bob1.png", "assets/bob2.png", "assets/bob2.png","assets/bob2.png","assets/bob3.png", "assets/bob3.png","assets/bob3.png", "assets/bob2.png","assets/bob2.png","assets/bob2.png");
  
 //shea = loadImage('assets/r.png');

// cam= loadAnimation("assets/cam6.png, assets/cam11.png");
  
}


function setup() {
  
    
   mySound.setVolume(0.1);
  mySound.play();
    createCanvas(850,600);
    

   
   //sheasp = createSprite(500,200);
  //sheasp.addImage(shea);
  
  cam = createSprite(600, 300);
  
   cam.addAnimation("normal", "assets/cam6.png",  "assets/cam6.png",  "assets/cam6.png", "assets/cam6.png", "assets/cam6.png", "assets/cam6.png","assets/cam6.png", "assets/cam6.png", "assets/cam6.png","assets/cam6.png","assets/cam6.png","assets/cam6.png","assets/cam6.png", "assets/cam6.png", "assets/cam6.png", "assets/cam11.png");
   
   cam.addAnimation("chosen", "assets/camWH1.png", "assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH2.png");
   
   
   
   cam.velocity.y = 1;
    
    
    
    shea = createSprite(250, 300);
  
   shea.addAnimation("normal", "assets2/shea1.png",  "assets2/shea1.png",  "assets2/shea1.png", "assets2/shea1.png", "assets2/shea1.png", "assets2/shea1.png","assets2/shea1.png", "assets2/shea1.png", "assets2/shea1.png","assets2/shea1.png","assets2/shea1.png","assets2/shea1.png","assets2/shea1.png", "assets2/shea1.png", "assets2/shea1.png", "assets2/shea2.png");
   
   shea.addAnimation("chosen", "assets2/sheaWH1.png", "assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH1.png","assets2/sheaWH2.png");
   
     shea.velocity.y = -1;
    
    
}

function draw() {
  
   // background(255,255,255);  
       background(print2);
  

  if(cam.position.y == 320) {
    
       cam.velocity.y *= -1
  }
  

  
  else if(cam.position.y == 280){
    
  cam.velocity.y *= -1
    
  }
  
  
  cam.onMouseOver = function(){
    
    this.changeAnimation("chosen");
    
  }
  
  cam.onMouseOut = function(){
    
    this.changeAnimation("normal");
    
  }
  
  //--------------SHEA------------------------------------
  
    if(shea.position.y == 320) {
    
       shea.velocity.y *= -1
  }
  

  
  else if(shea.position.y == 280){
    
  shea.velocity.y *= -1
    
  }
  
  
  shea.onMouseOver = function(){
    
    this.changeAnimation("chosen");
    
  }
  
  shea.onMouseOut = function(){
    
    this.changeAnimation("normal");
    
  }
  
 drawSprites(); 



  // animation(bob, 415, 289);
}








var print2;
  cy = 130;
    ca = .5;
    
     sy = -30;
    sa = -.5;
    
    iy = 400;
    ia = -.5;
    
    e = 250;
    
function preload(){
  

  mySound = loadSound('assets/best.mp3');
  
  
   print2 = loadImage("assets/salonwall.png"); 
  combStat = loadImage("assets/comb2.png"); 
  showerStat = loadImage("assets/shower1.png"); 
  ironStat = loadImage("assets/iron1.png"); 
  
}




function setup() {
  
   mySound.setVolume(0.1);
  mySound.play();
  
  c = color(255,50);
  
     createCanvas(850,600);
     
     cam = createSprite(400, 320);
     
     shower = createSprite(500, 280);
     iron = createSprite(350, 400);
     comb = createSprite(570, e);
  
   cam.addAnimation("sitting", "assets/cam1.png",  "assets/cam1.png",  "assets/cam1.png", "assets/cam1.png", "assets/cam1.png", "assets/cam1.png",  "assets/cam1.png",  "assets/cam1.png", "assets/cam1.png",  "assets/cam1.png", "assets/cam1.png","assets/cam1.png","assets/cam1.png","assets/cam1.png","assets/cam1.png","assets/cam1.png","assets/cam1.png","assets/cam1.png","assets/cam1.png","assets/cam1.png","assets/cam1.png", "assets/cam1.png", "assets/cam1.png", "assets/cam1.png","assets/cam1.png", "assets/cam1.png", "assets/cam3.png");
   cam.addAnimation("smiling", "assets/cam2.png")
   
   shower.addAnimation("shaking", "assets/shower1.png",  "assets/shower2.png",  "assets/shower3.png", "assets/shower4.png")
  iron.addAnimation("closing", "assets/iron1.png",  "assets/iron2.png");
  comb.addAnimation("brush", "assets/comb2.png",  "assets/comb1.png");
   
   //cam.addAnimation("chosen", "assets/camWH1.png", "assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH1.png","assets/camWH2.png");
  
  
  
  
}

function draw() {
  

    background(print2);
    
 
    
    
   //----------------comb-floating--------------------------- 
   
   noStroke();
  fill(255,130);
   ellipse(700,250,200,200);
   
     image(combStat, 570, (cy+=ca), 250, 250) 
     
  
    
    if(cy == 130) {
    
      ca *= -1
    }
    
    else if(cy == 150){
      ca *= -1
    }
   
    //-------------------shower------------------------- 
    
     noStroke();
  fill(255,130);
   ellipse(350,50,200,200);
   
     image(showerStat, 200, (sy+=sa), 250, 250) 
     
  
    
    if(sy == -50) {
    
      sa *= -1
    }
    
    else if(sy == -20){
      sa *= -1
    }
   
      //-----------------------iron--------------------- 
     
     
     
      noStroke();
  fill(255,130);
   ellipse(470,490,200,200);
   
    
   
     image(ironStat, 350, (iy+=ia), 250, 250) 
     
     
  
    
    if(iy == 390) {
    
      ia *= -1
    }
    
    else if(iy == 410){
     ia *= -1
    }
    
    //--------------------makeCAMSMILE----------
     
    if ((mouseX<800 & mouseX > 600) & (mouseY<350 & mouseY>100)){
    
    cam.changeAnimation("smiling");
   }
   
   
    else if ((mouseX > 250 & mouseX<450) & (mouseY<200 & mouseY>0)){
    
    cam.changeAnimation("smiling");
   }
   
     else if ((mouseX<575 & mouseX > 375) & (mouseY<600 & mouseY>400)){
    
    cam.changeAnimation("smiling");
   }
   
   
   else {
      cam.changeAnimation("sitting");
    }
    
    //--------------------------------------
    
   
  
    
     drawSprite(cam);
     
     
     
}
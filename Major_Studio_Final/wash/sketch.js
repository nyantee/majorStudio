

var move;
var shower;
var shamp;


 var posy;
  var score = 0;
  var strand;
  var directionc = 200;
    var directionb = 200;
  
  



function preload(){
  
    mySound = loadSound('assets/best.mp3');
  
  
   print2 = loadImage("assets/salonwall.png"); 
  //combStat = loadImage("assets/comb2.png"); 
 // showerStat = loadImage("assets/shower1.png"); 
 // ironStat = loadImage("assets/iron1.png"); 
  
}


function setup() {
  
 mySound.setVolume(0.1);
  mySound.play();
 
 
  var print2;
  
  
  
       createCanvas(850,600);
       
       cam = createSprite(500, 320);
       cam.addAnimation("normal", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png","assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png",  "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png",   "assets/bighead2.png");
       cam.addAnimation("happyup", "assets/tears1.png", "assets/tears2.png");
       cam.addAnimation("happyout", "assets/camhapout.png");
       cam.addAnimation("scrunch", "assets/camwet1.png", "assets/camwet2.png");
       cam.addAnimation("done", "assets/wetcam1.png", "assets/wetcam2.png");
       cam.addAnimation("nice", "assets/sonice.png");
       
       
       //--------arrow-------
       
       
        arrow = createSprite(140, 320);
       arrow.addAnimation("point", "assets/point1.png");

 
      
       
       //-------------------
       
       
        shower = createSprite(600, 10);
       shower.addAnimation("first", "assets/showerhead.png");
       
       
       shamp = createSprite(650, 300);
       shamp.addAnimation("normal", "assets/shamp1.png");
      shamp.addAnimation("shake", "assets/shamp1.png", "assets/shamp2.png", "assets/shamp3.png","assets/shamp2.png")
       
       
       
       //-----------waterInEyes-------
       
      
       if(shower.position.x>200 & shower.position.x<600){
         
          cam.changeAnimation("scrunch");

       }
       
     
       
       else{
         
          cam.changeAnimation("normal");
         
       }
   
   
   
   
   
   
       
       
      //----------------hairStrand-----------------
       
       
      for (var i = 0; i < 71; i++) {
    var strand = createSprite(
      random(365,460), random(225,270));
      
      strand.mirrorX(-1);
      
    strand.addAnimation("dry", "assets/dry.png");
    strand.addAnimation("wet", "assets/wet.png");
    
     strand.onMouseOver = removeAndScore;
    
    //.onMouseOver = removeAndScore;
  }
  
  for (var c = 0; c < 71; c++) {
    strand = createSprite(
      random(225,360), random(225,270));
      
    //strand.shapeColor = random(255);
     
       strand.addAnimation("dry", "assets/dry.png");
    strand.addAnimation("wet", "assets/wet.png");
    
    
    strand.onMouseOver = removeAndScore;
    
  
  }
  
   
}




//------------DRAW-------------------------------------------





function draw() {
  
  
   background(print2);
    drawSprites(strand);
   
  
      if(mouseIsPressed){
    arrow.visible = false;}
  else{
    arrow.visible = true;}
  

     arrow.changeAnimation("point");
     arrow.mirrorX(-1);
     
     arrow.setSpeed(-1.5,directionb);
     
    
     
  
   
  //-------------BUBBLES------------
  
  
  drawSprite(shamp);
  
    shamp.setSpeed(1, directionb);
         directionb += 5;
         
         
         
         
         
  
 if ((mouseX>600 & mouseX<700) & (mouseY>200 & mouseY<400)){
  
 
   frameRate(10);
   
 
   var here = 180;
  
   for(var i=0; i<100; i++)
    {
    noStroke();
     fill(255,here);
   ellipse(random(200,500),random(200,300),random(20,50),random(20,50));
   
   // box.addAnimation("normal", "assets/box0001.png", "assets/box0003.png");
    
    }
 }

    
    else{ 
      
       frameRate(30);
      here = 0;
        
      
    }
    

 
 


//-----------------------water--------------------



 for (var i = 0; i < 6; i++) {

noStroke();
fill(255,120);


// ellipse((mouseX+i*50),(50+move),10, random(20,50));

ellipse((mouseX+i*40),(-10+i*(random(3,10))),50, 50*move);

}





//----------------TURNON---------------


if (mouseIsPressed & mouseX<500){

move = random(20,30)


}

else{
  
move = 0;
}


 
//------------------SHOWER/SCRUNCH----------------


   drawSprite(shower);

  shower.position.y = -10;
  shower.position.x = mouseX+100;
  
  

   directionc -= 5;
   cam.setSpeed(.05, directionc);
   
   
   if(shower.position.x>200 & shower.position.x<600 & score<800 & move>0){
  
  cam.changeAnimation("scrunch");
}

else{

  cam.changeAnimation("normal");
  
}

  
    
  

  //--------------------------SCORE---------------------
      
      noStroke();
  fill(255,220);
   ellipse(650,500,300,120);
     
      
      textSize(50);
       fill(100,200,200);
       
  textAlign(CENTER, CENTER);
  
  if (score>-1 & score<500) {
     text("Wash Time", 650, 500);
    
    }
    
  else {
    
    text("you did it!", 650, 500);
    
    arrow.visible = false;
  
    cam.changeAnimation("done");
   
  }
     
}

  //--------------------------SCORE---------------------

function removeAndScore() {
  score += 1;
      this.changeAnimation("wet");
      
}







//removeANDscore code borrowed from http://creative-coding.decontextualize.com/making-games-with-p5-play/

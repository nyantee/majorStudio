

  var bubble;
  
  var score = 0;
  var brush;
 var directionc = 200;
  var directionb = 200;
  
  var xpos;
  var ypos;
 var strandA;
 var strandB;

function preload(){
  
   mySound = loadSound('assets2/best.mp3');
  
  //bubble = loadImage("assets/speechlight.png");
   print2 = loadImage("assets/salonwall.png"); 
    
  //combStat = loadImage("assets/comb2.png"); 
 // showerStat = loadImage("assets/shower1.png"); 
 // ironStat = loadImage("assets/iron1.png"); 
  
}


function setup() {
  
   mySound.setVolume(0.1);
  mySound.play();
  
 strands = new Group();
//var bubble;
  var print2;
  var x;
  
       createCanvas(850,600);
       
       shea = createSprite(550, 320);
       shea.addAnimation("normal", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png","assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png","assets2/sheao.png",  "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png", "assets2/sheao.png",   "assets2/sheac.png");
       shea.addAnimation("happyup", "assets2/sheaglad1.png");
       shea.addAnimation("notthat","assets2/sheamad.png");
     
      bubble = createSprite(700, 200);
      bubble.addAnimation("normal", "assets/speechlight.png");
       
      
   

  

  
       
      //----------------knots2uknot-----------------
       
       
      for (var i = 0; i < 50; i++) {
  var strandA = createSprite(
      random(350,500), random(250,260));
      
    //strand.shapeColor = random(255);
    
    strandA.addAnimation("knot", "assets2/knot.png");
    strandA.addAnimation("unknot", "assets2/gone.png");
 
    
    strandA.onMousePressed = straightA;
    
    strands.add(strandA);
  }
  
  
    
  
  for (var i = 0; i < 50; i++) {
  var strandB = createSprite(
      random(250,340), random(260,270));
      
    //strand.shapeColor = random(255);
    strandB.mirrorX(-1);
    strandB.addAnimation("knot", "assets2/knot.png");
    strandB.addAnimation("unknot", "gone.png");
    
  strandB.onMousePressed = straightB;
  
  strands.add(strandB);
  }
  
  
      //--------------------brush---------------
       
      brush = createSprite(700, 280);
      
       brush.addAnimation("front", "assets/widecomb.png");
      //brush.addAnimation("back", "assets/backbrush.png");
      
      
       
  
  //------------------brushMove--------
  
  

  // brush.onMouseOver = function() {
    
    
  // brush.changeAnimation("back");
  
  // // brush.position.y= mouseY;
  // // brush.position.x = mouseX;

  // }
  
 
  
  
    //--------------------COMB---------------
       
      comb = createSprite(100, 450);
      
       comb.addAnimation("comb", "assets/frontbrush.png");
       
     //
   
     
  


}

//------------DRAW---------//------------DRAW---------//------------DRAW---------//------------DRAW---------
//------------DRAW---------//------------DRAW---------//------------DRAW---------//------------DRAW---------
//------------DRAW---------//------------DRAW---------//------------DRAW---------//------------DRAW---------
//------------DRAW---------//------------DRAW---------//------------DRAW---------//------------DRAW---------


function draw() {
  
   background(print2);
   
        
      
      drawSprite(shea);
      
       drawSprites(strands);
       drawSprite(brush);
       
      drawSprite(comb);
      
     
  
  directionc -= 5;
  directionb += 5;
  
   shea.setSpeed(.05, directionc);
   
  
  brush.setSpeed(1.5, directionb);
  
      comb.setSpeed(-1, directionb);
    comb.mirrorX(-1);
    
    
    //----------------FINALLYSPEECHBUBBLE-------
    
     textSize(50);
       fill(100,200,200);
  textAlign(CENTER, CENTER);
    

   if(mouseIsPressed & (mouseX>0 & mouseX<150) & (mouseY>350 & mouseY<500)){
     
     
     
     
    bubble.visible = true;
    brush.visible = false;
    
   
   
      
    
   }
   
  else{
    bubble.visible = false;
    
    brush.visible = true;
  }
  

    
     
   
  
  //--------------------------SPEECHBUBBLEFINALLY---------------------
  
  
      comb.onMousePressed = function() {
    
            
              shea.changeAnimation("notthat");
              
        
          }
          
           comb.onMouseReleased = function() {
    
           
              shea.changeAnimation("normal");
              

          }
    //--------------BRUSHTHEKNOTSOUT--------------------------- 
     
      noStroke();
  fill(255,220);
   ellipse(345,90,650,120);
     
      
      textSize(50);
       fill(100,200,200);
  textAlign(CENTER, CENTER);
  if (score < 100) {
    
    
    text("Brush The Knots Out!", 350, 100);
    
    }
    
    else if(score>100 & score<1000){
    
     text("keep going!", 350, 100);
    
    }
    
  else {
    
    
    text("you did it!", 350, 100);
  
     shea.changeAnimation("happyup");
   
  }
  
        
       drawSprite(bubble);
       
        if(mouseIsPressed & (mouseX>0 & mouseX<150) & (mouseY>350 & mouseY<500)){
     
     
       background(print2);
        drawSprite(bubble);
     drawSprite(shea);
       drawSprites(strands);
     drawSprite(comb);
     
     
     
     
     
     textSize(25);
       fill(0);
  textAlign(CENTER, CENTER);
     
      text("Ow!", 700, 200);
        
          
        }
}






  //--------------------------SCORE---------------------

function straightA() {
  score += 1;
  
   this.mirrorX(1);
  this.changeAnimation("unknot");
}


function straightB() {
  score += 1;
  
  this.mirrorX(-1);
  this.changeAnimation("unknot");
}


//---------------------brushFOLLOW----------------------



function mousePressed() {
  
  if(mouseX>200){
  
  brush.position.x = mouseX;
  
  
  brush.position.y = mouseY;
  }
}

  
  

     
  






//removeANDscore code borrowed from http://creative-coding.decontextualize.com/making-games-with-p5-play/

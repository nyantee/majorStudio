
 var size;
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
  
   mySound = loadSound('assets/best.mp3');
  
  
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
       
       cam = createSprite(500, 320);
       cam.addAnimation("normal", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png","assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png",  "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png", "assets/bighead1.png",   "assets/bighead2.png");
       cam.addAnimation("happyup", "assets/camhappybrow.png");
       cam.addAnimation("notthat","assets/notthat.png");
     
      bubble = createSprite(700, 200);
      bubble.addAnimation("normal", "assets/speechlight.png");
       
      
   

  

  
       
      //----------------knots2uknot-----------------
       
       
      for (var i = 0; i < 50; i++) {
  var strandA = createSprite(
      random(350,465), random(230,260));
      
    //strand.shapeColor = random(255);
    
    strandA.addAnimation("knot", "assets/knot.png");
    strandA.addAnimation("unknot", "assets/unknot.png");
 
    
    strandA.onMousePressed = straightA;
    
    strands.add(strandA);
  }
  
  
    
  
  for (var i = 0; i < 50; i++) {
  var strandB = createSprite(
      random(220,340), random(230,260));
      
    //strand.shapeColor = random(255);
    strandB.mirrorX(-1);
    strandB.addAnimation("knot", "assets/knot.png");
    strandB.addAnimation("unknot", "assets/unknot.png");
    
  strandB.onMousePressed = straightB;
  
  strands.add(strandB);
  }
  
  
      //--------------------brush---------------
       
      brush = createSprite(650, 300);
      
       brush.addAnimation("front", "assets/frontbrush.png");
      brush.addAnimation("back", "assets/backbrush.png");
      
      
       
  
  //------------------brushMove--------
  
  

  brush.onMouseOver = function() {
    
    
  brush.changeAnimation("back");
  
  // brush.position.y= mouseY;
  // brush.position.x = mouseX;

  }
  
 
  
  
    //--------------------COMB---------------
       
      comb = createSprite(100, 400);
      
       comb.addAnimation("comb", "assets/widecomb.png");
       
     //
   
     
  


}

//------------DRAW---------//------------DRAW---------//------------DRAW---------//------------DRAW---------
//------------DRAW---------//------------DRAW---------//------------DRAW---------//------------DRAW---------
//------------DRAW---------//------------DRAW---------//------------DRAW---------//------------DRAW---------
//------------DRAW---------//------------DRAW---------//------------DRAW---------//------------DRAW---------


function draw() {
  
   background(print2);
   
        
      
      drawSprite(cam);
      
       drawSprites(strands);
       drawSprite(brush);
       
      drawSprite(comb);
      
     
  
  directionc -= 5;
  directionb += 5;
  
   cam.setSpeed(.05, directionc);
   
  
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
    
            
              cam.changeAnimation("notthat");
              
        
          }
          
           comb.onMouseReleased = function() {
    
           
              cam.changeAnimation("normal");
              

          }
    //--------------BRUSHTHEKNOTSOUT--------------------------- 
     size = 50;
      noStroke();
  fill(255,220);
   ellipse(345,90,650,120);
     
      
      textSize(size);
       fill(100,200,200);
  textAlign(CENTER, CENTER);
  if (score < 100) {
    
    
    text("Brush The Knots Out!", 350, 100);
    
    }
    
    else if(score>100 & score<500){
    
     text("keep Going!", 350, 100);
    
    }
    
  else {
    
    
    text("you did it!", 350, 100);
  
     cam.changeAnimation("happyup");
   
  }
  
        
       drawSprite(bubble);
       
        if(mouseIsPressed & (mouseX>0 & mouseX<150) & (mouseY>350 & mouseY<500)){
     
     
       background(print2);
        drawSprite(bubble);
     drawSprite(cam);
       drawSprites(strands);
     drawSprite(comb);
     
     
     
     size = 0;
     
     textSize(25);
       fill(0);
  textAlign(CENTER, CENTER);
     
      text("That Won't Work!", 700, 200);
        
          
        }
}






  //--------------------------SCORE---------------------

function straightA() {
  score += 1;
  
   this.mirrorX(-1);
  this.changeAnimation("unknot");
}


function straightB() {
  score += 1;
  
  this.mirrorX(1);
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

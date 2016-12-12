var bob;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {
  
 mySound = loadSound('assets/best.mp3');

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
//"assets/ghost_standing0001.png", "assets/ghost_standing0007.png"
bob = loadAnimation("assets/bobbing1.png", "assets/bobbing2.png", "assets/bobbing3.png");
  
}


function setup() {
  
  mySound.setVolume(0.1);
  mySound.play();
  
    createCanvas(850,600);
    
    
    
}

function draw() {
  
  
  animation(bob, 415, 289);
}
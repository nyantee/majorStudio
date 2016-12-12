var ghost;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
//"assets/ghost_standing0001.png", "assets/ghost_standing0007.png"
ghost = loadAnimation("assets/startPage1.png", "assets/startPage1.png", "assets/startPage2.png", "assets/startPage2.png");
  
}


function setup() {
    createCanvas(850,600);
    
   
    
}

function draw() {
  
  
  animation(ghost, 415, 289);
}
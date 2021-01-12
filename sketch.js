//create variables to store sprites
var cat, mouse;
var tomImg1, tomImg2, tomImg3;
var jerryImg1, jerryImg2;
var garden, gardenImg;

function preload() {
    
  //load images for sprites 
  gardenImg = loadImage("garden.png");

  tomImg1 = loadImage("tomOne.png");
  tomImg2 = loadAnimation("tomTwo.png","tomThree.png");
  tomImg3 = loadImage("tomFour.png");
  
  jerryImg1 = loadImage("jerryOne.png");
  jerryImg2 = loadAnimation("jerryTwo.png","jerryThree.png");
  jerryImg3 = loadImage("jerryFour.png");
  

}

function setup(){
    //create a canvas
    createCanvas(980,700);

    //create a sprite for cat
    cat = createSprite(800, 500, 70, 70);    
    //add image for cat
    cat.addImage(tomImg1);  
    //set scale for cat
    cat.scale = 0.2;
    //set velocity for cat
    cat.velocityX = 0;
    //create a sprite for mouse
    mouse = createSprite(200, 500, 70, 70);
    //add image for mouse
    mouse.addImage(jerryImg1);
    //set scale for mouse
    mouse.scale = 0.15;
    //create sprite for garden
    garden = createSprite(490, 355);
    //add image for garden
    garden.addImage(gardenImg);
}

function draw() {

    //clear the screen
    background(0);
    //Write condition here to evalute if tom and jerry collide

    //set depth for cat
    cat.depth = garden.depth;
    cat.depth = cat.depth + 1;

    //set depth for mouse
    mouse.depth = mouse.depth;
    mouse.depth = mouse.depth + 1;

    //display function and sprites
    keyPressed(); 
    drawSprites();

    //display text
    fill("yellow");
    textSize(20);
    text("PRESS LEFT ARROW FOR ACTION", 350, 350);
    text(mouseX + ',' + mouseY, 10, 45);
}


function keyPressed(){

  //if left arrow is pressed
  if(keyDown(LEFT_ARROW)){
    //set velocity for cat
    cat.velocityX = -5;
    //add animation for cat
    cat.addAnimation("catRunning", tomImg2);    
    //change animation for cat
    cat.changeAnimation("catRunning");
    //add animation for mouse
    mouse.addAnimation("jerryTeasing", jerryImg2);    
    //change animation for mouse
    mouse.changeAnimation("jerryTeasing");
  }

  //collision b/w cat and mouse
  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    ////add animation for cat
    cat.addAnimation("tomStanding", tomImg3);
    //change animation for cat
    cat.changeAnimation("tomStanding");
    //set x value for cat
    cat.x = 320;
    //set velocity for cat
    cat.velocityX = 0;
    //add animation for mouse
    mouse.addAnimation("jerrySearching", jerryImg3);    
    //change animation for mouse
    mouse.changeAnimation("jerrySearching");
  }
}
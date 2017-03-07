var x = 0;
var y = 0;
var speedx = 4;
var speedy = 6;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(50);
    
    //i wrote this so background changes to pink when clicked
    if(mouseIsPressed){
        background(123,45,67);
    }
    
    //makes outline white, 6px thick, color inside shapes  also do we really need comments?
    stroke(255);
    strokeWeight(6);
    fill(0,255,0);
    
    
    
    //a circle
    ellipse(x,y,45,45);
    
    //this code is going to get the circle to move on its own
    if(x>600 || x<0){
        console.log("CIRLCE IS OFF THE SCREEN!!!!")
        speedx = speedx * -1;
    }
     if(y>400 || y<0){
        console.log("CIRLCE IS OFF THE SCREEN!!!!")
        speedy = speedy * -1;
    }
    y = y + speedy;
    console.log(y)
    x = x + speedx;
    console.log(x);
}
// hi

var canvas;
var lock;
var mute;
var stateoflight1
var stateoflight2
var stateoflight3
var stateiswon

function preload() 
{
  door =  loadImage('https://dl.dropboxusercontent.com/s/5beqn1vkb76yqgu/doors.jpg?dl=0');
  
}


function setup()
{
  createCanvas(700,600);
  canvas = 2;
  mute = 1;
  lock = false;
  stateoflight1 = 1
  stateoflight2 = 1
  stateoflight3 = 1
  stateiswon = 0 
  //count1 = count1 + 1;

}

function draw()
{
  background(255,255,255);
  
  if (canvas == 1)
  {
    canvas1();
  }
  else if (canvas == 2)
  {
    canvas2();
  }
  
  fill(255,0,0);
  text("Mouse X "+mouseX,50,230);
  text("Mouse Y "+mouseY,50,290);
}



function drawCanvasButtons()
{
  var x = 10;
  var y = 10;
  if (canvas == 1) 
  {
    fill(0,0,0);
    rect(x,y,90,50);
    fill(255,255,255);
    text("Canvas1",x+20,y+30);
  }
  else if (canvas == 2) 
  {
    fill(0,0,0);
    rect(x,y,90,50);
    fill(255,255,255);
    text("Canvas2",x+20,y+30);
  } 

  if (lock == false && mouseX > 9 && mouseX < 100 && mouseY > 10 && mouseY < 60 && mouseIsPressed == true)
  {
    lock = true;
    if (canvas == 1)
    {
      canvas = 2;      
    }
    else if (canvas == 2)
    {
      canvas = 1;
    }
  } 
}


function canvas2()
{
  background(100,0,80);
 drawCanvasButtons();
 var y = 100;

  image(door,30,70,640,400);
  fill(40,160,100);
  //lightswitch 1
  rect(165,520,50,50);
  //lightswitch 2 
  rect(327,520,50,50);
  //lightswitch 3 
  rect(492,520,50,50);
//___________________________________________________
if (stateiswon == 1) 
{ 
  fill(255,255,255);
  text("enter",200,50);
} 
//_____________________________________________________door 1 
  if (stateoflight1 == 2) 
  {
    fill(255, 255, 153,80);
    rect(45,85,120,370);
  }
  if (stateoflight1 == 3) 
  {
    fill(255, 105, 153,80);
    rect(45,85,120,370);
    fill(255,105,153,80);
    rect(537,85,120,370);
  }
  if (stateoflight1 == 4) 
  {
    fill(255, 105, 153,80);
    rect(370,85,120,370);
  }
//______________________________________________________door 2
  if (stateoflight2 == 2) 
  {
    fill(255, 255, 153,80);
    rect(537,85,120,370);
  } 
  if (stateoflight2 == 3) 
  { 
    fill(255, 255, 153,80);
    rect(537,85,120,370);
    fill(55, 105, 153,80);
    rect(45,85,120,370);
  } 
//________________________________________________________door 3
  if (stateoflight3 == 2) 
  { 
    fill(255, 255, 153,80);
    rect(215,85,120,370);
    fill(255,105,63,80);
    rect(537,85,120,370);
  } 
  if (stateoflight3 == 3) 
  { 
    fill(15, 255, 153,80);
    rect(45,85,120,370);
  } 
  
//________________________________________________lights
  if (lock == false && mouseX > 165 && mouseX < 215 && mouseY > 517 && mouseY < 567 && mouseIsPressed == true)
  {
    noStroke();
    if (stateoflight1 == 1)
    {
      stateoflight1 = 2
    }
    else if (stateoflight1 == 2)
    {
      stateoflight1 = 3;
    }
    else if (stateoflight1 == 3)
    {
      stateoflight1 = 4;
    }
    else if (stateoflight1 == 4)
    {
      stateoflight1 = 1;
    }
    lock = true;
  }
  if (lock == false && mouseX > 327 && mouseX < 374 && mouseY > 517 && mouseY < 567 && mouseIsPressed == true)
  {
    if (stateoflight2 == 1)
    {
      stateoflight2 = 2
    }
    else if (stateoflight2 == 2)
    {
      stateoflight2 = 3;
    }
    else if (stateoflight2 == 3) 
    {
      stateoflight2 = 1
    } 
    lock = true; 
  }
  if (lock == false && mouseX > 492 && mouseX < 543 && mouseY > 517 && mouseY < 567 && mouseIsPressed == true)
  {
    if (stateoflight3 == 1)
    {
      stateoflight3 = 2
    }
    else if (stateoflight3 == 2)
    {
      stateoflight3 = 3;
    }
    else if (stateoflight3 == 3) 
    {
      stateoflight3 = 1
    } 
    lock = true; 
  }
  
  if (stateoflight1 == 2 && stateoflight2 == 3 && stateoflight3 == 1)
  {
    stateiswon = 1 
    lock = true; 
    if (mouseX > 10 &&  mouseX < 100 && mouseY > 10 && mouseY < 60 && mouseIsPressed == true )
    {
      canvas = 1 
    } 
   
  } 

  
}


function canvas1()
{  
  background(79,50,0);
  drawCanvasButtons();
  var y = 100
}

function mouseReleased()
{
  if (lock)
  {
    lock = false;
  }
}
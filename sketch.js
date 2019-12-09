c = 0;                                        //color variable
cm = 361;                                 //color palette variable
cs = 0;                                      //color saturation variable
g = 0;                                        //spots wheight variable

function setup() {
  createCanvas(720,720);        //Create a canvas of 720 x 720 pixels
  background(240);                  //Set the color 
  rect(362,1,356,23);                //The white color button
  noStroke();
  colorMode(HSB);                   //set the color mode to HSB
    for(h=0;h<360;h++){
        c = c+1;
        rect(h*1,0,1,25);
        fill(c,100,100);
  }                                             //I creat a color palette
}

function draw() {
  if(mouseY<30){                      //If the mouse is in the color palette or the white color button
    if (mouseIsPressed){            //if the mouse is pressed in the color palette or the white color button...
      cm = mouseX;
      if (cm < 360){                     //will catch the color you pressed in the color palette to draw
        cs = 100;                         //with the saturation at 100%
      } else {
        cs=0                                //Will catch the white color to draw
      }
  }
  }else{                                    //if the mouse is not in the collor palette or the white color button...
    if (mouseIsPressed){          //if the mouse is pressed outside the color palette or the white color button...
      stroke(cm,cs,100);            //set the color stroke you pressed previously
      if (cm < 360){                    
      g = random(5,20);             //if you pressed a color the spots will have between 5 and 20 pixels of diameter
      }else{
      g = random(5,15);             //If you pressed the white color the spots will have between 5 and 15 pixels of diameter
      }
      strokeWeight(g);               //set the spots diameter
      line(mouseX,mouseY,mouseX,mouseY)     //draw the spots in the mouse X and Y
    }
  }  
}

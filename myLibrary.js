/*algorithm 1 : if 2 rectangle they will change colour
to green and red otherwise they will remain at blue*/

function Aloukik(object1 , object2){


    if(object2.x-object1.x<=object2.width/2+object1.width/2 && 
      object1.x-object2.x<=object1.width/2+object2.width/2 && 
      object2.y-object1.y<=object2.height/2+object1.height/2 &&
      object1.y-object2.y<=object1.height/2+object2.height/2){
     
     
     object1.shapeColor = ("red");
     object2.shapeColor = ("blue");
  
      }  
  
    else {
  
  
  object1.shapeColor = ("green");
  object2.shapeColor = ("green");
  
    }
    
  
  
  }
  /*algorithm2 if two rectangles are touching make them
  moving the opposite direction*/
  function hi(object1,object2){

    if(object2.x-object1.x<object2.width/2+object1.width/2 && 
        object1.x-object2.x<object1.width/2+object2.width/2 ) 
    {
        
        object1.velocityX = object1.velocityX *(-1)
        object2.velocityX = object2.velocityX *(-1)
        }  

  }
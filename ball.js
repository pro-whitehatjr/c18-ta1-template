class Ball 
{
  constructor(x,y,r)
  {
  this.x = x;  
  this.y = y;   
  this.r = r;  
  this.speed = 0;  
  }

  display() 
  {
    fill(255,100); 
    stroke(0); 
    ellipse(this.x,this.y,this.r,this.r); 
  }
  
}

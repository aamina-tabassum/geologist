class RubberBall {
    constructor (x,y,radius){

      var allOptions = {

        'restitution' : 0.3,
        'friction' : 5,
        'density' : 5,
        
    };

      this.rubberBall = Matter.Bodies.circle(x,y,radius,allOptions)
      
      Matter.World.add(world,this.rubberBall)
      this.radius = radius
    }
    display(){
         fill ("darkBlue") 
         ellipseMode(RADIUS)
         ellipse(this.rubberBall.position.x,this.rubberBall.position.y,this.radius,this.radius)
    }

}
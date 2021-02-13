class Hammer {
    constructor(x,y,width,height){

        var options = {
            'density' : 2,
            'friction' : 1.0,
            'restitution' : 0.5,
        };
    
     this.hammer = Matter.Bodies.rectangle(x,y,width,height,options)

     Matter.World.add(world,this.hammer)

     this.width = width
     this.height = height

    }
    display(){
        this.hammer.position.x = mouseX
        this.hammer.position.y = mouseY

        push ()
        fill ("yellow")
        rectMode(CENTER)
        rect(this.hammer.position.x,this.hammer.position.y,this.width,this.height)
        pop ()
    }

}
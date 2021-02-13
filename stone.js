class Stone {
    constructor (x,y,width,height) {

               this.stone = Matter.Bodies.rectangle(x,y,width,height)
        Matter.World.add(world,this.stone)

        this.width = width
        this.height = height
    }
    display(){
        fill ("black")
        rectMode(CENTER)
        rect(this.stone.position.x,this.stone.position.y,this.width,this.height)
    }
}
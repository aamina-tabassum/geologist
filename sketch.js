
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone
var ground
var hammer
var rubberBall

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400,670,800,20)
	stone = new Stone(400,665,70,70)
	hammer = new Hammer(430,660,67,20)
	rubberBall = new RubberBall(460,665,20) 
  
}


function draw() {
 // rectMode(CENTER);
	Matter.Engine.update(engine)

  background("lightBlue");

 
  ground.display();
  stone.display();
  hammer.display();
  rubberBall.display();
  
  drawSprites();
 
}




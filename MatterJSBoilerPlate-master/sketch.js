var ground,paper;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,450,70);
	box1 = new Box(600,650,150,20);
	box2 = new Box(600,580,20,70);
	box3 = new Box(730,580,20,70);
	ground = new Ground();
	
	
	Engine.run(engine);
	
}


function draw() {

  background("pink");
  
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
  
}
function keyPressed()
{
	if(keyCode ===UP_ARROW)
  {
	 // Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
	Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-30})
  }
}



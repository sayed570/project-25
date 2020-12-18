
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var base,left,right,platform,paper;
 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base= new Bin (600,540,100,20)
	 left = new Bin (555,502,20,100) 
	 right= new Bin (655,502,20,100) 
	 platform = new Ground(400,570,800,40) 
	 paper = new Paper(30,560,20)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(180);
  base.display();
  left.display();
  right.display();
  platform.display();
  paper.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}




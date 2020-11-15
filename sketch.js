
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObject,groundObject;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 680);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(200,450,70);
	dustbinObj=new dustbin(1200,650);
	groundObject=new ground(width/2,670,width,20);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	})
	Engine.run(engine);
  
}


function draw() {
  background(0); 
  rectMode(CENTER);
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display(); 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
    	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}





var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxleft,boxright,boxbottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	boxleft=createSprite(300,620,20,100);
	boxleft.shapeColor="red";
	boxright=createSprite(500,620,20,100);
	boxright.shapeColor="red";
	boxbottom=createSprite(400,660,200,20);
	boxbottom.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	var options={
		isStatic:true,
		//restitution:0.3,
		friction:0.0,
		density:0.4,
		restitution:0.2
		
	}
	engine = Engine.create();
	world = engine.world;

	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	 World.add(world, packageBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.collide(boxbottom);
  //console.log("ground.height")
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, isStatic=false);
  }
}




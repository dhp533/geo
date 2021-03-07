const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var stone;
var ground;
var rubber;

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer (200,100);
	stone = new Stone (810, 260, 100, PI/4);
	ground = new Ground(width/2, 390, width, 20);
	rubber = new Rubber(760, 200, 20, PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  hammer.display();
  stone.display();
  rubber.display();

  ground.display();

  drawSprites(); 
}
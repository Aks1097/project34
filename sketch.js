const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;



function preload() {
Superhero=loadImage("Images/Superhero-02.png");
bg=loadImage("Images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

     ground = new Ground(600,600,1200,20);
     hero = new Hero(400,800,250);
     rope = new Rope(hero.bodyA,{x:500,y:50});
}

function draw() {
background(bg);
  Engine.update(engine);
  hero.display();
  rope.display();
  ground.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

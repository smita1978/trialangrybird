

var Engine=Matter.Engine;
var World=Matter.World;
var Bodies=Matter.Bodies;
var engine,world,ground,box1,bo2;
var pig1,log1;
var birde;
function setup() {
 var canvas= createCanvas(1200,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground();
 
  box1=new Box (700,320,70,70);
  box2=new Box (920,320,70,70);
pig1=new Pig(810,350);
log1=new Log(810,260,300,PI/2);
  
box3=new Box (700,240,70,70);
box4=new Box (920,240,70,70);
pig2=new Pig(810,220);
log2=new Log(810,180,300,PI/2);

box5=new Box(810,160,70,70);

log4=new Log(760,130,170,PI/7)
 log5=new Log(870,130,170,-PI/7);
 birde=new Bird(100,100);
}

function draw() {
  background(255,150,155);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log4.display();
  log5.display();
  birde.display();
  }
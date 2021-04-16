const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//pyramid1
var base1;
//level1
var block1;
var block2;
var block3;
var block4;
//level2
var block5;
var block6;
var block7;
//level3
var block8;
var block9;
//level4
var block10;

//pyramid2
var base2;
//level1
var block11;
var block12;
var block13;
//level2
var block14;
var block15;
//level3
var block16;

var hexagon;
var slingshot;

var score;

function preload(){
	
  }

function setup() {
	createCanvas(1300, 800);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(650,790,1300,5);
	//pyramid1
	base1 = new Ground(650,580,500,5);
	
	//level1
	block1 = new Block(500,530,100,95);
	block2 = new Block(600,530,100,95);
	block3 = new Block(700,530,100,95);
	block4 = new Block(800,530,100,95);
	//level2
	block5 = new Block(547,435,105,95);
	block6 = new Block(650,435,100,95);
	block7 = new Block(750,435,100,95);
	//level3
	block8 = new Block(690,340,100,95);
	block9 = new Block(590,340,100,95);
	//level4
	block10 = new Block(640,245,100,95);

	//pyramid2
	base2 = new Ground(1060,340,350,5);
	//level1
	block11 = new Block(965,290,100,95);
	block12 = new Block(1065,290,100,95);
	block13 = new Block(1165,290,100,95);
	//level2
	block14 = new Block(1015,195,100,95);
	block15 = new Block(1115,195,100,95);
	//level3
	block16 = new Block(1060,100,100,95);

	hexagon = new Polygon(200,200,250,200);
	slingshot = new SlingShot(hexagon.body,{x:200, y:100});

	score = 0;

	Engine.run(engine);

}

function draw() {
	background(230);
	ground.display();
	//pyramid1
	base1.display();
	//level1
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	//level2
	block5.display();
	block6.display();
	block7.display();
	//level3
	block8.display();
	block9.display();
	//level4
	block10.display();

	//pyramid2
	base2.display();
	//level1
	block11.display();
	block12.display();
	block13.display();
	//level2
	block14.display();
	block15.display();
	//level3
	block16.display();

	hexagon.display();
	slingshot.display();

	text("Score: "+score,750,40);
	
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

}

function mouseDragged () {
    Matter.Body.setPosition (hexagon.body, {x: mouseX, y: mouseY});
}

function mouseReleased () {
    slingshot.fly ();
}
function keyPressed(){
	if(keyCode==32){
		
	}
}

function keyPressed () {
    if (keyCode === 32) {
		Matter.Body.setPosition (hexagon.body, {x:200, y:100});
        slingshot.attach (hexagon.body);
    }
}
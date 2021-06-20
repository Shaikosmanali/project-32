const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25, block26, block27;

var block28, block29, block30, block31, block32, block33, block34, block35;

var block36, block37;

var ground1, ground2;

var polygon;

var score = 0;

var sling;
function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600, 600, 600, 20);
  ground2 = new Ground(1200, 400, 500, 20);

  //pink blocks.
  block1 = new Block(370, 530, 60, 100);
  block2 = new Block(430, 530, 60, 100);
  block3 = new Block(490, 530, 60, 100);
  block4 = new Block(550, 530, 60, 100);
  block5 = new Block(610, 530, 60, 100);
  block6 = new Block(670, 530, 60, 100);
  block7 = new Block(730, 530, 60, 100);
  block8 = new Block(790, 530, 60, 100);
  block9 = new Block(850, 530, 60, 100);

  block10 = new Block(1000, 340, 60, 100);
  block11 = new Block(1060, 340, 60, 100);
  block12 = new Block(1120, 340, 60, 100);
  block13 = new Block(1180, 340, 60, 100);
  block14 = new Block(1230, 340, 60, 100);
  block15 = new Block(1280, 340, 60, 100);
  block16 = new Block(1330, 340, 60, 100);

  //blue blocks.
  block17 = new Block(480, 400, 60, 100);
  block18 = new Block(540, 400, 60, 100);
  block19 = new Block(600, 400, 60, 100);
  block20 = new Block(660, 400, 60, 100);
  block21 = new Block(720, 400, 60, 100);
  block22 = new Block(780, 400, 60, 100);

  block23 = new Block(1060, 240, 60, 100);
  block24 = new Block(1120, 240, 60, 100);
  block25 = new Block(1180, 240, 60, 100);
  block26 = new Block(1240, 240, 60, 100);
  block27 = new Block(1300, 240, 60, 100);

  //red blocks.
  block28 = new Block(540, 300, 60, 100);
  block29 = new Block(600, 300, 60, 100);
  block30 = new Block(660, 300, 60, 100);
  block31 = new Block(720, 300, 60, 100);

  block32 = new Block(1120, 140, 60, 100);
  block33 = new Block(1180, 140, 60, 100);
  block34 = new Block(1240, 140, 60, 100);

  //green block.
  block35 = new Block(630, 200, 60, 100);

  block36 = new Block(1180, 40, 60, 100);

  //polygon.
  block37 = new R_Block(100, 100, 70, 70);

  sling = new Slingshot(block37.body, { x: 200, y: 250 });

}

function draw() {
  background(2, 2, 2);
  Engine.update(engine);
 

  ground1.display();
  ground2.display();

  textSize(50);
  stroke(15);
  fill("orange")
  text("SCORE :" + score, 700, 50);

  stroke(15);
  fill("pink")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  stroke(15);
  fill("blue")
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();

  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();

  stroke(15);
  fill("red")
  block28.display();
  block29.display();
  block30.display();
  block31.display();

  block32.display();
  block33.display();
  block34.display();

  stroke(15);
  fill("green")
  block35.display();
  block36.display();

  block37.display();

  sling.display();

  //score function
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score();
  block33.score();
  block34.score();
  block35.score();
  block36.score();

  drawSprites();
}
function mouseDragged() {

  Matter.Body.setPosition(block37.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  sling.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    sling.attach(block37.body)
  }
}

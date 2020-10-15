const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var battleShip, battleShipIMG;
var alienShip, alienShipImg;
var pearl, pearlIMG;
var missiles, missilesImg;
var alienMissiles, alienMissilesIMG;
var engine, world;

function preload() {
  battleShipIMG = loadImage("images/battleship.jpg");
  pearlIMG = loadImage("images/pearl.png");
  missilesImg = loadImage("images/battleShipMissiles1.png");
  alienMissilesIMG = loadImage("images/alienmissiles1.png");
}

function setup() {
  var canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true
  }
  battleShip = Bodies.rectangle(700, 200, 162, 311, options);
  pearl = Bodies.circle(700, 300, 10, options)

  alienMissiles = Bodies.rectangle(1000, 100, 100, 100, options)
  World.add(world, battleShip);
  World.add(world, pearl);

  World.add(world, alienMissiles);
  console.log(battleShip);

  alienShip1 = new AlienShip(200, 400);
  alienShip2 = new AlienShip(500, 300);
  alienShip3 = new AlienShip(900, 100);
  alienShip4 = new AlienShip(800, 500);
  alienShip5 = new AlienShip(1000, 300);



}

function draw() {
  background("white");
  Engine.update(engine);
  imageMode(CENTER);
  image(battleShipIMG, battleShip.position.x, battleShip.position.y, 100, 100);
  image(pearlIMG, pearl.position.x, pearl.position.y, 50, 50);

  image(alienMissilesIMG, alienMissiles.position.x, alienMissiles.position.y, 50, 50);
  alienShip1.display();
  alienShip2.display();
  alienShip3.display();
  alienShip4.display();
  alienShip5.display();
  battleShipmovement();
  alienShipmovement();

}
function battleShipmovement() {
  if (keyIsDown(LEFT_ARROW)) {
    battleShip.position.x = battleShip.position.x - 10
  }
  if (keyIsDown(RIGHT_ARROW)) {
    battleShip.position.x = battleShip.position.x + 10
  }
}
function alienShipmovement() {
  //as1 = alienShip1.position
  //Matter.Body.setVelocity(alienShip1, { x:10,y:0 })  
  //Body.setVelocity( box, {x: 10, y: -10});
  //alienShip1.velocity.x=-10;
}
function createBattleShipMissile() {
  var options = {
    isStatic: true
  }
  missiles = Bodies.rectangle(battleShip.position.x, battleShip.position.y, 20, options);
  World.add(world, missiles);
  console.log(battleShip.position.x)
  console.log(missiles)
 // image(missilesImg, missiles.position.x, missiles.position.y, 10, 10);
  return missiles
}
function keyPressed() { 
  if (keyCode === 66) { 
    bms= createBattleShipMissile()
    console.log(bms);
    Matter.Body.setVelocity(bms, { x: 0, y: -10 });
 } }


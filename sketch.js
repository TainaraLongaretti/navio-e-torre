const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[];
var boat;
var boats=[];




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  boat = new Boat(width, height-70, 180, 180, -70);
  
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  boat.display();
  //ball.display();
  //console.log(balls);

  Matter.Body.setVelocity(boat.body, {
    x:-0.9,
    y:0
  })

  for(var i=0; i < balls.length; i++){
    showCannonBall(balls[i], i);
  }
 
}

function showCannonBall(ball, index){
  ball.display();
}

function showBoats(){
  if(boats.length>0){

  }
}

function keyReleased() { 
  if(keyCode == 32){ 
    balls[balls.length-1].shoot(); 
  
  } 
  }

  function keyPressed(){
    if(keyCode == 32){
      var cannonball = new CannonBall(cannon.x, cannon.y);
      balls.push(cannonball);
    }
  }




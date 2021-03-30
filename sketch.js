const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var drop = []
  var maxdrop = 100


function preload(){
    
}

function setup(){
    engine = Engine.create();
    world=engine.world

    var canvas = createCanvas(400,600)
if(frameCount%80===0){
        for(var i=0 ; i<maxdrop;i++){
drop.push(new Drop(random(0,400),random(1,50)))
 }

}
    
}

function draw(){
Engine.update(engine)
background("yellow")

for(var i = 0; i<maxdrop; i++){
     drop[i].display();
     drop[i].updateY();
     }
     



   

}  


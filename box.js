class box{
    constructor(x,y,width,height){
        var Option={
            'restitution':0.8,
            'friction':1.0,
            'density':0.04
        }
    this.body=Bodies.rectangle(x,y,width,height,Option)
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos=this.body.position
        push();
        translate(pos.x, pos.y);
        rotate(angle);
    
    fill("green")
    strokeWeight(4)
    stroke("white")
    
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
    
    }
    }
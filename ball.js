class ball{
    constructor(x,y,width,height,angle){
        var Option={

            'frictionAir':0.005,
            'density':1
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
    
    fill("yellow")
    
    
    ellipseMode(CENTER)
    ellipse(0,0,this.width,this.height);
    pop();
    
    }
    }
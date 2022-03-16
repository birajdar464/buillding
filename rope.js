class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=this.pointB;

        this.rope=Constraint.create(options)
        World.add(World,this.rope);
      
    }
display(){
    if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB

        push();
        
            stroke(48,22,8);
        strokeWeight(3)
    line(pointB.x,pointB.y,pointA.x,pointA.y)
    pop();
    
    
    }
        


}


}
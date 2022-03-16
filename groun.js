class groun{
constructor(x,y,width,height){
    var Option={
        isstatic:true
    }
this.body=Bodies.rectangle(x,y,width,height,Option)
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){

var pos=this.body.position
fill("red")
rectMode(CENTER)
rect(pos.x,pos.y,this.width,this.height);


}
}
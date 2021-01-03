class Ground{
    constructor(){
        this.body=Bodies.rectangle(600,600,1200,20,{isStatic:true});
        this.width=1200;
        this.height=20;
        World .add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        rectMode(CENTER);
        fill ('brown');
        rect(pos.x,pos.y,this.width,this.height);
    }
}
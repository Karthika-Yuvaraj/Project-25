class Ground
{
    constructor()
    {
        var options = 
        {
            isStatic : true
           
        }
        this.body = Bodies.rectangle(400,680,800,20,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);  

    }
}
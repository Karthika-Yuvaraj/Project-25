class Paper
{
    constructor()
    {
        var options = 
        {
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0.5
        }
       
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(200,650,70,options);
        this.x=200;
        this.y=650,
        this.r=70;
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        image(this.image, 0,0,this.r);  
        pop()
    }
}
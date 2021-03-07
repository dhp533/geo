class Hammer
{
    constructor (xpos, ypos)
    {
        var options= {
            density: 2,
            friction: 1.0,
            restitution: 0.5        
        }
        this.body = Bodies.rectangle(xpos, ypos, 50, 50, options);
        this.width = 90;
        this.height = 25;
        World.add(world, this.body)
    }
    display()
    {
        var position = this.body.position;
        position.x = mouseX
        position.y = mouseY
        var angle = this.body.angle;
        push();
        rectMode(CENTER)
        translate(position.x,position.y)
        rotate(angle)
        fill ("red");
        rect(0,0, this.width, this.height);
        pop();
    }
}
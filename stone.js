class Stone
{
    constructor (xpos, ypos, height, angle)
    {
        var options={
            density: 1,
            friction: 1.2,
            restitution: 0.7
        }
        this.stone = Bodies.rectangle(xpos, ypos, 70, height, options)
        Matter.Body.setAngle(this.stone, angle)
        World.add(world, this.stone)
        this.height = 70;
        this.width = 70;
    }
    display()
    {
        var position = this.stone.position;
        var angle = this.stone.angle;
        push();
        rectMode(CENTER)
        translate(position.x,position.y)
        rotate(angle)
        fill ("green");
        rect(0,0, this.width, this.height);
        pop();
    }
}
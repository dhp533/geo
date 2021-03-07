class Rubber
{
    constructor (xpos, ypos, radius, angle)
    {
        var options={
            density: 1,
            friction: 5,
            restitution: 0.3
        }
        this.rubber = Bodies.circle(xpos, ypos, radius, options);
        Matter.Body.setAngle(this.rubber, angle)
        World.add(world, this.rubber)
        this.radius = 20;
    }
    display()
    {
        var position = this.rubber.position;
        var angle = this.rubber.angle;
        push();
        ellipseMode(CENTER)
        translate(position.x,position.y)
        rotate(angle)
        fill ("pink");
        ellipse(0,0, this.radius);
        pop();
    }
}
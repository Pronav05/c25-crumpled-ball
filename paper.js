class Paper{
    constructor(x, y, radius){
        var options = {
        'isStatic':false,
        'restitution':0.8,
        'friction':0.3,
        'density':0.6
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("sprites/paper.png");

        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("green");
        imageMode(CENTER);
        image(this.image, 0, 0, 140);
        pop();
    }
}
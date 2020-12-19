class Dustbin{
    constructor(x, y, width, height){
        var options = {
            'isStatic':true
            }
        
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.image = loadImage("sprites/dustbin.png");

            World.add(world, this.body);
    }

    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    fill(255);
    strokeWeight(4);
    stroke("green");
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width, 150);
    pop();
    }
}
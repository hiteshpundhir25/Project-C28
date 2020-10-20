class Ground{
    constructor(x,y){
        var option = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,1600,15,option);
        this.width = 1600;
        this.height = 15;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        noStroke();
        fill("brown");
        rect(pos.x, pos.y,this.width,this.height);

    }

}
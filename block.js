class Block{
  constructor(x,y,width,height) {
    var options = {
      'restituition' : 0.8,
      'friction' : 1.0,
      'density' : 0.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    this.image = loadImage("box.png")
    World.add(world, this.body);
  }
  display(){
    rectMode(CENTER);
    fill("cyan");

    if(this.body.speed < 18){
       image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
    else{
       World.remove(world, this.body);
       push();
       this.visibility = this.visibility - 5;
       tint(255,this.visibility);
       image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
       pop();
    }
  }
  score(){
    if(this.visibility < 0 && this.visibility >= -100){
        score++
    }
    }
}
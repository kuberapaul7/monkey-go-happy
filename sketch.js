function setup() {
  createCanvas(400, 400);
}
x=200
y=200
function draw() {
  background("blue")
  fill("yellow")
  textSize(25)
  text("my game",150,20)
  rect(1,y,10,100);
  rect(390,mouseY,10,100)
  x=x+2
  y=y+2
  square(x,y,20,100)
}
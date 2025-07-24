class Shape {
  move() {
    console.log("move");
  }
}
class Circle extends Shape {
  move() {
    //this override the move in the parent class
    super.move(); //reuse the code in the parent move method
    console.log("circle move");
  }
}
const c = new Circle();
c.move();

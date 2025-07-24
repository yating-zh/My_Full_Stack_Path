//Abstraction: hide all the unnecessary complex details on the inside; only expose a few
// this is a negative example of OOP
function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { a: 0, y: 0 };
  this.computeOptimumLocation = function (factor) {
    //...
    console.log("inside");
  };
  this.draw = function () {
    this.computeOptimumLocation();
    console.log("draw");
  };
}
const circle = new Circle(2);
console.log("created");
circle.computeOptimumLocation(0.1);
circle.draw();

// should hide intertnal details, only expose what the outside world need to use. in this example "radius" and the "draw function"
// A better way is to use local variable:
function Circle2(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation2 = function (factor) {
    // ...
  };

  this.draw = function () {
    let x, y; //scope limited to this draw function
    computeOptimumLocation2();
    console.log("draw2");
  };
}
const circle2 = new Circle2(2);
circle2.draw();

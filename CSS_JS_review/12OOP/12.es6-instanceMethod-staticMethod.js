// Static methods are class-level methods that don't require an instance to be called and are commonly used for utility or factory-like behavior.
// 1. example1: use static method create utility function that not tied to particular   function
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //instance method
  draw() {
    console.log("draw");
  }
  //static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}
//const c = new Circle(1);
const c = Circle.parse('{"radius":2}');
console.log(c);

//2. example2: just like the built-in Math functions
class Math2 {
  static abs() {
    //...
  }
}
//call the static functions directly, no need to create a new math object
Math2.abs();

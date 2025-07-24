// 1. create a simple object directly
const circle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw 1. directly create an object");
  },
};
circle1.draw();

// 2. factory function
function createCircle(radius) {
  return {
    //radius: radius,
    radius,
    draw: function () {
      console.log("draw 2. use factory function");
    },
  };
}
const circle2 = createCircle(1);
circle2.draw();

// 3. constructor function, similar as Class/Instance
function Circle(radius) {
  this.redius = radius;
  this.draw = function () {
    console.log("draw 3. use constructor function");
  };
}
const circle3 = new Circle(1);
circle3.draw();

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(2);

// 1. Use for...in...Enumerate all the members
for (let key in circle) {
  if (typeof circle[key] !== "function")
    console.log("use for...in...,return:", key, circle[key]);
}

// 2. Use Object.keys() Get all the keys
const keys = Object.keys(circle);
console.log("use Object.keys(),return", keys);

// 3. Use "in" Check existance of a property/method
if ("radius" in circle) {
  console.log("Circle has a radius");
}

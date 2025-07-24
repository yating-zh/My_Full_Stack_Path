// Before ES6
"use strict";
const Circle1 = function () {
  this.draw = function () {
    console.log(this);
  };
};
const c1 = new Circle1();
// 1. Method Call
c1.draw();

// 2. Function Call
const draw1 = c1.draw;
draw1();
// this refers to window in browser, or global in Node.js, or undefined in the strict mode

// in ES6
// always use strict mode, avoid using global object accidently
class Circle {
  draw() {
    console.log(this);
  }
}
const c = new Circle();
const draw = c.draw;
draw();

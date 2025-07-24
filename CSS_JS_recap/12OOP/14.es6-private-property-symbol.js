//ES6: a new type, Symbol
// a symbol is an unique identify. every time we call, we get a unique value.

// Use Symbol() to create pseudo-private properties:
const _radius = Symbol();
const _draw = Symbol();
class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_draw]() {
    //...
  }
}
const c = new Circle(1);
console.log(c); //all the properties are shown as Symbol()

//Hack
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);

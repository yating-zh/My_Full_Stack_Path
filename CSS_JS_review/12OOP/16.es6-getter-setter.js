// weakmap: is dictionary where keys are objects, values can be anything. The keys are weak.
const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  get radius() {
    return _radius.get(this);
  }
  set radius(value) {
    if (value < 0) throw new Error("!!! invalid radius value");
    _radius.set(this, value);
  }
}
const c = new Circle(1);
console.log(c.radius);
console.log((c.radius = 5));
console.log((c.radius = -1)); //cause error

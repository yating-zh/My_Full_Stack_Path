// weakmap: is dictionary where keys are objects, values can be anything. The keys are weak.
const _radius = new WeakMap();
const _move = new WeakMap();
const _moveArrow = new WeakMap();
class Circle {
  constructor(radius) {
    _radius.set(this, radius); //_property.set(key,value)
    _move.set(this, function () {
      console.log("_move,", this); // return: move, undefined
    });
    _moveArrow.set(this, () => {
      //use arrow function,inherited from this constructor, ref to the object
      console.log("_moveArrow,", this); // return: move, undefined
    });
  }
  draw() {
    console.log("_radius:", _radius.get(this)); //_property.get(key) will return the value of that key(this)
    console.log("1. use function, 'this' return undefined:");
    _move.get(this)(); //get(this) return the function, then get(this)() call that function.
    console.log("2. use arrow function, 'this' return the Circle object:");
    _moveArrow.get(this)();
  }
}
const c = new Circle(1);
c.draw();

// Stack data structure using ES6 syntax
const _count = new WeakMap();
const _array = new WeakMap();

class Stack {
  constructor() {
    _count.set(this, 0);
    _array.set(this, []);
  }
  peek() {
    if (_array.get(this).length <= 0) throw new Error("Empty stack.");
    return _array.get(this)[_array.get(this).length - 1];
  }
  pop() {
    if (_array.get(this).length <= 0) throw new Error("Empty stack.");
    _count.set(this, _count.get(this) - 1);
    return _array.get(this).pop();
  }
  push(value) {
    _count.set(this, _count.get(this) + 1);
    _array.get(this).push(value);
    return value;
  }
  get count() {
    return _count.get(this);
  }
}

const s = new Stack();

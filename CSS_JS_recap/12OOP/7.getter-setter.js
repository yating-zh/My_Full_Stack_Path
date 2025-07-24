// Use Object.defineProperty() can define the property inside of the Object's local variable
// Use getter to READ, and setter to WRITE
function Circle2(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log("draw2");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location");
      defaultLocation = value;
    },
  });
}

const circle2 = new Circle2(2);
console.log(
  "using getDefaultLocation() to READ:",
  circle2.getDefaultLocation()
);
console.log("using defineProperty() getter to READ:", circle2.defaultLocation);
console.log(
  "using defineProperty() setter to SET:",
  (circle2.defaultLocation = { x: 3, y: 22 })
);

//The modern style is:
class Circle {
  #defaultLocation = { x: 0, y: 0 };

  constructor(radius) {
    this.radius = radius;
  }

  get defaultLocation() {
    return this.#defaultLocation;
  }

  set defaultLocation(value) {
    if (!value.x || !value.y) throw new Error("Invalid location.");
    this.#defaultLocation = value;
  }
}

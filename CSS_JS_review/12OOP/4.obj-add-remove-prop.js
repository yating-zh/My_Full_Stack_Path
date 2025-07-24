function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const circle = new Circle(2);
console.log("original obj:", circle);

// 1. adding property
//use dot notation
circle.location = { x: 1, y: 2 };
console.log("added location prop:", circle);
// use bracket (for special prop name)
circle["color"] = "red";
console.log("added color prop:", circle);
const propertyName = "center location";
circle[propertyName] = { x: 1 };
console.log("added center location prop:", circle);

//2.removing property
delete circle.radius;
console.log("removed radius prop:", circle);
delete circle["location"];
console.log("removed location prop:", circle);
delete circle[propertyName];
console.log("removed center location prop:", circle);

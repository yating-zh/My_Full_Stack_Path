let x = { value: 10 };
let y = x; //only give the reference address of the Obj, y point to the same object of x

x.value = 20;

console.log("x", x);
console.log("y", y);

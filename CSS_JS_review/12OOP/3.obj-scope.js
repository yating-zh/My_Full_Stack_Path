// Primitives (value) type
// number in the function copies the value only. so the global number is still 10 after the function call
let number = 10;

function increase(number) {
  number++;
  console.log("number in function", number);
}

increase(number);
console.log("number out of function", number);

//Reference type -Object
//in different scope, the obj point to the same object /same ref address
let obj = { value: 10 };

function increaseObj(obj) {
  obj.value++;
  console.log("object in function", obj.value);
}

increaseObj(obj);
console.log("object out of function", obj.value);

// 1. Function
sayHello();
//sayGoodbye(); //error:not defined

// 1.1 function declaration
//it is hoisted(always on the top), can be called anywhere even before the declaration
function sayHello() {}

// 1.2 function expression
//it is not hoisted, must define before calling
const sayGoodbye = function () {};

// 2. Class

// 2.1 Class declaration
class Circle {} //more prefered, simpler and clear

// 2.2 Class expression
const Square = class {};

const c = new Circle(); //not hoisted in both way, create new Obj must after class defination
const s = new Square(); //same

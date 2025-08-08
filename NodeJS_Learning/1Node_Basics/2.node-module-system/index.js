//module.exports={}
//require("./module")

//import firstModule from "./first-module.js";
const firstModule = require("./first-module");
console.log("add result is", firstModule.add(1, 2));

try {
  //console.log("divide result is", firstModule.divide(0, 100));
  console.log("divide result is", firstModule.divide(10, 0));
} catch (error) {
  console.log("caught an error", error.message);
}

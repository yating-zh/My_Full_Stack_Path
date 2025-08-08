const lodash = require("lodash");
const list = [1, 2, 3, "apple", "peter", 4, 5];
const numberList = list.filter((item) => typeof item === "number");
console.log("number list: ", numberList);

const nameList = ["apple", "banana", "orange"];
const capitalize = lodash.map(nameList, lodash.capitalize);
console.log("capitalized list: ", capitalize);

//run the "node index.js" in the start script
// >npm start

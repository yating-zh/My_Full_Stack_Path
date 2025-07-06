const fs = require("fs");
function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}
function address() {
  console.log("Australia");
}
person("Sam", address);

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("error to read file");
    return;
  }
  console.log(data);
});

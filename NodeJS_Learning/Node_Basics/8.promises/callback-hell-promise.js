const fs = require("fs").promises;

fs.readFile("input.txt", "utf8")
  .then((data) => {
    console.log(`read content from input.txt---${data}`);
    const outData = data.toUpperCase();
    return fs.writeFile("output.txt", outData);
  })
  .then((data) => {
    console.log("write content to output,txt---");
    return fs.readFile("output.txt", "utf8");
  })
  .then((data) => {
    console.log(`read content from output.txt---${data}`);
  })
  .catch((error) => console.log(error));

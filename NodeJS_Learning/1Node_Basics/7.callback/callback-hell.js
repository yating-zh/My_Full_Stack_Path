const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("failed to read input.txt.");
    return;
  }
  console.log(`successfully read data from input.txt------${data}`);

  const outData = data.toUpperCase();
  fs.writeFile("output.txt", outData, (err) => {
    if (err) {
      console.error("failed to write data to output.txt.");
      return;
    }
    console.log(`successfully write data into output.txt`);

    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) {
        console.error("failed to read output.txt.");
        return;
      }
      console.log(`successfully read data from output.txt------${data}`);
    });
  });
});

//callback hell： multiple nested callbacks make the code cahder to read, maintain and debug

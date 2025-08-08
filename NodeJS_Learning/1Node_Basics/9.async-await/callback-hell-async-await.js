const fs = require("fs").promises;

async function processFiles() {
  try {
    const data = await fs.readFile("input.txt", "utf8");
    console.log(`read input.txt: ${data}`);

    const outData = data.toUpperCase();
    await fs.writeFile("output.txt", outData);
    console.log("wrote output.txt");

    const newData = await fs.readFile("output.txt", "utf8");
    console.log(`read output.txt: ${newData}`);
  } catch (err) {
    console.error("something failed", err);
  }
}

processFiles();

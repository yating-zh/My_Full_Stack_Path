const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created.");
}
const filePath = path.join(dataFolder, "example.txt");

//1. Sync way of operating the file system
console.log("1. Sync Way------------");
//Write
fs.writeFileSync(filePath, "hello, this is the sync nodejs");
console.log("writeFileSync()...Done");
//Read
const readContent = fs.readFileSync(filePath, "utf8");
console.log("readFileSync()...Done: ", readContent);
//Append
fs.appendFileSync(filePath, "\nThis is the new line in the file ");
console.log("appendFileSync()...New line appended");

//2. Async way of operating the file system
console.log("2. Async Way------------");
const asyncfilePath = path.join(dataFolder, "async-example.txt");
//Write
fs.writeFile(asyncfilePath, "hello, this is the Async nodejs", (err) => {
  if (err) throw err;
  console.log("writeFile()...Done");

  //Read
  fs.readFile(asyncfilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("readFile()...Done: ", data);
    //Append
    fs.appendFile(
      asyncfilePath,
      "\nThis is the added line for the async nodejs",
      (err) => {
        if (err) throw err;
        console.log("appendFile()...New line appended");
      }
    );
  });
});

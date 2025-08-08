console.log("-----message in explorer.");
console.log("the filename in explorer: ", __filename);
console.log("the file_directory in explorer: ", __dirname);

function greet(name) {
  console.log(`hello,${name}`);
}
module.exports = { greet };

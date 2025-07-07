const moduleWrapperExplorer = require("./module-wrapper-explorer");
// when we use require, it will execute the module-wrapper-explorer.js file immediately.
// so the "-----message in module-wrapper-explorer." will be printed first.
console.log("-----message in demo.");
console.log("the filename in demo: ", __filename);
console.log("the file_directory in demo: ", __dirname);
moduleWrapperExplorer.greet("Claire");

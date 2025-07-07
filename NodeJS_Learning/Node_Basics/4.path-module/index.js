const path = require("path");

function hr(title) {
  console.log(`* ${title}-------------------`);
}
function pathPrint(path) {
  console.log("   >", path);
}
console.log("   __filename is: ", __filename);
console.log("   __dirname is: ", __dirname);

hr("path.dirname()"); //return the path without the last segment
pathPrint(path.dirname(__filename));
pathPrint(path.dirname(__dirname));

hr("path.basename()"); //only return the last segment of the path
pathPrint(path.basename(__filename));
pathPrint(path.basename(__dirname));

hr("path.extname()"); //return the extension of the last segment
pathPrint(path.extname(__filename));

hr("path.join()"); //concatenate segments into a path
const joinPath1 = path.join("/seg1", "seg2", "seg3", "seg4"); //return absolute path
const joinPath2 = path.join("seg1", "seg2", "seg3", "seg4"); //can also return relative path
pathPrint(joinPath1);
pathPrint(joinPath2);

hr("path.resolve()"); //resolve解析 a path, ONLY return absolute path
const resolvedPath1 = path.resolve("seg1", "seg2", "seg3", "seg4"); //add the segments after the current working directory
const resolvedPath2 = path.resolve("/seg1", "seg2", "seg3", "seg4"); //create new absolute path
const resolvedPath3 = path.resolve("/seg1", "seg2", "/seg3", "seg4"); //only create the rightmost absolute path
pathPrint(resolvedPath1);
pathPrint(resolvedPath2);
pathPrint(resolvedPath3);

hr("path.normalize()"); //cleans up a path
const normalizePath = path.normalize("/seg1/.seg2/../.seg3/./seg4/seg5");
pathPrint(normalizePath);
/*
it return >/seg1/.seg3/seg4/seg5
/seg1
/.seg2 — treated as a folder name, not a special dot
/.. — means go up one level, so .seg2 is removed
/.seg3 — treated as a regular folder (name starts with a dot, still valid)
/./ — means "current directory" → gets ignored
/seg4/seg5 — added normally
*/

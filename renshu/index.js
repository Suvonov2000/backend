const path = require("node:path");

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.join("user", "admin", "documents", "file.txt"));

const resolvePath = path.resolve("/documents", "file.txt");
console.log(resolvePath);

console.log(path.join(__dirname, "documents", "node.txt"));

const pathToNormalize = "user../admin//me/you//index.js";
console.log(path.normalize(pathToNormalize));

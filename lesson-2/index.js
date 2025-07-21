const path = require("node:path");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename, "js"));
console.log(path.basename(__dirname));

console.log(path.basename(__filename));

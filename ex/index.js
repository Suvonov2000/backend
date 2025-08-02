const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "text.txt"), "utf-8");

fs.writeFileSync(path.join(__dirname, "text.txt"), "Hello world", {
  encoding: "utf-8",
});
console.log(file);

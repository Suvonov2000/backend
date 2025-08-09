const fs = require("fs");

const path = require("path");
fs.writeFileSync(path.join(__dirname, "test.txt"), "Hello world", {
  encoding: "utf-8",
});

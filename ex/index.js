const { error } = require("console");
const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "text.txt"), "utf-8");
fs.writeFileSync(path.join(__dirname, "text.txt"), "This is from index.js", {
  encoding: "utf-8",
});
console.log(file);

// Bu ascynxron usulida yoilgan
fs.readFile(path.join(__dirname, "text.txt"), (error, data) => {
  fs.writeFile(path.join(__dirname, "text.txt"), data, "utf-8", (error) => {
    if (error) {
      return console.log("Failed");
    }
    console.log("Succeded");
  });
});
console.log("Hello");

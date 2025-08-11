// const { createFolder } = require("../homework");

// createFolder(__dirname + "/../lesson-4", "salom-2");

const { error } = require("console");
const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(path.join(__dirname, "test.txt"));
const writableStream = fs.createWriteStream(path.join(__dirname, "text.txt"));

readableStream.pipe(writableStream);

writableStream.on("finish", () => {
  console.log("File has been written");
});

fs.appendFile(
  path.join(__dirname, "test.txt"),
  "Hello Uzbekistan \n",
  (err) => {
    if (err) {
      console.error(err);
    }
  }
);

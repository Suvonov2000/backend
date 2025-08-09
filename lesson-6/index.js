const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(path.join(__dirname, "text.txt"));
const writableStream = fs.createWriteStream(path.join(__dirname, "text2.txt"));

readableStream.pipe(writableStream);

writableStream.on("finish", () => {
  console.log("File has been written");
});

// const buffer = Buffer.from("Umidjon");
// buffer.write("Umidjon Suvonov");

// console.log(buffer.toString());

const fs = require("fs");
const path = require("path");

// const fileInfo = fs.readFileSync(path.join(__dirname, "text.txt"), "utf-8");
// console.log(fileInfo);

// fs.writeFileSync(path.join(__dirname, "test.txt"), "Salom");
// fs.unlinkSync(path.join(__dirname, "test.txt"));
// console.log("O'chirildi");

// fs.appendFile(
//   path.join(__dirname, "text.txt"),
//   "Uzbekistan/n",
//   "utf-8",
//   (err) => {
//     if (err) {
//       console.log(err);
//     }
//   }
// );
// const readableStream = fs.createReadStream(path.join(__dirname, "text.txt"), {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });
// readableStream.on("end", () => {
//   console.log("steam ended");
// });

const readableStream = fs.createReadStream(path.join(__dirname, "text.txt"), {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream(path.join(__dirname, "test.txt"));

readableStream.on("data", (chunk) => {
  console.log(chunk);
  writableStream.write(chunk, "utf-8", () => {
    console.log("chunk yozildi");
  });
});

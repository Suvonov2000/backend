const fs = require("fs");
const path = require("path");

// const createFolder = (folrderNmae) => {
//   const folderPath = path.join(__dirname, folrderNmae);
//   fs.mkdirSync(folderPath);
//   console.log("Papka yaratildi");
// };

// const createFile = (fileName) => {
//   const filePath = path.join(__dirname, "newFolder", fileName);
//   fs.writeFileSync(filePath, "data");
//   console.log("file yaratildi");
// };

// createFolder("newFolder");
// createFile("newFile.txt");

const writeToFile = (content, filePath) => {
  fs.writeFileSync(filePath, content);
  console.log("Malumot yozildi");
};
writeToFile("Hello Umidjon", path.join(__dirname, "test.txt"));

const writeFile = () => {
  fs.writeFileSync(path.join(__dirname, "text.txt"), "Hello from Japan");
  console.log("Malumot yozildi");
};

writeFile();

const readFile = (readFilePath) => {
  const data = fs.readFileSync(readFilePath, "utf-8");
  console.log(data);
};
readFile("text.txt");

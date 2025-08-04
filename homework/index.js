const fs = require("fs");
const path = require("path");

const createFolder = (folrderNmae) => {
  const folderPath = path.join(__dirname, folrderNmae);
  fs.mkdirSync(folderPath);
  console.log("Papka yaratildi");
};

const createFile = (fileName) => {
  const filePath = path.join(__dirname, "newFolder", fileName);
  fs.writeFileSync(filePath, "data");
  console.log("file yaratildi");
};

createFolder("newFolder");
createFile("newFile.txt");

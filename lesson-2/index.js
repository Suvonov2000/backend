const path = require("node:path");

console.log(__dirname);
//papkagacha chiqorishi uchun//

console.log(__filename);
//filenamegacha chiqorish uchun//

console.log(path.basename(__filename, ".js"));
//faqat oxiridan olib tashlash uchun oxirgi file nomini chiqorish uchun //

console.log(path.basename(__dirname));
//faqat oxirdagi papkani chiqoradi

console.log(path.basename(__filename));
//oxirgi fileni chiqorib beradi//

console.log(path.dirname(__filename));
//basename bilan birxil//

console.log(path.extname(__filename));
//filenamegacha hammasini o'chirib .jsni chiqoradi//

console.log(path.join("/user", "admin", "documents", "file.txt"));

console.log(path.join(__dirname, "test", "hello.html"));

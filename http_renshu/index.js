// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("Server received a signal");

//   res.writeHead(200, { "content-type": "text/html" });
//   res.end("<h1>Hello my first server</h1>");
// });

// server.listen(2000, () => {
//   console.log("Server is runnig");
// });

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  req.statusCode = 200;

  res.setHeader("Content-Type", "application/json");

  const readableSrteam = fs.createReadStream(path.join(__dirname, "user.json"));

  readableSrteam.pipe(res);
});

server.listen(2026, () => {
  console.log("Server ishladi");
});

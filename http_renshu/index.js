const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server received a signal");

  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello my first server");
});

server.listen(2000, () => {
  console.log("Server is runnig");
});

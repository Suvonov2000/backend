const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server received signal");

  console.log({ method: req.method, url: req.url, headers: req.headers });

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Hello and welcome to my frst server.");
});

server.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});

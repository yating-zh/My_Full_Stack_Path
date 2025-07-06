const http = require("http");

// Creates an HTTP server. (req, res) => { ... } runs every time when someone makes a request to server.
const server = http.createServer((req, res) => {
  console.log(req, "req");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello from node js http module");
});

// Set port and tell server to start listening that port
const port = 3000;
server.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});

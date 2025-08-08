const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.end("home page");
  } else if (url === "/project") {
    res.end("project page");
  } else {
    res.end("404 page not found");
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`listening port ${port}`);
});

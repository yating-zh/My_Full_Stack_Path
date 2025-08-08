const express = require("express");
const app = express();

//define middleware
const requestTimestampLogger = (req, res, next) => {
  //  const timeStamp = new Date().toISOString();
  //  const timeStamp = new Date().toString();
  const timeStamp = new Date().toLocaleString();
  console.log(
    `Timestamp:${timeStamp} --- Method:${req.method} --- Url:${req.url} `
  );
  //middleware can be used to do authentication
  next();
};
app.use(requestTimestampLogger);

app.get("/", (req, res) => {
  res.send("home page");
  //  console.log("route to home page");
});

app.listen("3000", () => {
  console.log("server is running on port 3000");
});

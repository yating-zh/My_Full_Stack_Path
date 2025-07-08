const express = require("express");
const app = express();

//define middleware function
const myFirstMiddleware = (req, res, next) => {
  console.log("this middleware run on every request", req.method, req.url);
  next(); //it means when the middleware executed, call the NEXT function (eg, routing)
};
app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("home page");
  //  console.log("route to home page");
});

app.get("/about", (req, res) => {
  res.send("about page");
  //  console.log("route to about page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is listending on ${port}`);
});

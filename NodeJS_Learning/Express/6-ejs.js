const express = require("express");
const path = require("path");

const app = express();

//set view engine
app.set("view engine", "ejs");
//set directory fot the views
app.set("views", path.join(__dirname, "ejs_views"));
//console.log(path.join(__dirname, "ejs_views"));
const products = [
  {
    id: 1,
    title: "product 1",
  },
  {
    id: 2,
    title: "product 2",
  },
  {
    id: 3,
    title: "product 3",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "HOME", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "ABOUT" });
});

port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

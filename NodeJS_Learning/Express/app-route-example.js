const express = require("express");
const app = express();

//root route
app.get("/", (req, res) => {
  res.send("welcome to the home page");
});

//get all products
app.get("/products", (req, res) => {
  const products = [
    { id: 1, label: "product1" },
    { id: 2, label: "product1" },
    { id: 3, label: "product1" },
  ];
  res.json(products);
});

//get one specific product by query id
app.get("/products/:pId", (req, res) => {
  console.log("req.params", req.params);
  const productID = parseInt(req.params.pId);
  const products = [
    { id: 1, label: "product1" },
    { id: 2, label: "product1" },
    { id: 3, label: "product1" },
  ];
  const specificProduct = products.find((product) => product.id === productID);
  if (specificProduct) {
    res.json(specificProduct);
  } else {
    res.status(404).send("product is not found,please try a different ID");
  }
});

//listen the port
const port = 3000;
app.listen(port, () => {
  console.log(`server is running ar port ${port}`);
});

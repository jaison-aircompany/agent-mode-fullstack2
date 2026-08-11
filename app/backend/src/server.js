const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());

app.get("/products", (_req, res) => {
  res.status(200).json(products);
});

app.listen(port, () => {
  console.log(`Products API running on port ${port}`);
});

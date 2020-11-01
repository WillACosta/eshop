const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4000;
const products = require("./products");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});

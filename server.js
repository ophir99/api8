const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
products = [
  {
    id: 1,
    name: "One Plus",
    price: "10,000"
  },
  {
    id: 2,
    name: "Two Plus",
    price: "20,000"
  },
  {
    id: 3,
    name: "Three Plus",
    price: "30,000"
  }
];

app.get("/products", (req, res) => {
  res.send({ response: products });
});

app.post("/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.send({ response: products });
});

app.put("/product/:id", (req, res) => {
  console.log("Params", req.params);
  console.log("Body", req.body);
  res.send({ msg: "Connected" });
});

app.listen(3000);

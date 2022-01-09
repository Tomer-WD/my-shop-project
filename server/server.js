const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  const products = [
    {
      id: 1,
      description: "Black Shoes",
      longDescription: "Sale!! You must to buy the Shoes!!!!",
      image: "shoes.jpeg",
    },
    {
      id: 2,
      description: "Funny T-Shirt",
      longDescription: "Sale!! You must to buy the T-Shirt!!!!",
      image: "T-Shirt.png",
    },
    {
      id: 3,
      description: "Hat",
      longDescription: "Sale!! You must to buy it!",
      image: "hat.jpeg",
    },
    {
      id: 4,
      description: "Funny T-Shirt",
      longDescription: "Sale!! You must to buy the T-Shirt!!!!",
      image: "T-Shirt.png",
    },
    {
      id: 5,
      description: "Funny T-Shirt",
      longDescription: "Sale!! You must to buy the T-Shirt!!!!",
      image: "T-Shirt.png",
    },
    {
      id: 7,
      description: "Funny T-Shirt",
      longDescription: "Sale!! You must to buy the T-Shirt!!!!",
      image: "T-Shirt.png",
    },
    {
      id: 8,
      description: "Funny T-Shirt",
      longDescription: "Sale!! You must to buy the T-Shirt!!!!",
      image: "T-Shirt.png",
    },
    {
      id: 9,
      description: "Funny T-Shirt",
      longDescription: "Sale!! You must to buy the T-Shirt!!!!",
      image: "T-Shirt.png",
    },
  ];
  res.send(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Create instance for express
const express = require("express");

//Create instance for app (can be any name)
const app = express();

//Import data.js file
const products = require("./data");

//Name URL
//Function takes 2 parameters (req, res)
//Execute the console log
//Response to the get() function is "message": products(name of array in data.js)
app.get("/api/products", (req, res) => {
  console.log("no demon");
  res.json(products);
});

//localhost.8000
app.listen(8000);

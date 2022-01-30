//Create instance for express
const express = require("express");

//Create instance for app (can be any name)
const app = express();

//Import data.js file
const products = require("./data");

//App will now accept json objects (middleware)
app.use(express.json());

//Name URL
//Function takes 2 parameters (req, res)
//Execute the console log
//Response to the get() function is "message": products(name of array in data.js)
app.get("/api/products", (req, res) => {
  console.log("no demon");
  res.json(products);
});

//Method to create new product
app.post("/api/products", (req, res) => {
  //Give new product a new id
  const id = products.length + 1;
  //Deconstruct request body to add id to payload
  const newProduct = { id, ...req.body };
  //Add new object to array using push method
  products.push(newProduct);
  //Change response code
  res.status(201);
  //Message after request completion
  res.json("new product added");
});

//Method to delete product
//Add :id to URL as a changing variable
app.delete("api/products/:id", (req, res) => {
  //Set :id as a param
  const { id } = req.params;

  const newArray = products.filter((product) => product.id !== +id);
  products = newArray;
  res.status(204).res.json(newArray);
});

//localhost.8000 (must always be at the very bottom)
app.listen(8000);

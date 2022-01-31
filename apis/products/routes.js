const express = require("express");
const { Mongoose } = require("mongoose");
const Product = require("../../models/Product");
const router = express.Router();

//Name URL
//Function takes 2 parameters (req, res)
//Execute the console log
//Response to the get() function is "message": products(name of array in data.js)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Method to create new product
router.post("/", async (req, res) => {
  //Give new product a new id
  try {
    //Add new object to database using mongoose.create() method
    const newProduct = await Product.create(req.body);
    //Change response code
    res.status(201);
    //Message after request completion
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Method to delete product
//Add :id to URL as a changing variable
router.delete("api/products/:id", (req, res) => {
  //Set :id as a param
  const { id } = req.params;

  const newArray = products.filter((product) => product.id !== +id);
  products = newArray;
  res.status(204).res.json(newArray);
});

//Method to update product
router.put("api/products/5", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (product) res.status(200).json(product);
    else res.status(404).json({ message: "not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

//Import connectDB to tie VS code to mongoDB
const connectDB = require("./db/database");

//Create instance for express
const express = require("express");

//Create instance for app (can be any name)
const app = express();

//Import data.js file
const products = require("./data");

//App will now accept json objects (middleware)
app.use(express.json());

//Import routes file
const routes = require("./apis/products/routes");

//To allow app.js to use router
app.use("/api/products", routes);

//Database connection must be one line above app.listen()
connectDB();

//localhost.8000 (must always be at the very bottom)
app.listen(8000);

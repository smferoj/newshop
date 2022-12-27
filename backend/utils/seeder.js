const product = require("../models/product");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const products = require("../data/products");

// dotenv.config({path:'backend/config/config.env'})

dotenv.config({ path: "config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await product.deleteMany();
    console.log("Products are deleted");
    await product.insertMany(products);
    console.log("All Products are added");
    Process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();

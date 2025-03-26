const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define Product Schema (if not already defined)
const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  website: String,
});
const Product = mongoose.model("Product", ProductSchema);

// GET /products - Fetch all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
});

module.exports = router;

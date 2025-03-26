const express = require("express");
const router = express.Router();

// Sample Product Data (Replace with actual database logic)
const products = [
    { id: 1, name: "Product 1", price: 100, website: "Amazon" },
    { id: 2, name: "Product 2", price: 200, website: "Flipkart" },
];

// GET /products - Fetch all products
router.get("/", (req, res) => {
    res.json(products);
});

module.exports = router;

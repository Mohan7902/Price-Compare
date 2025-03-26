const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, url, platform, price } = req.body;
    const product = new Product({ name, url, platform, price });
    await product.save();
    res.status(201).json({ message: 'Product saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving product' });
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching products' });
  }
});

module.exports = router; // ✅ Ensure the router is properly exported

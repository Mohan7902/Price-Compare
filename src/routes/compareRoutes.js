const express = require('express');
const { scrapeAmazon, scrapeFlipkart, scrapeEbay } = require('../services/scraperService');

const router = express.Router();

router.get('/', async (req, res) => {
  const { amazonURL, flipkartURL, ebayURL } = req.query;

  if (!amazonURL || !flipkartURL || !ebayURL) {
    return res.status(400).json({ error: 'Provide valid product URLs' });
  }

  const amazonPrice = await scrapeAmazon(amazonURL);
  const flipkartPrice = await scrapeFlipkart(flipkartURL);
  const ebayPrice = await scrapeEbay(ebayURL);

  res.json({ amazon: amazonPrice, flipkart: flipkartPrice, ebay: ebayPrice });
});

module.exports = router; // ✅ Make sure only the router is exported

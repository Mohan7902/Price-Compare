const { scrapeAmazon } = require('../scrapers/amazonScraper');

const getAmazonPrice = async (req, res) => {
    const { url } = req.query;
    if (!url) {
        return res.status(400).json({ error: 'Product URL is required' });
    }

    const price = await scrapeAmazon(url);
    res.json({ amazonPrice: price });
};

module.exports = { getAmazonPrice };

const express = require('express');
const { getAmazonPrice } = require('../controllers/scraperController');

const router = express.Router();

router.get('/amazon-price', getAmazonPrice);

module.exports = router;

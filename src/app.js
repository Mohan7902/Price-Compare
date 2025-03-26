const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Ensure routes are imported correctly
const compareRoutes = require('./routes/compareRoutes');
const productRoutes = require('./routes/productRoutes');

// ✅ Use the routes properly
app.use('/compare', compareRoutes);
app.use('/products', productRoutes);

module.exports = app;

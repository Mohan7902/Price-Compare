require('dotenv').config();  // ✅ Load environment variables
console.log("🟢 MONGO_URI:", process.env.MONGO_URI); // Debugging

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
const connectDB = async () => {
  try {
    console.log("🔄 Connecting to MongoDB with URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);

    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

app.get('/test-db', async (req, res) => {
    try {
        const result = await mongoose.connection.db.admin().ping();
        res.json({ message: 'MongoDB Connected Successfully', result });
    } catch (error) {
        res.status(500).json({ message: 'MongoDB Connection Failed', error });
    }
});

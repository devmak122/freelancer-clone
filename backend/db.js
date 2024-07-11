const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load config
dotenv.config();

const mongoURL = process.env.MONGO_URI;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (e) {
    console.log("Failed to connect to MongoDB Atlas", e.message);
  }
};

module.exports = connectToMongo;

const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');

// Load config
dotenv.config();

// Connect to MongoDB
connectToMongo();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Clone listening at http://localhost:${port}`);
});


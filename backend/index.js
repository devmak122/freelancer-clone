const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

connectToMongo();

const app = express();
const port = process.env.PORT || 8000;

// Configure CORS to allow requests from your frontend
app.use(cors({
  origin: 'https://freelancer-clone-lake.vercel.app',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, auth-token',
}));

app.use(express.json());

// Test middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/api/auth', require('./routes/auth'));

app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(port, () => {
  console.log(`Clone listening at http://localhost:${port}`);
});

const express = require('express');
const connectToMongo = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

connectToMongo();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'auth-token'],
  credentials: true,
}));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

app.use((req, res, next) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(port, () => {
  console.log(`Clone listening at http://localhost:${port}`);
});

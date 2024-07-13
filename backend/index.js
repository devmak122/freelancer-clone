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

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Clone listening at http://localhost:${port}`);
});

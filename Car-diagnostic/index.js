import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import fetch from 'node-fetch';
const { Pool } = pkg;

const app = express();
app.use(express.json());

// ✅ Allow requests from any origin (fixes CORS)
app.use(cors());

// ✅ Serve frontend automatically
app.use(express.static('public'));

// ✅ PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'car_diagnostic',
  password: 'postgres', // change to your DB password
  const port = 5000; // change from 3000

  port: 5432,
});

// Example health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API running 🚗' });
});

// Example cars endpoint
app.get('/api/cars', async (req, res) => {
  const result = await pool.query('SELECT * FROM cars');
  res.json(result.rows);
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Car Diagnostic app running at http://localhost:${PORT}`);
});

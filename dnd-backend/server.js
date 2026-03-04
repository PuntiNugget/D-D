// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Allows us to parse JSON data from React

// Connect to Render PostgreSQL Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false // Render requires this for secure connections
  }
});

// --- ROUTES ---

// 1. D&D Database (Example: Fetch all official spells/monsters)
app.get('/api/database', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM dnd_database');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// 2. Character Creator (Save a new character)
app.post('/api/characters', async (req, res) => {
  try {
    const { name, race, charClass, strength, dexterity } = req.body;
    const newChar = await pool.query(
      'INSERT INTO characters (name, race, class, strength, dexterity) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, race, charClass, strength, dexterity]
    );
    res.json(newChar.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// 3. Homebrew (Save a custom item)
app.post('/api/homebrew', async (req, res) => {
  try {
    const { title, category, description, stats } = req.body;
    const newItem = await pool.query(
      'INSERT INTO homebrew (title, category, description, stats) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, category, description, stats]
    );
    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Tavern doors are open on port ${PORT}`);
});

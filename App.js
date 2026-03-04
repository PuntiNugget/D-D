// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Database from './Database';
import CharacterCreator from './CharacterCreator';
import Homebrew from './Homebrew';
import './App.css'; // Add some basic styling here later

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav style={{ padding: '1rem', background: '#2c3e50', color: 'white' }}>
          <h2>D&D Tavern</h2>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li><Link to="/" style={{ color: 'white' }}>Database</Link></li>
            <li><Link to="/creator" style={{ color: 'white' }}>Character Creator</Link></li>
            <li><Link to="/homebrew" style={{ color: 'white' }}>Homebrew</Link></li>
          </ul>
        </nav>

        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Database />} />
            <Route path="/creator" element={<CharacterCreator />} />
            <Route path="/homebrew" element={<Homebrew />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

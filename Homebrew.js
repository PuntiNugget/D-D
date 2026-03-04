// src/Homebrew.js
import React, { useState } from 'react';

function Homebrew() {
  const [homebrewItem, setHomebrewItem] = useState({
    title: '',
    category: 'Magic Item',
    description: '',
    stats: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Homebrew to database:", homebrewItem);
    alert(`${homebrewItem.title} added to your Homebrew collection!`);
  };

  return (
    <div>
      <h2>Homebrew Workshop</h2>
      <p>Create your own custom spells, monsters, or items here.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
        <input 
          type="text" 
          placeholder="Creation Title (e.g., Sword of A Thousand Truths)" 
          onChange={(e) => setHomebrewItem({...homebrewItem, title: e.target.value})}
          required
        />
        
        <select onChange={(e) => setHomebrewItem({...homebrewItem, category: e.target.value})}>
          <option value="Magic Item">Magic Item</option>
          <option value="Custom Spell">Custom Spell</option>
          <option value="Homebrew Monster">Homebrew Monster</option>
        </select>

        <textarea 
          placeholder="Description & Lore..." 
          rows="4"
          onChange={(e) => setHomebrewItem({...homebrewItem, description: e.target.value})}
        />

        <textarea 
          placeholder="Mechanical Stats (e.g., 2d6 Slashing, +1 to hit)..." 
          rows="3"
          onChange={(e) => setHomebrewItem({...homebrewItem, stats: e.target.value})}
        />

        <button type="submit" style={{ padding: '0.5rem', background: '#8e44ad', color: 'white', border: 'none' }}>
          Publish to Homebrew
        </button>
      </form>
    </div>
  );
}

export default Homebrew;

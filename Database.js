// src/Database.js
import React, { useState } from 'react';

function Database() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock Database - later replace with fetch('https://www.dnd5eapi.co/api/spells')
  const mockDb = [
    { id: 1, name: "Fireball", type: "Spell", desc: "A bright streak flashes..." },
    { id: 2, name: "Goblin", type: "Monster", desc: "Small humanoid..." },
    { id: 3, name: "Longsword", type: "Item", desc: "Melee weapon (martial)..." }
  ];

  const filteredResults = mockDb.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>D&D 5e Database</h2>
      <input 
        type="text" 
        placeholder="Search for spells, monsters, items..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', width: '300px', marginBottom: '1rem' }}
      />
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredResults.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px' }}>
            <h3>{item.name} <span style={{ fontSize: '0.8rem', color: '#666' }}>({item.type})</span></h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Database;

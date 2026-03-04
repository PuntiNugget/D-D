// src/CharacterCreator.js
import React, { useState } from 'react';

function CharacterCreator() {
  const [character, setCharacter] = useState({
    name: '',
    race: 'Human',
    charClass: 'Fighter',
    strength: 10,
    dexterity: 10
  });

  const handleChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Character ${character.name} the ${character.race} ${character.charClass} saved!`);
    // Here you would eventually POST to your backend database
  };

  return (
    <div>
      <h2>Character Forge</h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        
        <label>Character Name:
          <input type="text" name="name" onChange={handleChange} required />
        </label>

        <label>Race:
          <select name="race" onChange={handleChange}>
            <option value="Human">Human</option>
            <option value="Elf">Elf</option>
            <option value="Dwarf">Dwarf</option>
          </select>
        </label>

        <label>Class:
          <select name="charClass" onChange={handleChange}>
            <option value="Fighter">Fighter</option>
            <option value="Wizard">Wizard</option>
            <option value="Rogue">Rogue</option>
          </select>
        </label>

        <label>Strength:
          <input type="number" name="strength" value={character.strength} onChange={handleChange} min="1" max="20" />
        </label>

        <label>Dexterity:
          <input type="number" name="dexterity" value={character.dexterity} onChange={handleChange} min="1" max="20" />
        </label>

        <button type="submit" style={{ padding: '0.5rem', background: '#4CAF50', color: 'white', border: 'none' }}>
          Save Character
        </button>
      </form>
    </div>
  );
}

export default CharacterCreator;

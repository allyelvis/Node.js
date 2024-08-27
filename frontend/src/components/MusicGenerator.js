import React, { useState } from 'react';

function MusicGenerator() {
  const [musicText, setMusicText] = useState('');

  const handleGenerateMusic = () => {
    // Logic to generate music
    alert(`Generating music from text: ${musicText}`);
  };

  return (
    <div>
      <h1>Music Generator</h1>
      <textarea 
        value={musicText} 
        onChange={(e) => setMusicText(e.target.value)} 
        placeholder="Enter text to generate music" 
      />
      <button onClick={handleGenerateMusic}>Generate Music</button>
    </div>
  );
}

export default MusicGenerator;

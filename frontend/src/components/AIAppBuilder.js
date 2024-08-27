import React, { useState } from 'react';

function AIAppBuilder() {
  const [appName, setAppName] = useState('');
  
  const handleBuildApp = () => {
    // Logic to build app
    alert(`Building app: ${appName}`);
  };

  return (
    <div>
      <h1>AI App Builder</h1>
      <input 
        type="text" 
        value={appName} 
        onChange={(e) => setAppName(e.target.value)} 
        placeholder="Enter app name" 
      />
      <button onClick={handleBuildApp}>Build App</button>
    </div>
  );
}

export default AIAppBuilder;

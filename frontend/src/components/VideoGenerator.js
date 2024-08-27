import React, { useState } from 'react';

function VideoGenerator() {
  const [videoText, setVideoText] = useState('');

  const handleGenerateVideo = () => {
    // Logic to generate video
    alert(`Generating video from text: ${videoText}`);
  };

  return (
    <div>
      <h1>Video Generator</h1>
      <textarea 
        value={videoText} 
        onChange={(e) => setVideoText(e.target.value)} 
        placeholder="Enter text to generate video" 
      />
      <button onClick={handleGenerateVideo}>Generate Video</button>
    </div>
  );
}

export default VideoGenerator;

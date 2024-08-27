import React, { useState } from 'react';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSendMessage = () => {
    // Logic to send message to chatbot and get a response
    setResponse(`You said: ${message}`);
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Type your message" 
      />
      <button onClick={handleSendMessage}>Send</button>
      <div>
        <h2>Chatbot Response</h2>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default Chatbot;

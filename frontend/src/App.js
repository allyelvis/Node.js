import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AIAppBuilder from './components/AIAppBuilder';
import VideoGenerator from './components/VideoGenerator';
import MusicGenerator from './components/MusicGenerator';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/app-builder" component={AIAppBuilder} />
          <Route path="/video-generator" component={VideoGenerator} />
          <Route path="/music-generator" component={MusicGenerator} />
          <Route path="/chatbot" component={Chatbot} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

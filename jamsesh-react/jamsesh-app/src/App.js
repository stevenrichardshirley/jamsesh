import React, { Component } from 'react';

import './App.css';
import FrameOutline from './frame/frame.js';
import HomeAnimation from './home/home.js';
import InstrumentsSelector from './instruments/instruments.js';
import MusiciansBrowser from './musicians/musicians.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <FrameOutline> 
          <Router>
              <div>
                <Route path="/home" component={HomeAnimation} />
                <Route path="/instruments" component={InstrumentsSelector} />
                <Route path="/musicians" component={MusiciansBrowser} />
              </div>
            </Router>
        </FrameOutline>
      </div>
    );
  }
}

export default App;

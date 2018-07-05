import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FrameOutline from './frame.js';
import HomeAnimation from './home.js';
import InstrumentsSelector from './instruments.js';
import MusiciansBrowser from './musicians.js';
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

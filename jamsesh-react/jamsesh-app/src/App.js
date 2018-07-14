import React, { Component } from 'react';

import './App.css';
import FrameOutline from './frame/frame.js';
import home from './home/home.js';
import instruments from './instruments/instruments.js';
import musicians from './musicians/musicians.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <FrameOutline>
          <Router>
              <div>
                <Route path="/home" component={home} />
                <Route path="/instruments" component={instruments} />
                <Route path="/musicians" component={musicians} />
              </div>
            </Router>
        </FrameOutline>
      </div>
    );
  }
}

export default App;

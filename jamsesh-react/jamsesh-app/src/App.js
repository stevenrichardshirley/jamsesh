import React, { Component } from 'react';

import './App.css';
import FrameOutline from './frame/frame.js';
import Home from './home/home.js';
import Instruments from './instruments/instruments.js';
import Musicians from './musicians/musicians.js';
import Jumbotron from "./components/Jumbotron/Jumbotron.js";
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
                <Route path="/home" component={Home} />
                <Route path="/instruments" component={Instruments} />
                <Route path="/musicians" component={Musicians} />
              </div>
            </Router>
        </FrameOutline>
      </div>
    );
  }
}

export default App;

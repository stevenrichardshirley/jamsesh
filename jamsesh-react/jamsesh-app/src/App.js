import React, { Component } from 'react';

import './App.css';
import Frame from './frame/frame.js';
import Home from './home/home.js';
import Instruments from './instruments/instruments.js';
import Musicians from './musicians/musicians.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Frame>
          <Router>
              <div>
                <Route path="/home" component={Home} />
                <Route path="/instruments" component={Instruments} />
                <Route path="/musicians" component={Musicians} />
              </div>
            </Router>
        </Frame>
      </div>
    );
  }
}

export default App;

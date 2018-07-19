import React, { Component } from 'react';

import './App.css';
import Frame from './frame/frame.js';
import Home from './home/home.js';
import Instruments from './instruments/instruments.js';
import Musicians from './musicians/musicians.js';
import MusiciansBass from './musiciansbass/musicians.js';
import MusiciansGuitar from './musiciansguitar/musicians.js';
import MusiciansKeyboard from './musicianskeyboard/musicians.js';
import MusiciansDrums from './musiciansdrums/musicians.js';
import MusiciansMic from './musiciansmic/musicians.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from './components/Card/card.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Frame>
          <Router>
              <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/instruments" component={Instruments} />
                <Route exact path="/musicians" component={Musicians} />
                <Route exact path="/musicians/bass" component={MusiciansBass} />
                <Route exact path="/musicians/guitar" component={MusiciansGuitar} />
                <Route exact path="/musicians/drums" component={MusiciansDrums} />
                <Route exact path="/musicians/keyboard" component={MusiciansKeyboard} />
                <Route exact path="/musicians/mic" component={MusiciansMic} />
                <Route exact path="/api" component={Card} />
      </div>
            </Router>
        </Frame>
      </div>
    );
  }
}

export default App;
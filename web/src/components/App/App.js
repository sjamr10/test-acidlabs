import React, { Component } from 'react';
import './App.css';
import Map from '../Map/Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Acid Labs Test
        </header>
        <Map />
      </div>
    );
  }
}

export default App;

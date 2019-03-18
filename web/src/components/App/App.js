import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';
import './App.css';
import Map from '../Map/Map.js';

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Map />
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state
  }), 
  dispatch => ({
    simpleAction: () => dispatch(simpleAction())
 }))(App);

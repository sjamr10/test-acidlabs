import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';
import './App.css';

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }

  render() {
    return (
      <div className="App">
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <header className="App-header">
          <button onClick={this.simpleAction}>Test redux action</button>
        </header>
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

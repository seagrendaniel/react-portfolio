import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <div className="intro-header">
        <h1>
          Dan Seagren
        </h1>
        <h4> Full Stack Engineer </h4>
      </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daniel Seagren
        </a>
        </header>
      </div>
      </>
    );
  }
}

export default App;

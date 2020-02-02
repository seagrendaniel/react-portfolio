import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <div className="intro-header">
        <h2>
          Dan Seagren
        </h2>
        <h4> Full Stack Engineer </h4>
      </div>
      <div className="App">
        <header className="App-header">
          {/* <img className="App-logo" alt="logo" /> */}
        <p>
            Edit <code>src/App.js</code> and save application to reload.
        </p>
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

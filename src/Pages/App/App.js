import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  /* --- Lifecycle Methods --- */

  async componentDidMount() {
    
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header fade-in">
            <div className="intro-header">
              <h1>
                Dan Seagren
              </h1>
              <h4> Full Stack Engineer </h4>
            </div>
          </header>
          <div className="projects fade-in">
            <h3 className="project-header"> My Projects </h3>
            <ul className="project-list">
              <li>
                <a 
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Da Best Calc
                </a>
              </li>
              <li>
                <a 
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S & S Farms
                </a>
              </li>
              <li>
                <a 
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pick Up Games (P.U.G.S)
                </a>
              </li>
              <li>
                <a 
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fantasy Football Stat Tracker
                </a>
              </li>

              <li>
                <a
                  href="https://summerboard.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Summerboard - The World's First eSnowboard
                </a>
              </li>

            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default App;



{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Daniel Seagren
</a> */}

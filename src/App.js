import React, { Component, Fragment }from 'react';
import './App.css';
import Canvas from './canvas'
import Draw from './draw'

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Fragment>
            <h3 style={{ textAlign: 'center' }}>Canvas</h3>
            <div className="main">
              <Canvas/>
              <Draw/>
            </div>
          </Fragment>
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="App-header">
          <NavBar/>
          <h1 id = "Home-Page-Header">
            Norse Gods 
          </h1> 
        </div>
      </div>
    );
  }
}

export default App;

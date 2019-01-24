import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import {BrowserRouter, Route} from 'react-router-dom'
import Create from './Create';
import Search from './Search';
import Update from './Update';
import Delete from './Delete';

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

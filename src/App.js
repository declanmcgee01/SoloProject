import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import {BrowserRouter, Route} from 'react-router-dom'
import Create from './Create';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Route path='/create' component={Create} />
          <h1 id = "Home-Page-Header">
            Norse Gods 
          </h1> 
          <body>
            <input type="text" placeholder="Search Gods.." name="search" id = "Search-Bar"></input>
          </body>
        </header>
        <body>
        </body>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

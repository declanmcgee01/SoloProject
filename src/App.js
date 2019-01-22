import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <h1 id = "Home-Page-Header">
            Norse Gods 
          </h1> 
          <body>
            <input type="text" placeholder="Search Gods.." name="search" id = "Search-Bar"></input>
            <p id="God-Information">
            Name: Odin
            <br></br>
            <br></br>
            Other Names: Allfather
            <br></br>
            <br></br>
            God Of: Wisdompoetry, War, Death, Divination and Magic
            <br></br>
            <br></br>
            Children: Thor, Baldr, Víðarr and Váli
            <br></br>
            <br></br>
            Description: Son of Bor and the giantess (jötunn) Bestla, Odin is the chief of the Æsir and the king of Asgard.
            </p>
          </body>
        </header>
        <body>
        </body>
      </div>
    );
  }
}

export default App;

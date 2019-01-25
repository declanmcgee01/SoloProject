import React, { Component } from 'react';
import './NavBar.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Create from './Create';
import Search from './Search';
import Update from './Update';
import Delete from './Delete';
import Home from './Home';


class NavBar extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
            <div className = "NavBar">
                    <div className="sidenav">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/create">Create</Link></li>
                        <li><Link to="/update">Update</Link></li>
                        <li><Link to="/delete">Delete</Link></li>
                    </div>
            </div>
          <Route exact path='/home' component={Home}/>
          <Route path='/search' component={Search}/>
          <Route path='/create' component={Create}/>
          <Route path='/update' component={Update}/>
          <Route path='/delete' component={Delete}/>
          </div>
          </BrowserRouter>
          
    
        );
    }
}
export default NavBar;
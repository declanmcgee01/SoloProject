import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
    render(){
        return(
            <div className = "NavBar">
                <header className = "NavBar-header">
                    <body>
                    <div class="sidenav">
                        <li><a href="/">Search</a></li>
                        <li><a href="/create">Create</a></li>
                        <li><a href="/update">Update</a></li>
                        <li><a href="/delete">Delete</a></li>
                    </div>
                    </body>
                </header>
            </div>
    
        );
    }
}
export default NavBar;
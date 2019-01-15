import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
    render(){
        return(
            <div className = "NavBar">
                <header className = "NavBar-header">
                    <body>
                    <div class="sidenav">
                        <a href="#Search">Search</a>
                        <a href="#Create">Create</a>
                        <a href="#Update">Update</a>
                        <a href="#Delete">Delete</a>
                    </div>
                    </body>
                </header>
            </div>
    
        );
    }
}
export default NavBar;
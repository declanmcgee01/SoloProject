import React, { Component } from 'react';


class Search extends Component {
    render(){
        return(
            <div className = "Search">
                <div className = "Search-header">
                    <form>
                    <br></br>
                    <input type="text" placeholder="Search Gods.." name="search" id = "Search-Bar"></input>
                    <input type="submit" value="Submit" onSubmit={this.update}></input>
                    </form>
                </div>
            </div>
        );
    }
}
export default Search;
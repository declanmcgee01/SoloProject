import React, { Component } from 'react';


class Delete extends Component {
    render(){
        return(
            <div className = "Delete">
                <div className = "Delete-header">
                    <form>
                    <br></br>
                    <input type="text" placeholder="Delete God.." name="Delete" id = "Delete-Bar"></input>
                    <input type="submit" value="Submit" onSubmit={this.update}></input>
                    </form>
                </div>
            </div>
        );
    }
}
export default Delete;
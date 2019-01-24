import React, { Component } from 'react';


class Update extends Component {
    render(){
        return(
            <div className = "Update">
                <form className = "Update-Form">
                    <br></br>
                    <input type="text" placeholder="Name" name="Name" id = "Name-Field"></input>
                    <br></br>
                    <input type="text" placeholder="God Of" name="God Of" id = "GodOf-Field"></input>
                    <br></br>
                    <input type="text" placeholder="Children" name="Children" id = "Children-Field"></input>
                    <br></br>
                    <input type="text" placeholder="Powers" name="Powers" id = "Powers-Field"></input>
                    <br></br>
                    <input type="submit" value="Submit" onSubmit={this.update}></input>
                </form>
            </div>
    
        );
    }
}
export default Update;
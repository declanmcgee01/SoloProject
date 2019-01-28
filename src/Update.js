import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {

    constructor() {
        super();
        this.state = {
            godID: "",
            name: "",
            godOf: "",
            children: "",
            powers: ""
        };
    }

    handleInputID = (event) => {
        this.setState({godID:event.target.value});
    }

    handleInputName = (event) => {
        this.setState({name:event.target.value});
    }

     handleInputGodOf = (event) => {
        this.setState({godOf:event.target.value});
    }

    handleInputChildren = (event) => {
        this.setState({children:event.target.value});
    }

    handleInputPowers = (event) => {
        this.setState({powers:event.target.value});
    }

     update = (event) =>{
        axios({
            method:'put',
            url: 'http://localhost:8081/Solo-Project/api/god/updateGod/' + this.state.godID,
            data: {
                godID: this.state.godID,
                name: this.state.name,
                godOf: this.state.godOf,
                children: this.state.children,
                powers:this.state.powers
            }
        });
    }
 
    render(){
        return(
            <div className = "Create">
                <form className = "Create-Form">
                    <input type="text" placeholder="ID" value={this.state.godID} onChange={(this.handleInputID)}></input>
                    <br></br>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={(this.handleInputName)}></input>
                    <br></br>
                    <input type="text" placeholder="God Of" value={this.state.godOf} onChange={(this.handleInputGodOf)}></input>
                    <br></br>
                    <input type="text" placeholder="Children" value={this.state.children} onChange={(this.handleInputChildren)}></input>
                    <br></br>
                    <input type="text" placeholder="Powers" value={this.state.powers} onChange={(this.handleInputPowers)}></input>
                    <br></br>
                    <input type="button" value="Create" onClick={this.update}></input>
                </form>
            </div>
    
        );
    }
}
export default Update;
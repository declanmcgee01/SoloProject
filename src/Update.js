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
            powers: "",
            godImage:""
        };
        this.update = this.update.bind(this);
        this.handleInputID = this.handleInputID.bind(this);
        this.handleInputName = this.handleInputName.bind(this);
        this.handleInputGodOf = this.handleInputGodOf.bind(this);
        this.handleInputChildren = this.handleInputChildren.bind(this);
        this.handleInputPowers = this.handleInputPowers.bind(this);
        this.handleInputGodImage = this.handleInputGodImage.bind(this);
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

    handleInputGodImage = (event) => {
        this.setState({godImage:event.target.value});
    }

     update = (event) =>{
        axios({
            method:'put',
            url: 'http://localhost:8081/Solo-Project/api/god/updateGod/' + this.state.godID,
            data: {
                name: this.state.name,
                godOf: this.state.godOf,
                children: this.state.children,
                powers:this.state.powers,
                godImage: this.state.godImage
            }
        });
    }
 
    render(){
        return(
            <div className = "Update">
                <form className = "Update-Form">
                    <input type="text" placeholder="ID to Update" value={this.state.godID} onChange={(this.handleInputID)}></input>
                    <br></br>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={(this.handleInputName)}></input>
                    <br></br>
                    <input type="text" placeholder="God Of" value={this.state.godOf} onChange={(this.handleInputGodOf)}></input>
                    <br></br>
                    <input type="text" placeholder="Children" value={this.state.children} onChange={(this.handleInputChildren)}></input>
                    <br></br>
                    <input type="text" placeholder="Powers" value={this.state.powers} onChange={(this.handleInputPowers)}></input>
                    <br></br>
                    <input type="text" placeholder="URL Image" value={this.state.godImage} onChange={(this.handleInputGodImage)}></input>
                    <br></br>
                    <input type="button" value="Update" onClick={this.update} id = "update-button"></input>
                </form>
            </div>
    
        );
    }
}
export default Update;
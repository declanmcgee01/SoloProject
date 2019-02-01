import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            godType: ""
           
        };
        this.update = this.update.bind(this);
        this.handleInputUserName = this.handleInputUserName.bind(this);
        this.handleInputgodType = this.handleInputGodType.bind(this);

    }

    handleInputUserName = (event) => {
        this.setState({username:event.target.value});
    }

    handleInputGodType = (event) => {
        this.setState({godType:event.target.value});
    }

     update = (event) =>{
        axios({
            method:'post',
            url: 'http://localhost:8081/Solo-Project/api/user/createUser',
            data: {
                username: this.state.username,
                godType: this.state.godType,
            }
        });
    }
 
    render(){
        return(
            <div className = "CreateUser">
                <form className = "CreateUser-Form">
                    <br></br>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={(this.handleInputUserName)}></input>
                    <br></br>
                    <input type="text" placeholder="Favourite God Race" value={this.state.godType} onChange={(this.handleInputGodType)}></input>
                    <br></br>
                    <input type="button" value="Create" onClick={this.update} id = "CreateUser-Button"></input>
                </form>
            </div>
    
        );
    }
}
export default CreateUser;
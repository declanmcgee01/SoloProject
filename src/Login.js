import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
           
        };
        this.update = this.update.bind(this);
        this.handleInputUserName = this.handleInputUserName.bind(this);
        this.handleInputPassword = this.handleInputPassword.bind(this);

    }

    handleInputUserName = (event) => {
        this.setState({username:event.target.value});
    }

    handleInputPassword = (event) => {
        this.setState({password:event.target.value});
    }

     update = (event) =>{
        axios({
            method:'post',
            url: 'http://localhost:8081/Solo-Project/api/user/createUser',
            data: {
                username: this.state.username,
                password: this.state.password
            }
        });
    }
 
    render(){
        return(
            <div className = "Login">
                <form className = "Login-Form">
                    <br></br>
                    <input type="text" placeholder="Username" value={this.state.username} onChange={(this.handleInputUserName)}></input>
                    <br></br>
                    <input type="text" placeholder="Password" value={this.state.password} onChange={(this.handleInputPassword)}></input>
                    <br></br>
                    <input type="button" value="Login" onClick={this.update} id = "Login-Button"></input>
                </form>
            </div>
    
        );
    }
}
export default Login;
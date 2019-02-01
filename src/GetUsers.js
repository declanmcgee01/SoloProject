import React, { Component } from 'react';
import axios from 'axios';
import User from './User.js';


class GetUsers extends Component {

    constructor(){
        super();
        this.state = {
            users:""
        }
    }

    update = (event) =>{
        axios({
            method: 'get',
            url: 'http://localhost:8081/Solo-Project/api/user/getAllUsers',
            responseType: 'json'
        }).then(response =>{
            this.setState({users:response.data});
            console.log(response.data);
        })
    }
    render(){
        let godUsers = [];
        if(this.state.users){
            for(let user of this.state.users)
                godUsers.push(<User data = {user}/>);
        }
        return(
            <div className = "Home">
            <form onSubmit={this.update}>
                    <input type="button" value = "Get all Users" id = "GetUsers-Button" onClick= {this.update} ></input>
                {godUsers}
            </form>
            </div>
        );
    }
}
export default GetUsers;
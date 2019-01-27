import React, { Component } from 'react';
import axios from 'axios';
import God from './God.js';


class Search extends Component {

    constructor(){
        super();
        this.state = {
            gods: "",
            godID: "",
            name: "",
            godOf: "",
            children: "",
            powers: ""
        }
        this.update = this.update.bind(this);
        this.handleInputID = this.handleInputID.bind(this);
    }

    handleInputID(event){
        this.setState({godID:event.target.value}, () => {
        });

    }

    update = (event) =>{
        axios({
            method:'get',
            url: 'http://localhost:8081/Solo-Project/api/god/findGod/' + this.state.godID,
            responseType: 'json'
        }).then(response =>{
            this.setState({godID:response.data.godID});
            this.setState({name:response.data.name});
            this.setState({godOf:response.data.godOf});
            this.setState({children:response.data.children});
            this.setState({powers:response.data.powers});
            console.log(response.data);
        })
    }
    render(){
        let norseGods = [];
        if(this.state.gods){
            for(let god of this.state.gods){
                norseGods.push(<God data = {god}/>);
            }
        }
        return(
            <div className = "Search">
            <form onSubmit={this.update}>
                    God : 
                    <input id="text" type="text" onChange={(this.handleInputID)}></input>
                    <input type="button" onClick = {this.update} value = "Find God"></input>
            </form>
                    Name : {this.state.name}
                    <br></br>
                    God Of : {this.state.godOf}
                    <br></br>
                    Children : {this.state.children}
                    <br></br>
                    Powers : {this.state.powers}
            </div>
        );
    }
}
export default Search;
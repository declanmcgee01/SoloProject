import React, { Component } from 'react';
import axios from 'axios';
import God from './God.js';


class Search extends Component {

    constructor(){
        super();
        this.state = {
            gods: '',
            godID: ''
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
            this.setState({gods:response.data.Search});
            console.log(response.data);
        })
    }
    render(){
        let norseGods = [];
        if(this.state.gods){
            for(let god of this.state.gods){
                norseGods.push(<God data = {god}/>);
            }
            console.log(norseGods);
        }
        return(
            <div className = "Search">
            <form onSubmit={this.update}>
            <label>
                    God:
                    <input id="text" type="text" onChange={(this.handleInputID)}></input>
            <input type="button" onClick = {this.update} value = "Find God"></input>
            </label><br>
            </br>
            </form> 
            <p>
                {norseGods.name}
            </p>
            </div>
        );
    }
}
export default Search;
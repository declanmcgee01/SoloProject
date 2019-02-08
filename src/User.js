import React, { Component } from 'react';
import './App.css';


class User extends Component {

  render() {
    return (
      <div className="user">
        <p>userID: {this.props.data.userID}</p>
        <p>username: {this.props.data.username}</p>
        <p>password: {this.props.data.password}</p>
      </div>
    );
  }
}

export default User;
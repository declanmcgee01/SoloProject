import React, { Component } from 'react';
import './App.css';


class God extends Component {

  render() {
    return (
      <div className="god">
        <p>godID: {this.props.data.godID}</p>
        <p>name: {this.props.data.name}</p>
      </div>
    );
  }
}

export default God;
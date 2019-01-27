import React, { Component } from 'react';
import './App.css';


class God extends Component {

  render() {
    return (
      <div className="god">
        <p>godID: {this.props.data.godID}</p>
        <p>godName: {this.props.data.name}</p>
        <p>Children: {this.props.data.children}</p>
        <p>God Of: {this.props.data.godOf}</p>
        <p>Powers: {this.props.data.powers}</p>
      </div>
    );
  }
}

export default God;
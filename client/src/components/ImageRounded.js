import React, { Component } from 'react';
import '../App.css';

class ImageRounded extends Component {

  render() {
    console.log(this.state);
    return (
        <img src={this.props.img} className="ImageRounded"></img>
    );
  }
}

export default ImageRounded;

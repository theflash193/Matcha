import React, { Component } from 'react';
import '../App.css';
import ImageRounded from './ImageRounded';

class Contact extends Component {

  render() {
    console.log(this.state);
    return (
        <div className="">
            <ImageRounded img={this.props.img}></ImageRounded>
            <h4>{this.props.name}</h4>
        </div>
    );
  }
}

export default Contact;

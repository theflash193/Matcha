import React, { Component } from 'react';
import '../App.css';

class Comment extends Component {

  render() {
    console.log(this.state);
    return (
      <form className="Comment">
        <input className="text" type="text" placeholder="Your message" name="message"/>
        <button className="button">Login</button>
      </form>
    );
  }
}

export default Comment;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Connexion from './components/Connexion.js';
import Inscription from './components/Inscription.js';

class App extends Component {
  state = {users: []}

  componentDidMount() {
      // fetch('/users/id/:1')
      //   .then((response) => {console.log(response.json);return response.json})
      //   .then((result => console.log(result)));
      // fetch('/users/id/:1')
      //   .then((response) => {console.log(response.json);return response.json})
      //   .then((result => console.log(result)));
      console.log(navigator.geolocation);
        fetch('/users/id/:3', {
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          method: 'post',
          body: JSON.stringify({gender: "male", bio: "je suis englais", sexualInterest: "femelle", images: {1: "public/img/1.png"}, tags: {0: "#bio", 1: "#geek", 3: "piercing"}})
        })
        .then((response) => {console.log(response);return response.json})
        .then((result) => {console.log(result)})
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Users</h1>
        hello
        <Connexion />
        <Inscription />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

class Connexion extends Component {

  render() {
    console.log(this.state);
    return (
      <form>
        <label for="username">Username</label>
        <input type="text" placeholder="Votre Nom utilisateur" name="username"/>
        <label for="password">Password</label>
        <input type="password" placeholder="Votre mot de passe" name="password"/>
        <button >Login</button>
      </form>
    );
  }
}

export default Connexion;

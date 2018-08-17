// @flow strict

import * as React from 'react';

class Inscription extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { email: 'fejfn', username: 'gogo', name: 'fefe', firstname: 'fefe', password: 'fefee' };
    }
    state = {value: ''};

    ChangeEmail = (e) => {
        this.setState({...this.state, email: e.target.value});
    }
    ChangeUsername = (e) => {
        this.setState({...this.state, username: e.target.value});
    }
    ChangeName = (e) => {
        this.setState({...this.state, name: e.target.value});
    }
    ChangeFirstname = (e) => {
        this.setState({...this.state, firstname: e.target.value});
    }
    ChangePassword = (e) => {
        this.setState({...this.state, password: e.target.value});
    }

    validator = () => {
        if (this.state.email !== '' && this.state.username !== '' && this.state.name !== '' && this.state.firstname !== '' && this.state.password !== '')
            return (1);
        return (0);
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.validator() != 1)
            return ;
        fetch('/inscription', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
          },
          method: 'post',
          body: JSON.stringify(this.state)
        })
        .then((response) => {console.log(response);return response.json})
        // console.log('this is:', this);
        // this.setState({ email: '', username: '', name: '', firstname: '', password: '' });
      }
    render() {
        return (
            <form>
                <label for="email">Adresse mail</label>
                <input type="text" placeholder="Votre Adresse mail" name="email" value={this.state.email} onChange={(e) => this.ChangeEmail(e)}/>
                <label for="username">Nom utilisateur</label>
                <input type="text" placeholder="Votre nom utilisateur" name="username" onChange={(e) => this.ChangeUsername(e)} value={this.state.username}/>
                <label for="name">nom</label>
                <input type="text" placeholder="Votre nom" name="name" onChange={(e) => this.ChangeName(e)} value={this.state.name}/>
                <label for="firstname">prenom</label>
                <input type="text" placeholder="Votre prenom" name="firstname" value={this.state.firstname} onChange={(e) => this.ChangeFirstname(e)}/>
                <label for="password">mot de passe</label>
                <input type="password" placeholder="Votre Adresse mot de passe" name="password" value={this.state.password} onChange={(e) => this.ChangePassword(e)}/>
                <button onClick={(e) => {this.handleClick(e)}}>Inscription</button>
            </form>
        );
    }
}

export default Inscription;
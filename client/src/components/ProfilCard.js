// @flow strict

import * as React from 'react';
import '../App.css';

class ProfilCard extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        let myStyle = {
            width: "100%",
        }
        let small = {
            textAlign: "justify",
            margin: "0 5px 0 5px"
        }
        return (
            <div className="card">
                <img src={this.props.photo} style = {myStyle} className="card"></img>
                <h2>{this.props.name}, 42</h2>
                <h4>A propos de {this.props.name}</h4>
                <p style={small}><small>lorem eb dhede dnendjendjendje dedjendje dd eidned ne</small></p>   
            </div>
        );
    }
}

export default ProfilCard;
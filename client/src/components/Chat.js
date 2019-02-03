// @flow strict

import * as React from 'react';
import '../App.css';
import 'Message.js';
import Message from './Message';

class Chat extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        let p1 = this.props.commentaire;

        return (
            <div class={color}>
                {commentaire.forEach(element => {
                    let i = (element.p == 1) ? 1 : 2;

                    <Message message={element.message} img={element.img} direction={i}></Message>
                })}
            </div>
        );
    }
}

export default Message;
// @flow strict

import * as React from 'react';
import '../App.css';

class Message extends React.Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        let direction = (this.props.direction == 1) ? "msg-left" : "msg-right";
        let color = (this.props.direction == 1) ? "color1" : "color2";

        return (
            <div className={"msg-container " + direction}>
                <p className={"msg-message " + color}>{this.props.message}</p>
            </div>
        );
    }
}

export default Message;
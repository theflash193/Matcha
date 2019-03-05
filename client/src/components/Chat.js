// @flow strict

import * as React from 'react';
import '../App.css';
import Message from './Message';
import Comment from './Comment';
import ImageRounded from './ImageRounded';
import Contact from './Contact';

class Chat extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {message: [
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1},
            {name: "yuni", message: "lorefnrhnfrhnuhnrh fnrunfurnufrnfnrur ruffrhfurfhrfhrhr,", img:"https://via.placeholder.com/150", numero:2},
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1},
            {name: "yuni", message: "lorefnrhnfrhnuhnrh fnrunfurnufrnfnrur ruffrhfurfhrfhrhr,", img:"https://via.placeholder.com/150", numero:2},
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1},
            {name: "yuni", message: "lorefnrhnfrhnuhnrh fnrunfurnufrnfnrur ruffrhfurfhrfhrhr,", img:"https://via.placeholder.com/150", numero:2},
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1},
            {name: "yuni", message: "lorefnrhnfrhnuhnrh fnrunfurnufrnfnrur ruffrhfurfhrfhrhr,", img:"https://via.placeholder.com/150", numero:2},
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1},
            {name: "yuni", message: "lorefnrhnfrhnuhnrh fnrunfurnufrnfnrur ruffrhfurfhrfhrhr,", img:"https://via.placeholder.com/150", numero:2},
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1},
            {name: "yuni", message: "lorefnrhnfrhnuhnrh fnrunfurnufrnfnrur ruffrhfurfhrfhrhr,", img:"https://via.placeholder.com/150", numero:2},
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1},
            {name: "yuni", message: "lorefnrhnfrhnuhnrh fnrunfurnufrnfnrur ruffrhfurfhrfhrhr,", img:"https://via.placeholder.com/150", numero:2},
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1},
            {name: "yuni", message: "lorefnrhnfrhnuhnrh fnrunfurnufrnfnrur ruffrhfurfhrfhrhr,", img:"https://via.placeholder.com/150", numero:2},
            {name: "jack", message: "lore,", img:"https://via.placeholder.com/150", numero:1}],
            img: "https://via.placeholder.com/150"
        };

    }
    render() {
        console.log(this.state);
        return (
            <div className="chatContainer">
                <div className="chatContainer">
                    <Contact></Contact>
                </div>
                <div className="chatContainer">
                    <div className="chatHeader">
                        <ImageRounded img={this.state.img}></ImageRounded>
                    </div>
                    <div>
                    <div className="chatFeedMessage">
                    {
                        this.state.message.map(element => {
                            console.log(element);
                            return (
                                <Message img={element.img} message={element.message} direction={element.numero}></Message>

                            )
                        })
                    }
                    </div>
                        <div className="chatComment">
                            <Comment></Comment>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;
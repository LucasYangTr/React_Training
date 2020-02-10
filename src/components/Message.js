import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message: "Welcome Visitor 1",
        };
    }

    changeMessage(){
        this.setState({
            message: "You are good."
        });
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default Message
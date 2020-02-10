import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        const {name, career} = this.props;
        return (
            <h1>Class Component. Welcome {name} as {career}</h1>
        );
    }
}

export default Welcome
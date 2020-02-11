import React, {Component} from 'react'

class ClassClick extends Component{

    clickHandler(){
        console.log("Click on this class button");
    }

    render(){
        return (
            <div>
                <button onClick={this.clickHandler}>Click Button from Class</button>
            </div>
        );
    }
}

export default ClassClick
import React, { Component } from 'react'

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count:0
        };
    }

    increment(){
        // this.setState(   //two arguments
        //     {
        //     count: this.state.count + 1,
        //     },
        //     () =>{
        //         console.log('Callback value', this.state.count);
        //     }
        // );

        this.setState(
            preState => ({
                count: preState.count + 1,
            }),
            () =>{
                console.log('Callback value', this.state.count);
            }
        );

        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
        return (
            <div>
                Count - {this.state.count}
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        );
    }
}

export default Counter
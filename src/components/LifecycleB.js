import React, {Component} from 'react'

class LifecycleB extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: 'Lucas'
        }

        console.log("LifecycleB constructor");
    }

    static getDerivedStateFromProps(pros, state){
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount");
    }

    render(){
        console.log("LifecycleB render");
        return (
            <div>
               LifecycleB 
            </div>
        );
    }
}

export default LifecycleB
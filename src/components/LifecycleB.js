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

    shouldComponentUpdate(){
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleB getSnapshotBeforeUpdate"); 
        return null;  
    }

    componentDidUpdate(){
        console.log("LifecycleB componentDidUpdate");
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
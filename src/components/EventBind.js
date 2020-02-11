import React, { Component} from 'react'

class EventBind extends Component{

    constructor(props){
        super(props);
        this.state = {
            message: "Hello",
        }

        // this.handler = this.handler.bind(this);    {/* This is the third option */}
    }

    // handler(){        This is code for option 1 , 2, 3
    //     this.setState({
    //         message: "Good Click 2"
    //     });
    // }

    handler = () => {      {/* This is option 4 */}
        this.setState({
            message: "Good Click 3"
        });
    } 

    render() {
        return (
            <div>
                <div>{ this.state.message }</div>
                {/* <button onClick={ this.handler }>Click</button>  This is error way */}   
                {/* <button onClick={ this.handler.bind(this) }>Click</button>  {/* first option*/ } 
                {/* <button onClick={ () => this.handler() }>Click</button>    second option */}
                {/* <button onClick={ this.handler }>Click</button>    { /*  This is the third option*/}
                <button onClick={ this.handler }>Click</button>       {/* This is option 4 */}
            </div>
        );
    }
}

export default EventBind;
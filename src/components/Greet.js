import React from 'react'

// function Greet(){
//     return <h1>Hello Lucas</h1>;
// }

const Greet = (props) => {
    const {name, career} = props
    return (
        <div>
            <h1>Hello {name} is {career}</h1>
            {props.children}
        </div>
    );
};

export default Greet;

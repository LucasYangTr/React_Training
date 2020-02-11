import React from 'react'
import './myStyles.css'

function Stylesheet(props){

    let class_name = props.className ? "primary": "";

    return (
        <div>
            <h2 className={`${class_name} font-xl`}>Stylesheet</h2>
        </div>
    );
};

export default Stylesheet;
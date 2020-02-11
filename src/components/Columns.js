import React from 'react'

function Columns(){

    const items = [{
        id: 1,
        title: "senior software"
    }];

    return (
       <React.Fragment>
           {
               items.map( items => (
                   <React.Fragment key={items.id}>
                        <h1>Title2</h1>
                        <p>{items.title}</p>
                   </React.Fragment> 
               ))
           }
           <td>Name</td>
           <td>Lucas</td>
       </React.Fragment>
    );
};

export default Columns;
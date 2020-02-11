import React from 'react'
import Person from './Person'


function NameList(){

    const names = ["Kevin", "Mike", "Louisa"];

    const persons = [
        {
            id: 1,
            name: "Kevin",
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: "Mike",
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: "Louisa",
            age: 32,
            skill: 'C++'
        },
        {
            id: 4,
            name: "Unknown",
            age: 42,
            skill: 'Full stack'
        }
    ];


    const personList = persons.map( person => <Person key={person.id} person={person}/>);
    const nameList = names.map( ( name, index)  => <h2 key={index}>{index} is {name}</h2>);
    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    );

    //https://codepen.io/gopinav/pen/gQpepq
};

export default NameList;
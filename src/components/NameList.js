import React from 'react'
import Person from './Person'


function NameList(){

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
    return (
        <div>
            {personList}
        </div>
    );
};

export default NameList;
import React from 'react'
import Persions from './Persions'

function PersionList() {
    const persons = [
        {
            id: 1,
            name: 'Noyon',
            age: 27,
            skill: 'Programming'
        },
        {
            id: 2,
            name: 'Tithi',
            age: 26,
            skill: 'Nurseing'
        },
        {
            id: 3,
            name: 'Nihan',
            age: 1.5,
            skill: 'Playing'
        }
    ]
// const personList = persons.map(p => <h2>I am {p.name}. I am {p.age} years old. I know {p.skill}.</h2>)
const p_list = persons.map(p => <Persions key={p.id} persons={p}/>)
    return (
    <div>{p_list}</div>
    )
}

export default PersionList

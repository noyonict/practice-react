import React from 'react'

function NameList() {
    const name_list = ['Noyon', 'Tithi', 'Nihan']
const name_map = name_list.map((n, index) => <h3 key={index}>{index} {n}</h3>)
    return (
        <div>
            {
            name_list.map((name, index) => <h3 key={index}>{index}. {name}</h3>)
            }
            <div>{name_map}</div>
        </div>
    )
}

export default NameList

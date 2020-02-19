import React from 'react'

function ChildComponent(props){
        return (
            <div>
                <button onClick={() => props.showComponent('Child component arg')}>Child Button</button>
            </div>
        )

}

export default ChildComponent

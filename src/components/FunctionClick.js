import React from 'react'

export default function FunctionClick() {
    function ClickHandlar(){
        console.log('Click the Click Function Button')
    }
    return (
        <div>
            <button onClick={ClickHandlar}>Click Function</button>
        </div>
    )
}



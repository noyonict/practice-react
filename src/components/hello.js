import React from 'react'


const Hello = () => {
    // return(
    //     <div id='dummyId' className='dummyClass'>
    //         <h1>Hello Noyon From Hello Component</h1>
    //     </div>
    // )
    return React.createElement('div', {id: 'dummyId', className:'dummyClass'}, 
        React.createElement('h1', null, 'Hello noyon from hello component inside react class!'))
}


export default Hello;

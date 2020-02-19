import React from 'react'

// function Greet(){
//     return <h1>Hello Noyon</h1>
// }

export const Greet = ({name, heroName}) => {
    // const {name, heroName} = this.props
    // const {state1, state2} = this.state
    // console.log(props)
    return (
        <div>
            {/* <h1>Hello {props.name} a k a {props.heroName}</h1> */}
            <h1>Hello {name} a k a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
    
}

// export default Greet

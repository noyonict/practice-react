import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        // 1. If else option 
        // if (this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Noyon
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // Element Variable
        let message
        if (this.state.isLoggedIn){
            message = 'Welcome Noyon'
        }else{
            message = 'Welcome Guest'
        }
        return <div>{message}</div>

        // Ternary Conditional Operator
        // return this.state.isLoggedIn ? (
        //     <div>Hello Noyon!</div>
        // ) : (
        //     <div>Hello Guest!</div>
        // )

        // Short Circit Operator
        // return this.state.isLoggedIn && <div>Hello Noyon</div>
        
    }
}

export default UserGreeting

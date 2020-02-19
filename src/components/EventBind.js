import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        // For approach 2
        this.approach2Handlar = this.approach2Handlar.bind(this)
    }
    approach1Handlar(){
        this.setState({
            message: 'GoodBye! Approach 1'
        })
    }

    approach2Handlar(){
        this.setState({
            message: 'GoodBye! Approach 2'
        })
    }

    approach3Handlar(){
        this.setState({
            message: 'GoodBye! Approach 3'
        })
    }

    approach4Handlar = () => {
        this.setState({
            message: 'GoodBye! Approach 4'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.setState({message: 'Hello!'})}}>Click</button>
                <button onClick={this.approach1Handlar.bind(this)}>Approach 1</button> // x
                <button onClick={this.approach2Handlar}>Approach 2</button>  // **
                <button onClick={()=> this.approach3Handlar()}>Approach 3</button>  // ****
                <button onClick={this.approach4Handlar}>Approach 4</button> // ***** 
            </div>
        )
    }
}

export default EventBind

import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    setStateFunction(){
        console.log('Counter value +: ' + this.state.count)
    }
    increment(){
        // this.state.count = this.state.count + 1
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>this.setStateFunction())
        // console.log(this.state.count)
        this.setState((preState, props) => ({
            count: preState.count + 1
        }))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    decrement(){
        // this.state.count = this.state.count - 1
        this.setState({
            count: this.state.count - 1
        }, ()=>{console.log('Counter value -: ' + this.state.count)})
        console.log(this.state.count)
    }
    
    render() {
        return (
            <div>

                <h1>Count {this.state.count}</h1>
                <button onClick={()=>this.increment()}>Button +</button>
                <button onClick={()=>this.decrement()}>Button -</button>
                <button onClick={()=>this.incrementFive()}>Button +5</button>
            </div>
        )
    }
}

export default Counter

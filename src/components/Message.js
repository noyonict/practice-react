import React, {Component} from 'react'


class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor!',
            buttonTest: 'Subscribe',
            count: 1
        }
    }
    changeText(){
        if (this.state.count % 2 === 0){
            this.setState({
                message: 'Thank you for subscribing!',
                buttonTest: 'Unsubscribe',
                count: this.state.count + 1
            })
        }else{
            this.setState({
                message: 'Hello Visitor!',
                buttonTest: 'Subscribe',
                count: this.state.count + 1
            })
        }
        
    }
    render(){
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={()=> this.changeText()}>{this.state.buttonTest}</button>
            </div>
        )
    }
}

export default Message;

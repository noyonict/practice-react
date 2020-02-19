import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(){
        super()
        this.state = {
            componentName: 'Parent'
        }
        this.showComponent = this.showComponent.bind(this)
    }

    showComponent(str){
        alert(`Hello ${this.state.componentName}, ${str}`)
    }
    arrawShowComponent = (str) =>{
        alert(`Hello ${this.state.componentName}, ${str}`)
    }

    render() {
        return (
            <div>
                <ChildComponent showComponent={this.showComponent}/>
                <ChildComponent showComponent={this.showComponent}/>
            </div>
        )
    }
}

export default ParentComponent

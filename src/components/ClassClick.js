import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandlar(params) {
        console.log('Click by Class Button')
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandlar}>Class Button</button>
            </div>
        )
    }
}

export default ClassClick

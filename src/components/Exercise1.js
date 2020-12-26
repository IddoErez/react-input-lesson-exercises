import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }
    }
    updatedName = (event) => {
        this.setState({ name: event.target.value })
    }
    updatedAge = (event) => {
        this.setState({ age: event.target.value })
    }

    alert = () => {
        alert(`Come in ${this.state.name}, you're ${this.state.age} - that's good enough`)
    }
    render() {
        return (
            <div>
                <input id="name-input" type="text" value={this.state.name}
                    onChange={this.updatedName} />
                <input id="age-input" value={this.state.age}  onChange={this.updatedAge} />
                <button onClick={this.alert}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;
import React, { Component } from 'react';

class Exercise2 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            fruit: ""
        }
    }


    handleInputChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        }, function () {
            console.log(`${this.state.name} selected ${this.state.fruit}`)
        });
    }

    render() {
        return (
            <div>
                <input id="name-input" type="text" value={this.state.name}
                    onChange={this.handleInputChange} name="name" />
                <label for="fruits">Choose a fruit: </label>
                <select name="fruit" id="select-input" onChange={this.handleInputChange} value={this.state.fruit}>
                    <option value="Banana">Banana</option>
                    <option value="Apple">Apple</option>
                    <option value="Grapes">Grapes</option>
                    <option value="Watermelon">Watermelon</option>
                </select>
            </div>
        );
    }
}

export default Exercise2;
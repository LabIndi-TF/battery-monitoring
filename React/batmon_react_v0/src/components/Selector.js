import React, { Component } from'react';
import ChartComp from './ChartComp'

class Selector extends Component {
    constructor(){
        super()
        this.state ={
            device: 'Unit_A1'
        }
        
        this.changeName = this.changeName.bind(this);
    }

    changeName() {
        this.setState({
            device: String(document.getElementById("nama").value)
        })
        console.log('Device change!');
    }

    render() {
        return(
            <div>
                <h1>{this.state.device}</h1>
                {/*<button onClick={()=> this.changeResult()}>penced akuh</button>*/}
                <select id="nama" onChange={this.changeName}>
                    <option value="Unit_A1">Unit_A1</option>
                    <option value="Unit_A2">Unit_A2</option>
                    <option value="Unit_B1">Unit_B1</option>
                </select>
                <ChartComp />
            </div>
        );
    }
}

export default Selector;
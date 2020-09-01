import React, { Component } from 'react';
import Selector from './components/Selector'
import RandomGen, { timestampBuff_Unit_A1, Buff_Unit_A1 } from './components/RandomGen'
import SerialCommSetup from './components/SerialComm'

SerialCommSetup();

setInterval(function(){
    RandomGen(Buff_Unit_A1,timestampBuff_Unit_A1);
    //console.log(Buff_Unit_A1[0].length);
    //console.log('Chart Updated!');
},1000);
  
class MainWindow extends Component {    
    render(){
        return(
            <div>
            <h1>Monitoring Baterai Lab Indi</h1>
            <Selector />    
            
            </div>
        );
    }
}

export default MainWindow;
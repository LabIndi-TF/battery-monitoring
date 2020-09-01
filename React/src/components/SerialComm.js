export default function SerialCommSetup(){

    const SerialPort = require('@serialport/stream');
    const Readline = require("@serialport/parser-readline")
    //SerialPort.Binding
 
    // list serial ports:
    /*
    SerialPort.list(function (err, ports) {
        ports.forEach(function(port) {
        console.log(port.comName);
        });
    });
    */
    //SerialPort.list();
    /*
    const port = new SerialPort('COM3', {
        baudRate: 9600,
    });
    */
    //const parser = new Readline();
    //port.pipe(parser);

    //parser.on("data",(line) => console.log(line));
}
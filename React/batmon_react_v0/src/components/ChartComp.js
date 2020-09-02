import React, { Component } from 'react'
import Chart from "chart.js";
import { timestampBuff_Unit_A1,Buff_Unit_A1 } from './RandomGen'

import classes from "./ChartComp.module.css";

Chart.defaults.global.elements.line.tension = 0;
Chart.defaults.global.animation.duration = 100;

let theChart;

class ChartComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            device: 'Unit_A1'
        }
        this.refSelector = React.createRef();
        //const {device} = this.props;
        //this.changeDevice = this.changeDevice.bind(this);
    }
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }
    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const deviceSelected = document.getElementById("nama").value;
        const myChartRef = this.chartRef.current.getContext("2d");
        let theDataset,theTimestamp;

        switch (deviceSelected) {
            case "Unit_A1":
                theDataset = [
                    {label: "Voltage 1", data: Buff_Unit_A1[0], fill: false, borderColor: "#00FF00"},
                    {label: "Voltage 2", data: Buff_Unit_A1[1], fill: false, borderColor: "#FF0000"},
                    {label: "Voltage 3", data: Buff_Unit_A1[2], fill: false, borderColor: "#0000FF"},
                    {label: "Voltage 4", data: Buff_Unit_A1[3], fill: false, borderColor: "#FFFF00"}
                ];
                theTimestamp = timestampBuff_Unit_A1[0];
                break;
            case "Unit_A2":
                theDataset = [
                    {
                        label: "Voltage 1",
                        data: [10, 12, 11],
                        fill: false,
                        borderColor: "#00FF00"
                    },
                    {
                        label: "Voltage 2",
                        data: [11, 11, 9],
                        fill: false,
                        borderColor: "#FF0000"
                    },
                    {
                        label: "Voltage 3",
                        data: [11, 10, 11],
                        fill: false,
                        borderColor: "#0000FF"
                    },
                    {
                        label: "Voltage 4",
                        data: [9, 11, 11],
                        fill: false,
                        borderColor: "#FFFF00"
                    }
                ];
                theTimestamp = ['11.00','11.01','11.02'];
                break;
            case "Unit_B1":
                theDataset = [
                    {
                        label: "Voltage 1",
                        data: [10, 10, 10],
                        fill: false,
                        borderColor: "#00FF00"
                    },
                    {
                        label: "Voltage 2",
                        data: [11, 11, 11],
                        fill: false,
                        borderColor: "#FF0000"
                    },
                    {
                        label: "Voltage 3",
                        data: [12, 12, 12],
                        fill: false,
                        borderColor: "#0000FF"
                    },
                    {
                        label: "Voltage 4",
                        data: [9, 11, 11],
                        fill: false,
                        borderColor: "#FFFF00"
                    }
                ];
                theTimestamp = ['11.00','11.01','11.02'];
                break;
            default:
                theDataset = [
                    {
                        label: "Voltage 1",
                        data: [10, 12, 11],
                        fill: false,
                        borderColor: "#00FF00"
                    },
                    {
                        label: "Voltage 2",
                        data: [11, 11, 9],
                        fill: false,
                        borderColor: "#FF0000"
                    },
                    {
                        label: "Voltage 3",
                        data: [11, 10, 11],
                        fill: false,
                        borderColor: "#0000FF"
                    },
                    {
                        label: "Voltage 4",
                        data: [9, 11, 11],
                        fill: false,
                        borderColor: "#FFFF00"
                    }
                ];
                theTimestamp = ['11.00','11.01','11.02'];
                break;
        }

        theChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: theTimestamp,
                datasets: theDataset
            },
            options: {
                //Customize chart options
                // 2 item ini untuk membuat grafik bagus di mobile
                responsive: true,
                maintainAspectRatio: false,
                // atur angka sumbu di sini
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 15
                        }
                    }]
                }
            }
        });

        document.getElementById("Label1").innerHTML = "<b>" + String(theDataset[0].label)+ ": </b>" + String(theDataset[0].data[theDataset[0].data.length-1]);
        document.getElementById("Label2").innerHTML = "<b>" + String(theDataset[1].label)+ ": </b>" + String(theDataset[1].data[theDataset[1].data.length-1]);
        document.getElementById("Label3").innerHTML = "<b>" + String(theDataset[2].label)+ ": </b>" + String(theDataset[2].data[theDataset[2].data.length-1]);
        document.getElementById("Label4").innerHTML = "<b>" + String(theDataset[3].label)+ ": </b>" + String(theDataset[3].data[theDataset[3].data.length-1]);

        setInterval(function(){
            theChart.update();
            //console.log('Chart Updated!');
          },1000);
          
    }

    render() {
        return (
            <div>
                <div>
                    <p>
                        <span id="Label1"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label2"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label3"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span id="Label4"></span> &nbsp; &nbsp; &nbsp; &nbsp;
                    </p>
                </div>
                <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            </div>
        );
    }
}

export default ChartComp;

import CanvasJSReact from '../assets/canvasjs.react';
import DataInfo from '../JSON/test.json';
var React = require('react');
var Component = React.Component;

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];

 export class SentimentLine extends React.Component{
    render(){
        const options = {
			theme: "light2",
			title: {
				text: "Stock Price of NIFTY 50"
			},
			axisY: {
				title: "Price in USD",
				prefix: "$",
				includeZero: false
			},
			data: [{
				type: "line",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: dataPoints
			}]
		}
	
		return(
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}

    componentDidMount(){
		var chart = this.chart;
        data = fetch({DataInfo})
		.then(function(data) {
			for (var i = 0; i < data.length; i++) {
                console.log("data[i].x="+data[i].x)
				dataPoints.push({
					x: new Date(data[i].x),
					y: data[i].y
				});
			}
			chart.render();
		});
	}

	// componentDidMount(){
	// 	var chart = this.chart;
	// 	fetch({DataInfo})
	// 	.then(function(response) {
    //         console.log(response)
	// 		return response;
	// 	})
	// 	.then(function(data) {
	// 		for (var i = 0; i < data.length; i++) {
    //             console.log("data[i].x="+data[i].x)
	// 			dataPoints.push({
	// 				x: new Date(data[i].x),
	// 				y: data[i].y
	// 			});
	// 		}
	// 		chart.render();
	// 	});
	// }
	
 }




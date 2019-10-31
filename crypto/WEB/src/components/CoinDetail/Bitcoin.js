import React from 'react';
import Data from '../../JSON/SentimentChange.json'; 
import Plot from 'react-plotly.js';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import moment from 'moment'

import Calendar from 'react-calendar';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

// query the date of Bitcoin's  the sentiment variation
export class Bitcoin extends React.Component{
	constructor(props){
		super(props);
	}

	state = {
		date: new Date(),
		//date:moment(new Date()).format("MMM-DD-YYYY")
	}

	getSentiment = () => {
		//const queryDate = this.state.date.toLocaleDateString()
		const queryDate = moment(this.state.date).format("MMM-DD-YYYY")
		//console.log(queryDate)
		var sentimentData = []

		for(let i = 0; i<= Data.length - 1;i++){
			var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
			//console.log(dataDate)
			if(queryDate === dataDate){
				//console.log("Succ=" + dataDate)
				
				sentimentData = 
				[
					{ y: Data[i].posp , label: "Positive" },
					{ y: Data[i].negp, label: "Negative" },
					{ y: Data[i].neup, label: "Neutral" }
        		] 
				//console.log("Data[i].pos="+Data[i].pos)
				break
			}
		}
		return sentimentData
	}
	
	getPriceSentiment = () => {
		const queryDate = moment(this.state.date).format("MMM-DD-YYYY")		
		var posSentimentData = []

		for(let i = 0; i<= Data.length - 1;i++){
			var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
			console.log("i=" + i)
			if(queryDate === dataDate){
				var dayCount = 0
				
				for(let j = i; dayCount < 7; j--){

					console.log("dayCount=" + dayCount)

					posSentimentData.push({
						x: new Date(Data[j].timestamp),
						y: Data[j].Close
					});
					
					//console.log("Data[j].pos="+Data[j].pos)
					dayCount++
				}
    
				console.log("posSentimentData="+posSentimentData)
				return posSentimentData
				break
			}
			
		}
		return posSentimentData
	}

	onChange = date  => {
		this.setState({
			date: date	
		});
	}
		
	render(){
		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Sentiment Proportion"
			},   
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",     
				dataPoints: this.getSentiment()
			}]
		}

		const lineOptions = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "One Week Price"
			},
			axisY: {
				title: "Price",
				includeZero: false,
				suffix: "$"
			},
			axisX: {
				title: "Date",

			}, 
			data: [{
				type: "line",
				toolTipContent: "{x}: ${y}",
				dataPoints: this.getPriceSentiment()		
			}]	
		}

		return(
		<div>
			<Card.Header>
				<h2 align="center" >Variation of Twitter Sentiment</h2>
			</Card.Header>
    		<CardDeck>
				<Card style={{ width: '2rem', height: '25rem' ,justifyContent: 'center', alignItems: 'center'}}>
			
					<Calendar 	
						onChange={this.onChange}
						value={this.state.date}
					/>
					{/* <p>Date choice: {this.state.date.toLocaleDateString()}</p> */}
					{ <p>Date choice: {moment(this.state.date).format("MMM-DD-YYYY")}</p> }
				</Card>

				<Card>
					<CanvasJSChart options = {lineOptions} 
				 		onRef={ref => this.chart = ref}
					/>
				</Card>
    		</CardDeck>
			
			<CanvasJSChart options = {options}  
				onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		
		</div>
		)
	}

	
	
 }




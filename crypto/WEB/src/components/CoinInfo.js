// @flow

import React from 'react';
import Table from 'react-bootstrap/Table'
import Data from '../JSON/SentimentChange.json'; 
import Plot from 'react-plotly.js';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import moment from 'moment'
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

// CoinInfo presents the Bitcoin one day one week variation under the table, 
// sentiment percentage by pie chart, and  sentiment variation by line chart
export class CoinInfo extends React.Component{
   // set up default button click action
   constructor(props){
		super(props);
        this._onButtonClick = this._onButtonClick.bind(this);
	}

    // the default date is today
    state = {
		date: new Date(), 
        queryPeriod: "Today",
        todayTrittwrVar: 0,
        titleName: "Today"
	}
    
    // query title name is Today or OneWeek
    getTitle = () => {
        console.log("in getTitle")
        var getTitleName = {}
        if(this.state.queryPeriod === "Today" || this.state.queryPeriod === "OneWeek"){
            this.state.titleName = "One Week"
            getTitleName = "One Week"
        }
        else if(this.state.queryPeriod === "TwoWeeks"){
            this.state.titleName = "Two Weeks"
            getTitleName = "Two Weeks"
        }
        console.log("getTitleName="+getTitleName)
        return getTitleName
    }

    // calculate today's twitter sentiment variation
    todayTwiVariation = () => {
        console.log("in todayTwiVariation")
        var todayDate = moment(new Date()).format("MMM-DD-YYYY")	
        var trittwrVar = 0.000
        
        for(let i = 0; i<= Data.length - 1;i++){
            var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
            if(todayDate === dataDate){
                trittwrVar = (Data[i].pos_change + Data[i].neg_change) / 2
                this.state.todayTrittwrVar = trittwrVar
                console.log("trittwrVar="+trittwrVar)
                return trittwrVar
                console.log("trittwrVar="+trittwrVar)
                break
            }
        }
    }

    // calculate one week's twitter sentiment variation
    oneWTwiVariation = () => {
        console.log("hi")
        var todayDate = moment(new Date()).format("MMM-DD-YYYY")	
        var trittwrVar = 0.000
        var sum = 0.000
        var count = 0
        for(let i = 0; i<= Data.length - 1;i++){
            var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
            if(todayDate === dataDate){
                for(let j = i; count < 7;j--){
                    console.log("j="+j)
                    sum = sum+((Data[j].pos_change + Data[j].neg_change) / 2)
                    
                    //console.log("trittwrVar="+trittwrVar)
                    count++
                }
                trittwrVar = sum / 7
                
                return trittwrVar
                break
            }
        }
    }

    // calculate one week's government sentiment variation
    oneWGovVariation = () => {
        console.log("hi")
        var todayDate = moment(new Date()).format("MMM-DD-YYYY")	
        var trittwrVar = 0.000
        var sum = 0.000
        var count = 0
        for(let i = 0; i<= Data.length - 1;i++){
            var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
            if(todayDate === dataDate){
                for(let j = i; count < 7;j--){
                    sum = sum+((Data[j].Govpos_change + Data[j].Govneg_change) / 2)
                    //console.log("trittwrVar="+trittwrVar)
                    count++
                }
                trittwrVar = sum / 7
                return trittwrVar
                break
            }
        }
    }
    // get today government sentiment variation
    todayGovVariation = () => {
        var todayDate = moment(new Date()).format("MMM-DD-YYYY")	
        var govVar = 0
        
        for(let i = 0; i<= Data.length - 1;i++){
            var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
            if(todayDate === dataDate){
                govVar = (Data[i].Govpos_change + Data[i].Govneg_change) / 2
            }
        }
        return govVar
    }
    // get one week twitter sentiment variation
    oneWeekTwiVariation = () => {
        console.log("oneWeekTwiVariation")
        var todayDate = moment(new Date()).format("MMM-DD-YYYY")	
        var trittwrVar = 0.000
        
        for(let i = 0; i<= Data.length - 1;i++){
            var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
            if(todayDate === dataDate){
                trittwrVar = (Data[i].pos_change + Data[i].neg_change) / 2
                this.state.todayTrittwrVar = trittwrVar
                console.log("trittwrVar="+trittwrVar)
                return trittwrVar
                break
            }
        }
    }

    // the pie chart gets data of sentiment variation
    getSentimentData = (sentiment) => {
        console.log("in getSentimentData")
        const queryDate = moment(this.state.date).format("MMM-DD-YYYY")	
        var period = this.state.queryPeriod
		var posSentimentData = []
        var negSentimentData = []
        var govPosSentimentData = []
        var govNegSentimentData = []

        if(this.state.queryPeriod === "Today" || this.state.queryPeriod === "OneWeek")
        {
            this.state.date = new Date()
            this.state.queryPeriod = "Today"
            console.log("in qurty 1 week data")

            for(let i = 0; i<= Data.length - 1;i++){
                var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
                //console.log("i=" + i)
                if(queryDate === dataDate){
                    var dayCount = 0
                    
                    for(let j = i; dayCount < 7; j--){
                        //console.log("dayCount=" + dayCount)
                        posSentimentData.push({
                            x: new Date(Data[j].timestamp),
                            y: Data[j].pos_change
                        });
                        negSentimentData.push({
                            x: new Date(Data[j].timestamp),
                            y: Data[j].neg_change
                        });
                        govPosSentimentData.push({
                            x: new Date(Data[j].timestamp),
                            y: Data[j].Govpos_change
                        });
                        govNegSentimentData.push({
                            x: new Date(Data[j].timestamp),
                            y: Data[j].Govneg_change
                        });
                        //console.log("Data[j].pos="+Data[j].pos)
                        dayCount++
                    }
                   
                     //return posSentimentData, negSentimentData

                    if(sentiment == "pos"){
                        return posSentimentData
                    }
                    else if(sentiment == "neg"){
                        return negSentimentData
                    } 
                    else if(sentiment == "govPos"){
                        return govPosSentimentData
                    } 
                    else if(sentiment == "govNeg"){
                        return govNegSentimentData
                    } 
                }
		    }
        }

        else if(this.state.queryPeriod === "TwoWeeks")
        {
            this.state.date = new Date()
            const queryDate = moment(this.state.date).format("MMM-DD-YYYY")	
            console.log("in qurty 2 weeks data")
            console.log("queryDate="+queryDate)

            for(let i = 0; i<= Data.length - 1;i++){
                var dataDate = moment(Data[i].timestamp).format("MMM-DD-YYYY")
                
                console.log("i=" + i)
                console.log("dataDate="+dataDate)
                if(queryDate === dataDate){
                    var dayCount = 0
                    console.log("succ="+dataDate)
                    for(let j = i; dayCount < 14; j--){
                        console.log("dayCount="+dayCount)
                        console.log("j="+j)
                        //console.log("dayCount=" + dayCount)
                        posSentimentData.push({
                            x: new Date(Data[j].timestamp),
                            y: Data[j].pos_change
                        });
                        var test = Data[j].pos_change
                        console.log("test="+test)
                        negSentimentData.push({
                            x: new Date(Data[j].timestamp),
                            y: Data[j].neg_change
                        });
                        //console.log("Data[j].pos="+Data[j].pos)
                        dayCount++
                    }
                     //return posSentimentData, negSentimentData

                    if(sentiment == "pos"){
                        console.log("posSentimentData="+posSentimentData)
                        return posSentimentData
                    }
                    else if(sentiment == "neg"){
                        return negSentimentData
                    } 
                }
		    }
        }
		return null
	}

    // onchange is the canvas default props that can handle change
    onChange = (queryPeriodString) => {
        console.log("in hangleChange queryPeriodString ="+queryPeriodString)
        this.state.queryPeriod = queryPeriodString
        if(queryPeriodString == "Today" || queryPeriodString == "OneWeek"){
            console.log("state.titleName with " + queryPeriodString)
            this.state.titleName = "One Week"
        }

        else if(queryPeriodString == "TwoWeeks"){
            console.log("state.titleName with " + queryPeriodString)
            this.state.titleName = "Two Weeks"
        }
        this.getTitle()
        this.getSentimentData("pos")
        //this.getSentimentData("neg")
       
    }

    // button click event
    _onButtonClick() {
        this.setState({
      showComponent: true,
    });
        
    }

    // presenting to user 
    render(){
        // the cancasJS data format of pie chart
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				//text: this.state.titleName setTitle
                text: "Sentiment Variation"
			},
			axisY: {
				//title: "%",
				includeZero: false,
				suffix: "%"
			},
			axisX: {
				//title: "Date",

			}, 
			data: [
                {
				type: "line",
                name: "Twitter Positive",
                fontSize: 22,
                showInLegend: true,
				toolTipContent: "{x}: {y}%",
				dataPoints: this.getSentimentData("pos")	
                },
                {
				type: "line",
                name: "Twitter Negative",
                fontSize: 22,
                showInLegend: true,
				toolTipContent: "{x}: {y}%",
				dataPoints: this.getSentimentData("neg")		
			    },
                {
                type: "line",
                name: "Government Twitter Positive",
                fontSize: 22,
                showInLegend: true,
				toolTipContent: "{x}: {y}%",
				dataPoints: this.getSentimentData("govPos")		
			    },
                {
                type: "line",
                name: "Government Twitter Negative",
                fontSize: 22,
                showInLegend: true,
				toolTipContent: "{x}: {y}%",
				dataPoints: this.getSentimentData("govNeg")		
			    }
            ]
		}
        // return module to App
        return ( 
            <div>
                {/* Create a table */}
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr align="center">           
                            <th>Name</th>
                            <th>Period</th>
                            <th>Twitter Variation</th>
                            <th>Government Variation</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr align="center">
                            <td>
                                <Button  variant="outline-warning">
                                    <a href={'/detail/Bitcoin'} >Bitcoin</a>
                                </Button></td>
                            <td>Today</td>
                            {/* call todayTwiVariation() to get the data of today's twitter variation*/}
                            <td>{this.todayTwiVariation()}</td> 
                            {/* call todayGovVariation() to get the data of today's government variation*/}
                            <td>{this.todayGovVariation()}</td>  
                        </tr>
                        <tr align="center">
                        <td>
                        </td>
                            <td>One Week</td>
                            <td>
                                {/* call todayTwiVariation() to get the data of one week's twitter variation*/}
                                {this.oneWTwiVariation()}
                            </td>  
                            <td>
                                {/* call todayGovVariation() to get the data of one week's government variation*/}
                                {this.oneWGovVariation()}
                            </td>
                        </tr>
                    </tbody>
                </Table>     

                 <CanvasJSChart options = {options} 
                            onRef={ref => this.chart = ref}
                        />    
                <Card.Header style={{ width: '70rem', height: '5rem' }}>
			    </Card.Header>
            </div>
        )
    };
}






import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import allCoinImages from '../assets/allCoin.jpg'
import KNNImages from '../assets/KNN.jpg'
import LinearImages from '../assets/Linear.jpg'
import SVMImages from '../assets/SVM.jpg'
import LSTMImages from '../assets/LSTM.jpg'
import ARIMAImages from '../assets/ARIMA.jpg'
import MovingAverageImages from '../assets/MovingAverage.jpg'
import Button from 'react-bootstrap/Button';
import CanvasJSReact from '../assets/canvasjs.react';
import Data from '../JSON/Comparison.json'; 
import Modal from 'react-bootstrap/Modal'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// show the 6 types of models descripton by cards, 
// and each card comes up with the button to link with the detail message
export class Model extends React.Component{
    // get the RMSE of 6 models from JSON format
    getData = () => { 
        var compareData = []

        compareData = 
		[
			{ y: Data.RMSE.KNN , label: "KNN" },
			{ y: Data.RMSE.Linear, label: "Linear" },
			{ y: Data.RMSE.SVM, label: "SVM" },
            { y: Data.RMSE.LSTM , label: "LSTM" },
			{ y: Data.RMSE.ARIMA, label: "ARIMA" },
            { y: Data.RMSE.MA , label: "MovingAverage" }
        ] 
        return compareData
    }

    render(){
        const options = {
			// title: {
			// 	text: "Model Comparison"
			// },
			data: [{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: this.getData()
			}]
		}
        return ( 
            <div>  
                <Card.Header>
				    <h2 align="center" >Model Comparison</h2>
			    </Card.Header>
    		    <CardDeck>
				    <Card style={{ width: '2rem', height: '25rem' ,justifyContent: 'center', alignItems: 'center'}}>
                        <CanvasJSChart options = {options}
				            /* onRef={ref => this.chart = ref} */
			            />
                    </Card>      
    		    </CardDeck>
                <Card.Header>
                </Card.Header>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={KNNImages} style={{"height": 320, "width": 320}}/>
                        <Card.Body>
                        <Card.Title>KNN</Card.Title>
                        <Card.Text>
                            <p>KNN with Twitter Sentiment</p>
                            <p>KNN with Twitter Sentiment of Government</p>
                        </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago. {' '}</small>             
                        </Card.Footer> */}
                        <Button style={{ justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'blue'}}>
                            <a href="/model/KNN" style={{ color: '#FFF', justifyContent: 'flex-end'}}>
                                Figure
                            </a>
                        </Button>              
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={LinearImages} style={{"height": 300, "width": 300}}/>
                        <Card.Body>
                        <Card.Title>Linear</Card.Title>
                        <Card.Text>
                            <p>Linear with Twitter Sentiment</p>
                            <p>Linear with Twitter Sentiment of Government</p>
                        </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago {'\n'}</small>
                        </Card.Footer> */}
                        <Button  style={{ justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'blue'}}>
                            <a href="/model/Linear" style={{ color: '#FFF', justifyContent: 'flex-end'}}>
                                Figure
                            </a>
                        </Button>    
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={SVMImages} style={{"height": 320, "width": 320}}/>
                        <Card.Body>
                        <Card.Title>SVM</Card.Title>
                        <Card.Text>
                            <p>SVM with Twitter Sentiment</p>
                            <p>SVM with Twitter Sentiment of Government</p>
                        </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        <Button  style={{ justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'blue'}}>
                            <a href="/model/SVM" style={{ color: '#FFF', justifyContent: 'flex-end'}}>
                                Figure
                            </a>
                        </Button>  
                    </Card>
                </CardDeck>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={LSTMImages} style={{"height": 320, "width": 320}}/>
                        <Card.Body>
                        <Card.Title>LSTM</Card.Title>
                        <Card.Text>
                            <p>LSTM30</p>
                            <p>LSTM60</p>
                            <p>LSTM90</p>
                        </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        <Button  style={{ justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'blue'}}>
                            <a href="/model/LSTM30" style={{ color: '#FFF', justifyContent: 'flex-end'}}>
                                Figure
                            </a>
                        </Button> 
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={ARIMAImages} style={{"height": 320, "width": 320}}/>
                        <Card.Body>
                        <Card.Title>ARIMA</Card.Title>
                        {/* <Card.Text>
                            ARIMA Description
                        </Card.Text> */}
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        <Button  style={{ justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'blue'}}>
                            <a href="/model/ARIMA" style={{ color: '#FFF', justifyContent: 'flex-end'}}>
                                Figure
                            </a>
                        </Button> 
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={MovingAverageImages} style={{"height": 320, "width": 320}}/>
                        <Card.Body>
                        <Card.Title>MovingAverage</Card.Title>
                        {/* <Card.Text>
                            MovingAverage Description
                        </Card.Text> */}
                        </Card.Body>
                        {/* <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> */}
                        <Button  style={{ justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'blue'}}>
                            <a href="/model/MovingAverage" style={{ color: '#FFF', justifyContent: 'flex-end'}}>
                                Figure
                            </a>
                        </Button> 
                    </Card>
            </CardDeck>
        </div>
        )
    }  
}

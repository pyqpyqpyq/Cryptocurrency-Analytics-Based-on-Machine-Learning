import React from 'react';
import Plot from 'react-plotly.js';
import DataInfo from '../../JSON/ARIMA.json';
import Card from 'react-bootstrap/Card'
import ARIMAFormulaImages from '../../assets/ARIMAFormula.jpg'

export const ARIMA = () => (
  <div>
  {
    <Plot
      data={DataInfo.data}
      
      layout={DataInfo.layout}
    />
  } 
 
     <Card>
      <Card.Body>
        <h2>Full name:  Autoregressive Integrated Moving Average model</h2>
        <h4>Apply to the gov sentiment analysis</h4>
          <h5>Reference API: </h5>
          <p>from statsmodels.tsa.arima_model import ARIMA</p>
          <Card.Img variant="top" src={ARIMAFormulaImages} style={{"height": 100, "width": 400}}/>
          <h5>Principle:</h5>
          <p>  Combine autoregressive models, moving average models, and difference methods</p>
          <h5>AR:</h5>
          <p> Autoregression. A model that uses the dependent relationship between an observation and some number of lagged observations.</p>
          <h5>I:</h5>
          <p> Integrated. The use of differencing of raw observations (e.g. subtracting an observation from an observation at the previous time step) in order to make the time series stationary.</p>
          <h5>MA:</h5>
          <p>Moving Average. A model that uses the dependency between an observation and a residual error from a moving average model applied to lagged observations.</p>
      </Card.Body>
    </Card>  

    
  </div>

    
)

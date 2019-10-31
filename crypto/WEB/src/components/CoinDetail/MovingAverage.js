import React from 'react';
import Plot from 'react-plotly.js';
import DataInfo from '../../JSON/MovingAverage.json';
import Card from 'react-bootstrap/Card'

export const MovingAverage = () => (
  <div>
  {
    <Plot
      data={DataInfo.data}
      
      layout={DataInfo.layout}
    />
  } 
  
    <Card>
      <Card.Body>
        <h2>Full name:  Moving average model apply to the gov sentiment analysis</h2>
          <h5>Reference API: </h5>
          <p>Pandas</p>
          <h5>Principle:</h5>
          <p> Creating a series of averages of different subsets of the full data set to analysis data point. </p>
      </Card.Body>
    </Card>  
  </div>

    
)

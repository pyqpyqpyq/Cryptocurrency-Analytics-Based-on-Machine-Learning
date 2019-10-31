import React from 'react';
import Plot from 'react-plotly.js';
import DataInfo from '../../JSON/LSTM60.json';
import Card from 'react-bootstrap/Card'

export const LSTM60 = () => (
  <div>
  {
    <Plot
      data={DataInfo.data}
      
      layout={DataInfo.layout}
    />
  } 
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ position: "absolute",  right: 200, bottom:0}}>
      With Sentiment
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/model/LSTM/LSTM30">LSTM30</a>
    <a class="dropdown-item" href="/model/LSTM/LSTM90">LSTM90</a>

  
  </div>
 
    <Card>
      <Card.Body>
        <h2>Full name: Long Short-Term Memory apply to the gov sentiment analysis</h2>
          <h5>Reference API: </h5>
          <p>from keras.layers.recurrent import LSTM</p>
          <h5>Principle:</h5>
          <p> an artificial recurrent neural network and keep track of arbitrary long-term dependencies in the input sequences. </p>
      </Card.Body>
    </Card>  
  </div>

    
)

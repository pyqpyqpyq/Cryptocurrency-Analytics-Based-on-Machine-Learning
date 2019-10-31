import React from 'react';
import Plot from 'react-plotly.js';
import DataInfo from '../../../JSON/LinearTwitterGovernment.json';
import Card from 'react-bootstrap/Card'

export const LinearGov = () => (
  <div>
  {
    <Plot
      data={DataInfo.data}
      
      layout={DataInfo.layout}
    />
  } 
       
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ position: "absolute",  right: 200, bottom:0}}>
      Change Data
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="/model/Linear/LinearTwitter">Twitter</a>
    <a class="dropdown-item" href="/model/Linear">Goverment</a>
  
  </div>
 
<Card>
      <Card.Body>
        <h2>Full name: Linear Regression model apply to the gov sentiment analysis</h2>
          <h5>Reference API: </h5>
          <p>sklearn.linear_model.LinearRegression</p>
          <h5>Principle:</h5>
          <p> Regard the sentiment is Linear separable and emotions corresponding to values expressed by linear regression parameters.</p>
      </Card.Body>
    </Card>  
  </div>

    
)

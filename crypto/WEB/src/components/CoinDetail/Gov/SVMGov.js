import React from 'react';
import Plot from 'react-plotly.js';
import DataInfo from '../../../JSON/SVMTwitterGovernment.json';
import Card from 'react-bootstrap/Card'

export const SVMGov = () => (
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
    <a class="dropdown-item" href="/model/SVM/SVMTwitter">Twitter</a>
    <a class="dropdown-item" href="/model/SVM">Goverment</a>
  
  </div>
 
    <Card>
      <Card.Body>
        <h2>Full name: Support victor machine apply to the gov sentiment analysis</h2>
          <h5>Reference API: </h5>
          <p>sklearn.svm.LinearSVC</p>
          <h5>Principle:</h5>
          <p> Use the hyperplane under high dimension to classify the different kinds of sentiment. </p>
      </Card.Body>
    </Card>  
  </div>

    
)

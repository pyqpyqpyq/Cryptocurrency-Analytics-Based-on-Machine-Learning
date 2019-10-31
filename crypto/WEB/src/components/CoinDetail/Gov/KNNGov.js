import React from 'react';
import Plot from 'react-plotly.js';
import DataInfo from '../../../JSON/KNNTwitterGovernment.json';
import Card from 'react-bootstrap/Card'

export const KNNGov = () => (
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
      <a class="dropdown-item" href="/model/KNN/KNNTwitter">Twitter</a>
      <a class="dropdown-item" href="/model/KNN">Goverment</a>

  
  </div>
 <Card>
      <Card.Body>
        <h2>Full name: k-NearestNeighbor</h2>
          <h5>Reference API: </h5>
          <p>sklearn.neighbors.KNeighborsClassifier</p>
          <h5>Principle:</h5>
          <p> If the majority of the k-most nearest samples in a feature space belong to a certain category, then this sample also belongs to this category and has the characteristics of the samples on this category. </p>
      </Card.Body>
    </Card>   
  </div>

    
)

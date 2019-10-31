import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import allCoinImages from '../assets/allCoin.jpg'
import Modal from 'react-bootstrap/Modal'
import DataInfo from '../JSON/Total.json';
import Plot from 'react-plotly.js';
 //var result = JSON.parse(DataInfo.replace(/\bNaN\b/g, "null"));
export const Home = () => (
 
  <div>
      {/* load the total cryptocurrency infomation*/}
      <Plot 
        data={DataInfo.data}
        layout={DataInfo.layout}
      /> 

{/* model list*/}
{/* 
  <div style={{ justifyContent: 'center', alignItems: 'center'}}>
  <Modal.Dialog style={{ width: '20rem'}}>
    <Card bg="dark" text="white" style={{ width: '20rem', justifyContent: 'center', alignItems: 'center' }}>
      <Card.Header as="h2">Model</Card.Header>
      <Card.Body>
        <Card.Title className="text-center" >This project uses 6 various models.</Card.Title>
        <Card.Text>
          <p> 1. KNN </p>
          <p> 2. Linear </p>
          <p> 3. SVM </p>
          <p> 4. LSTM </p>
          <p> 5. ARIMA </p>
          <p> 6. MovingAverage </p>
        </Card.Text>
        <Button variant="primary">
          <a href="/model" style={{ color: '#FFF' }}>
          Model Comparation
          </a>
        </Button>  
      </Card.Body>
    </Card>
  </Modal.Dialog>
  </div> */}

  </div>
)



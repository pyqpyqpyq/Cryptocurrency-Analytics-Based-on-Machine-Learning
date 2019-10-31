import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import professorImages from '../assets/professor.jpg'
import belleImages from '../assets/belle.jpg'
import yimages from '../assets/yi.jpg'
import pyqimages from '../assets/pyq.jpg'

export const About = () => (
    <div>
    {/* using CardDeck to adjust the layout*/}
    <Card.Header><h2>Project Team</h2></Card.Header>
    <CardDeck>
        <Card style={{ width: '18rem' ,justifyContent: 'center', alignItems: 'center'}}>
            <Card.Img variant="top" src={professorImages} style={{"height": 320, "width": 320,justifyContent: 'center', alignItems: 'center'}}/>
            <Card.Body>
                <Card.Text>
                    <h4>Professor:  Richard Sinnott</h4>
                    <h4>Role: Supervisor</h4>
                </Card.Text>
            </Card.Body>
        </Card>
    </CardDeck>
    
     {/* using CardDeck to adjust the layout*/}
    <CardDeck>
        <Card style={{ width: '18rem' ,justifyContent: 'center', alignItems: 'center'}}>
            <Card.Img variant="top" src={belleImages} style={{"height": 320, "width": 320,justifyContent: 'center', alignItems: 'center'}}/>
            <Card.Body>
            <Card.Text>
                <h4>Name: Tzu-Tung HSIEH</h4>
                <h4>Student No.: 818625</h4>
                <h4>Role: Front-End Engineer</h4>
            </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' ,justifyContent: 'center', alignItems: 'center'}}>
            <Card.Img variant="top" src={yimages} style={{"height": 320, "width": 320,justifyContent: 'center', alignItems: 'center'}}/>
            <Card.Body>
            <Card.Text>
                <h4>Name: Yizhou WANG</h4>
                <h4>Student No.: 669026</h4>
                <h4>Role: Data Analyzer</h4>
            </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{ width: '18rem' ,justifyContent: 'center', alignItems: 'center'}}>
            <Card.Img variant="top" src={pyqimages} style={{"height": 320, "width": 320,justifyContent: 'center', alignItems: 'center'}}/>
            <Card.Body>
            <Card.Text>
                <h4>Name: Yunqiang PU</h4>
                <h4>Student No.: 909662</h4>
                <h4>Role: Free Rider</h4>
            </Card.Text>
            </Card.Body>
        </Card>
    </CardDeck>
    </div>
)




// @flow

import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import coinImages from '../assets/coinImages.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${coinImages});
        background-size: cover;
        color: #efefef;
        height: 150px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

// Jumbotron is located on each page's top  
export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Cryptographic Currency</h1>
            </Container>
        </Jumbo>
    </Styles>
)
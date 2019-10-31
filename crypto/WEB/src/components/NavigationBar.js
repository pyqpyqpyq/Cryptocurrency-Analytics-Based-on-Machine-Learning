// @flow

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const styles = styled.div`
    .navbar { 
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: black;
        }
    }
`;

// NavigationBar provids the switch link between Home, List, Model, and About
export const NavigationBar = () => (
    <styles>
        <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/coinInfo">List</Nav.Link>
            <Nav.Link href="/model">Model</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </styles>
)

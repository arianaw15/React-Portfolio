import React from 'react';
import {Card, Button, Container, Col, Row} from 'react-bootstrap';
import barkle from './barkle-logo.png';
import trip from './trip-itinerary.PNG';
import garden from './garden-overflow.PNG'

import "./index.css";


function Projects() {
    return (
            <Container className="container">
  <Row className="row" md={3}>
    <Col sm><a href="https://barkle.herokuapp.com/" target="_blank"><img className= "card-img" src={barkle}/></a>Barkle App</Col>
    <Col sm><a href="https://arianaw15.github.io/Trip-Itinerary/" target="_blank"><img className= "card-img" src={trip} /></a>Trip Itinerary App</Col>
    <Col sm><a href="https://garden-overflow.herokuapp.com/" target="_blank"><img className= "card-img" src={garden} /></a>Garden Overflow</Col>
  </Row>
  </Container>
    )
}

export default Projects

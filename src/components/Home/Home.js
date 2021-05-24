import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import './index.css'
import profile from './profile-pic.jpg'

function Home() {
    return (
           <Container className="container">
  <Row>
    <Col xs={6} md={4} >
      <Image src={profile} roundedCircle fluid/>
    </Col>
    <Col xs={12} md={8}>
    My name is Ariana Winters and I'm from Salt Lake City,Utah. Growing up in Utah I came to love hiking and
            camping and spend the majority of my summers doing both with my 2 year old pitbull. Although Utah is known
            for it's snow, I don't ski or snowboard and spend my winters working out and planning my next adventure. I
            love to travel, and have been to a few different countries, the most notable being India and Peru.
            <hr/>
          I'm currently a program manager at Amazon Pharmacy and work daily with external partners on both current
            programs and future launches and expansions. I've developed clear and concise communication skills which is
            crucial for a positive experience both for the partner and our joint Customers. I'm comfortable leading
            projects and working with stakeholders to gain buy in and requirements for a successful implementation. 
            <hr/>
    </Col>
  </Row>
</Container>
    )
}

export default Home

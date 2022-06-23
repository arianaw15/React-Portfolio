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
    My name is Ariana Winters and I'm from Salt Lake City, Utah. Growing up in Utah I came to love hiking and
            camping and spend the majority of my summers doing both with my 2 year old dog, Flynn. I'm incredibly passionate about health and wellness so you can usually find me training for my next body building competition or race. I also enjoy traveling and trying new foods, the most exotic being live termites directly from the tree in Peru.
            <hr/>
          I'm currently a Junior Software Engineer with a focus on front end. Most notably I've collaborated with my team to develop a centralized UI component library using React.JS, HTML5, CSS3, and JavaScript and migrated all Sass styles. Additionally I'm a passionate lifelong learner and have taken on the task of learning additional skills such as Python, Typescript, and Docker so that I have a better understanding of our software as a whole. 
            <hr/>
    </Col>
  </Row>
</Container>
    )
}

export default Home

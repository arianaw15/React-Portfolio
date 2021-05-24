import React from 'react'
import {Form, Container, Button} from 'react-bootstrap'
import './index.css'

function ContactMe() {
    return (
        <Container className="form">
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="input" placeholder="" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Write me a message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button className="submitbtn">Submit</Button>
</Form>
<hr/>
<div class="contactMe">
          To see more of my projects, find me here!
          <br/>
          <a href="https://github.com/arianaw15" target="_blank">GitHub</a>
          <br/>
          <a href="https://www.linkedin.com/in/ariana-winters-63455215b/"
              target="_blank">LinkedIn</a>
        </div>
</Container>
    )
}

export default ContactMe

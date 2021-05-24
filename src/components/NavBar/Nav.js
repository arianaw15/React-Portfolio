import React from 'react';
import './index.css';
import {Container} from 'react-bootstrap';

function Nav() {
    return (
<Container className="navbar">
    <a className="nav-link" href="/">Home</a>
    <a className="nav-link" href="/Projects">Projects</a>
    <a className="nav-link" href="/Resume">Resume</a>
    <a className="nav-link" href="/ContactMe">Contact Me</a>
</Container>
    )
}

export default Nav

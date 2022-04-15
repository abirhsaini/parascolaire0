import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo2 from "../images/Capture.PNG"
import logo from "../images/sidebar-icon-16.jpg"
import {
    Navbar,
    Container,
    
  } from 'react-bootstrap';
  
const Navbawr = () => {
    const [showNavExternal, setShowNavExternal] = useState(false);
    return (
       <div>
    <Navbar className='hi'>
  <Container>
    <Navbar.Brand href="#home"><img  className='nav' src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
         <img className='img1' src={logo2} alt="" />
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navbawr;
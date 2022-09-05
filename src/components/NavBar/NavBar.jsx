import React from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

// import Search from '../Search/Search';
import logo from '../../assets/logo.png';

import './navbar.css'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <h1><Navbar.Brand as={NavLink} to='/'><Image className='logo' fluid src={logo} alt="My Recipe" /></Navbar.Brand></h1>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
        <Nav className="me-auto my-2 my-lg-0 justify-content-end" navbarScroll >
          
          <NavDropdown title="Cuisine" id="navbarScrollingDropdown">
            <NavDropdown.Item as={NavLink} to='/cuisine/Latin American'>Latin America</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/cuisine/Italian'>Italian</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/cuisine/French'>French</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/cuisine/Thai'>Thai</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={NavLink} to='/popular'>Popular</Nav.Link>
          <Nav.Link as={NavLink} to='/vegetarian'>Vegetarian</Nav.Link>

        </Nav>
        {/* <SearchBar /> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>


    // <Navbar bg="light" expand="lg" sticky="top">
    //     <Container>
    //         <Navbar.Brand href="#home"><Image className='logo' fluid src={logo} alt="My Recipe" /></Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //         <Form className="d-flex">
    //             <Form.Control
    //             type="search"
    //             placeholder="Search"
    //             className="me-2"
    //             aria-label="Search"
    //             />
    //             <Button variant="outline-success">Search</Button>
    //         </Form>
    //         </Navbar.Collapse>
    //     </Container>
    // </Navbar>
  )
}

export default NavBar
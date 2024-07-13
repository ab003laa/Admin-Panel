import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css'; 

const Sidebar = () => {
  

  return (
    <Navbar bg="dark" variant="dark" className="sidebar d-flex flex-column p-3">
      <Navbar.Brand>
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="/products">Products</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
        </Nav.Item>
        
      </Nav>
    </Navbar>
  );
};

export default Sidebar;

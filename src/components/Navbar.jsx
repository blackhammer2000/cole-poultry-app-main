import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./css/Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="white" variant="light" fixed="top">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          alt="e-Poultry logo"
          style={{ width: 200, height: 200 }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="custom-nav ">
          <Nav.Link className="mx-3" as={Link} to="/" exact>
            Home
          </Nav.Link>
          <Nav.Link className="mx-3" as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link className="mx-3" as={Link} to="/product">
            Products
          </Nav.Link>
          <Nav.Link className="mx-3" as={Link} to="/service">
            Services
          </Nav.Link>
          <Nav.Link className="mx-3" as={Link} to="/modules">
            Modules
          </Nav.Link>
          <Nav.Link className="mx-3" as={Link} to="/careers">
            Careers
          </Nav.Link>
          <NavDropdown title="Media" id="media-dropdown">
            <NavDropdown.Item as={Link} to="/directors">
              Board Of Directors
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/team">
              Our Team
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/poultry">
              Poultry
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/training">
              Training Team
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="mx-3" as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import calendly from "./calendly.svg";
const LoginNavbar = () => {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <NavLink to="/">
            <img
              src={calendly}
              width="150"
              height="120"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default LoginNavbar;

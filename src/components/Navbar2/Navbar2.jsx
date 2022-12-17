import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar2/Navbar2.scss";
import { AiFillBell } from "react-icons/ai";

function BasicExample() {
  return (
    <div className="navbar-2">
      <Navbar className="background" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Personal</Nav.Link>
            <div style={{ color: "#FFF",width: 20,borderLeft: '1px solid #FFF' }}></div>
            <Nav.Link href="#link">Cards</Nav.Link>
            <div style={{ color: "#FFF",width: 20,borderLeft: '1px solid #FFF' }}></div>
            <Nav.Link href="#home">DFCC Pinacle</Nav.Link>
            <div style={{ color: "#FFF",width: 20,borderLeft: '1px solid #FFF' }}></div>
            <Nav.Link href="#link">Digital Banking</Nav.Link>
            <div style={{ color: "#FFF",width: 20,borderLeft: '1px solid #FFF' }}></div>
            <Nav.Link href="#link"> Corporate</Nav.Link>
            <div style={{ color: "#FFF",width: 20,borderLeft: '1px solid #FFF' }}></div>
            <Nav.Link href="#link"> SME</Nav.Link>
            <div style={{ color: "#FFF",width: 20,borderLeft: '1px solid #FFF' }}></div>
            <Nav.Link href="#link"> International</Nav.Link>
          </Nav>
          <AiFillBell className="bell-icon" />
          <div className="color-codes">
            <div id="color-1"></div>
            <div id="color-2"></div>
            <div id="color-3"></div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default BasicExample;

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Navbar/Navbar.scss";
import logo from "../assets/navbar/logo.png";
import { MdLocationPin } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiFillLock } from "react-icons/ai";

function BasicExample() {
  return (
    <Navbar className="background" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav toggle" />

      <Navbar.Brand href="#home" class="navbar-brand">
        <img src={logo} class="logo" alt="logo" />
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown
            title="About us"
            id="basic-nav-dropdown"
            renderMenuOnMount={true}
          >
            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
            <NavDropdown.Divider
              style={{
                border: " 1px solid #EC0000",
                marginLeft: 15,
                marginRight: 15,
              }}
            />

            <table>
              <td>
                <tr>
                  {" "}
                  <NavDropdown.Item href="#action/3.2">
                    The History of DFCC Bank
                  </NavDropdown.Item>
                </tr>
                <tr>
                  {" "}
                  <NavDropdown.Item href="#action/3.3">
                    Brand Story
                  </NavDropdown.Item>
                </tr>

                <tr>
                  <NavDropdown.Item href="#action/3.3">
                    Vision & Mission
                  </NavDropdown.Item>
                </tr>
                <tr>
                  {" "}
                  <NavDropdown.Item href="#action/3.3">
                    DFCC Group
                  </NavDropdown.Item>
                </tr>
                <tr>
                  <NavDropdown.Item href="#action/3.3">
                    Milestone
                  </NavDropdown.Item>
                </tr>
                <tr>
                  <NavDropdown.Item href="#action/3.3">
                    Broad of Directions
                  </NavDropdown.Item>
                </tr>
              </td>
              <td>
                <tr>
                  {" "}
                  <NavDropdown.Item href="#action/3.3">
                    Coporate Management
                  </NavDropdown.Item>
                </tr>

                <tr>
                  <NavDropdown.Item href="#action/3.3">
                    Recognition
                  </NavDropdown.Item>
                </tr>
                <tr>
                  <NavDropdown.Item href="#action/3.3">
                    Corporate information
                  </NavDropdown.Item>
                </tr>
                <tr>
                  {" "}
                  <NavDropdown.Item href="#action/3.3">
                    Investor Relations
                  </NavDropdown.Item>
                </tr>
                <tr>
                  <NavDropdown.Item href="#action/3.3">
                    Debenture Issuance
                  </NavDropdown.Item>
                </tr>
                <tr>
                  <NavDropdown.Item href="#action/3.3">
                    Company Policies
                  </NavDropdown.Item>
                </tr>
                <tr>
                  {" "}
                  <NavDropdown.Item href="#action/3.3">
                    Careers
                  </NavDropdown.Item>
                </tr>
              </td>
            </table>
          </NavDropdown>
          <NavDropdown
            title="Careers"
            id="basic-nav-dropdown"
            renderMenuOnMount={true}
          >
            <NavDropdown.Item href="#action/3.1">Overview</NavDropdown.Item>
            <NavDropdown.Divider
              style={{
                border: " 1px solid #EC0000",
                marginLeft: 15,
                marginRight: 15,
              }}
            />
            <table>
              <td>
                <tr>
                  <NavDropdown.Item href="#action/3.2">
                    Life at DFCC
                  </NavDropdown.Item>
                </tr>
                <tr>
                  <NavDropdown.Item href="#action/3.3">
                    Growing with the bank
                  </NavDropdown.Item>
                </tr>
                <tr>
                  <NavDropdown.Item href="#action/3.4">
                    Coporate social responsibility
                  </NavDropdown.Item>
                </tr>
              </td>
              <td>
                <tr>
                  <NavDropdown.Item href="#action/3.4">
                    Recruitment
                  </NavDropdown.Item>
                </tr>
                <tr>
                  {" "}
                  <NavDropdown.Item href="#action/3.4">
                    Career opportunities at DFCC
                  </NavDropdown.Item>
                </tr>
                <tr></tr>
              </td>
            </table>
          </NavDropdown>
          <NavDropdown
            title="Sustainability"
            id="basic-nav-dropdown"
            renderMenuOnMount={true}
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Media"
            id="basic-nav-dropdown"
            renderMenuOnMount={true}
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          {/* <NavDropdown title="About us" id="basic-nav-dropdown"renderMenuOnMount={true}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
      <button type="button" class="btn">
        E
      </button>
      <button type="button" class="btn">
        සි
      </button>
      <button type="button" class="btn">
       கு
      </button>

      <button type="button" class="btn-locate">
        <MdLocationPin className="loc" />
        <p>locate us</p>
      </button>
      <button type="button" class="btn-contact">
        <IoCallOutline className="con" />
        <p>contact us</p>
      </button>
      <button type="button" class="btn-login">
        <AiFillLock className="log" />
        login
      </button>
    </Navbar>
  );
}

export default BasicExample;

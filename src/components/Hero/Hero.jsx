import React from "react";
import "../Hero/Hero.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { AiOutlineMenu } from "react-icons/ai";
import Slider from "../Slider/Slider";

function Hero() {
  return (
    <div className="hero-section">
      <Slider />
      <h1 className="heading">
        I want to
        <p className="line2">know about</p>
        <div className="text-box-container">
          <InputGroup className="mb-3 text-box">
            <Form.Control
              aria-label="Text input with dropdown button"
              placeholder="Choose a topic"
            />

            <DropdownButton
              variant="outline-secondary"
              title={<AiOutlineMenu />}
              id="menu-icon"
              align="end"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </div>
      </h1>
    </div>
  );
}

export default Hero;

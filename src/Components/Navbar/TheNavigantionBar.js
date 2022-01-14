import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

//Css file of component

import "./TheNavigationBar.css";

//Logo Aurelian origins
import aurelian_logo from "../../Resources/Images/Navbar/aurelian_logo.svg";
import aurelian from "../../Resources/Images/Navbar/aurelian.svg";
import search from "../../Resources/Images/Navbar/search.svg";
function TheNavigantionBar() {
  let Myriad_normal_18_ = "Myriad_normal_18_";
  let color_white = "color_white";
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#000000" }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home" className="my-1">
          <img src={aurelian_logo} alt="..." />
          <img src={aurelian} alt="..." className="mx-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              to="/"
              className={`margin_right_28 navbar_link ${Myriad_normal_18_} ${color_white}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              to="/about"
              className={`margin_right_28 navbar_link ${Myriad_normal_18_} ${color_white}`}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`margin_right_28 ${Myriad_normal_18_} ${color_white}`}
            >
              Freedom Cry
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`margin_right_28 ${Myriad_normal_18_} ${color_white}`}
            >
              Careers
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`margin_right_28 ${Myriad_normal_18_} ${color_white}`}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`margin_right_28 ${Myriad_normal_18_} ${color_white}`}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link className="margin_right_44">
              <img src={search} alt="..." />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TheNavigantionBar;

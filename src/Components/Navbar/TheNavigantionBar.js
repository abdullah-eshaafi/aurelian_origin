import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

//Css file of component

import "./TheNavigationBar.css";

//Logo Aurelian origins
import aurelian_logo from "../../Resources/Images/Navbar/aurelian_logo.svg";
import aurelian from "../../Resources/Images/Navbar/aurelian.svg";
import search from "../../Resources/Images/Navbar/search.svg";

import { NavLink, useLocation } from "react-router-dom";
function TheNavigantionBar(props) {
  const location = useLocation();

  console.log(location);

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
        <Navbar.Brand href="/" className="my-1">
          <img src={aurelian_logo} alt="..." />
          <img src={aurelian} alt="..." className="mx-2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink
              to="/"
              className={`margin_right_28 navbar_link ${Myriad_normal_18_} ${color_white}`}
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={`margin_right_28 navbar_link ${Myriad_normal_18_} ${color_white}`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/call"
              className={`margin_right_28 navbar_link ${Myriad_normal_18_} ${color_white}`}
            >
              Call of Liberty
            </NavLink>
            <NavLink
              to="/career"
              className={`margin_right_28 navbar_link ${Myriad_normal_18_} ${color_white}`}
            >
              Careers
            </NavLink>
            <NavLink
              to="/blog"
              className={`margin_right_28  navbar_link ${Myriad_normal_18_} ${color_white}`}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={`margin_right_28  navbar_link ${Myriad_normal_18_} ${color_white}`}
            >
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TheNavigantionBar;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheNavigationBar from "../Components/Navbar/TheNavigantionBar";
import "./Contact.css";
import abput_hero_bg from "../Resources/Images/about/abput_hero_bg.png";

import career_hero_img from "../Resources/Images/career/career_hero_img.png";

import Footer from "../Components/Footer/Footer";
import conatct_map from "../Resources/Images/Blog/conatct_map.png";

import location_on from "../Resources/Images/Blog/location_on.svg";
import mail from "../Resources/Images/Blog/mail.svg";
import phone from "../Resources/Images/Blog/phone.svg";
function Contact() {
  return (
    <Container fluid className="px-0 about_us_page_main_wrapper ">
      <TheNavigationBar></TheNavigationBar>
      <div className="careers_main_wrapper contact-section">
        <Container fluid className="about_section_hero_main_wrapper">
          <Container>
            <Row>
              <Col className="d-flex" lg={6}>
                <div className="about_section_hero_section">
                  <h1>Contact Us</h1>
                </div>
              </Col>
              <Col className="about_hero_img_section px-0" lg={6}>
                <div className="abput_hero_bg">
                  <img src={abput_hero_bg} alt="..."></img>
                </div>
                <div
                  className="about_hero_img_sec"
                  style={{ marginLeft: "50px" }}
                >
                  <img src={career_hero_img} alt="..."></img>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      <Container>
        <Row className="contact_input_form">
          <Col lg={6} className="d-flex justify-content-center">
            <div>
              <div className="contact_get_in_touch">
                <h4>Get in touch</h4>
              </div>
              <div className="contact_get_in_touch_para">
                <h5>We're looking forward to hear from you!</h5>
              </div>
              <div className="contact_section_input">
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="contact_section_input">
                <input type="text" placeholder="Email" />
              </div>
              <div className="contact_section_input">
                <input type="number" placeholder="Phone Number" />
              </div>
              <div className="contact_section_input">
                <textarea
                  type="text"
                  rows="4"
                  cols="50"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="contact_section_input">
                <button>Send</button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <div className="conatct_details_heading">
                <h4>our details</h4>
              </div>
              <div className="conatct_details_heading_para">
                <h3>Call us directly or pay us a visit</h3>
              </div>
              <div>
                <div className="contact_us_icon d-flex">
                  <img src={location_on} alt="..." />
                  <h3>693, Ground Floor, J2 Block, Johar Town Lahore</h3>
                </div>
              </div>
              <div>
                <div className="contact_us_icon d-flex">
                  <img src={phone} alt="..." />
                  <h3>042-35454300</h3>
                </div>
              </div>
              <div>
                <div className="contact_us_icon d-flex">
                  <img src={mail} alt="..." />
                  <h3>support@aurelianorigins.com</h3>
                </div>
              </div>
            </div>
            <div>
              <img src={conatct_map} alt="..." />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Contact;

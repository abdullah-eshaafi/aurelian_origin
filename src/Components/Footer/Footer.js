import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import footer_map from "../../Resources/Images/Footer/footer_map.png";

function Footer() {
  let iconStyles = {
    color: "white",
    fontSize: "16px",
    lineHeight: "26px",
    verticalAlign: "middle",
  };
  return (
    <div className="footer_main_wrapper">
      <Container fluid>
        <Row>
          <Col className="d-flex px-0">
            <div className="col-4 px-0 d-flex justify-content-end">
              <div className="col-8">
                <div className="footer_heading">
                  <h4>Aurelian Origins</h4>
                </div>
                <div className="col-10">
                  {" "}
                  <div className="footer_description">
                    <h5>
                      Our goal is to develop exceptionally entertaining games.
                      We believe in presenting high-quality, engaging, and
                      innovative features in our games to be the best in the
                      gaming industry.
                    </h5>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="footer_fb_icon">
                    <FaFacebookF
                      style={iconStyles}
                      className="fb_icon_hover_effect"
                      onMouseOver={(e) => (e.target.style.color = "#FFC000")}
                      onMouseOut={(e) => (e.target.style.color = "white")}
                    />
                  </div>
                  <div className="footer_fb_icon">
                    <FaLinkedinIn
                      style={iconStyles}
                      onMouseOver={(e) => (e.target.style.color = "#FFC000")}
                      onMouseOut={(e) => (e.target.style.color = "white")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <div className="col-5">
                <div className="footer_second_col_list">
                  <h5>Pages</h5>
                </div>
                <div>
                  <ul className="footer_second_col_li">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Freedom Cry</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-5">
                <div className="footer_second_col_list">
                  <h5>Contact Us</h5>
                </div>
                <div>
                  <ul className="footer_second_col_li">
                    <li className="d-flex">
                      <div style={{ marginRight: "11px", marginTop: "-2px" }}>
                        <MdOutlineLocalPostOffice
                          style={iconStyles}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#FFC000")
                          }
                          onMouseOut={(e) => (e.target.style.color = "white")}
                        />
                      </div>
                      <div>support@aurelianorigins.com</div>
                    </li>
                    <li className="d-flex">
                      <div style={{ marginRight: "11px", marginTop: "-4px" }}>
                        <BsFillTelephoneFill
                          style={iconStyles}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#FFC000")
                          }
                          onMouseOut={(e) => (e.target.style.color = "white")}
                        />
                      </div>

                      <div> 042-35454300</div>
                    </li>
                    <li className="d-flex">
                      <div style={{ marginRight: "11px", marginTop: "-2px" }}>
                        <MdLocationOn
                          style={iconStyles}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#FFC000")
                          }
                          onMouseOut={(e) => (e.target.style.color = "white")}
                        />
                      </div>
                      <div>693, Ground Floor, J2 Block, Johar Town Lahore</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-start">
              <div className="footer_img  d-flex justify-content-center col-11">
                <img src={footer_map} alt="..." />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// className="img-fluid"
export default Footer;

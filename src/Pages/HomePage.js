import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheNavigationBar from "../Components/Navbar/TheNavigantionBar";
import Slider from "../Components/Slider/TheSlider";
import "./HomePage.css";

import Footer from "../Components/Footer/Footer";

import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
function HomePage() {
  let videoURL =
    "https://terafort.s3.ap-southeast-1.amazonaws.com/Untitled.mp4";
  return (
    <div className="Homepgae_start_website">
      <TheNavigationBar />
      <Slider />

      <Container fluid className="px-0" style={{ width: "100%" }}>
        <div className="homePage-container">
          <Container className="px-0">
            <Row className="px-0 mx-0">
              <Col
                lg={5}
                className="Ghost_normal_normal color_golden px-0 mx-0 bg_color_black padding_top_bottom "
              >
                <div className="d-flex justify-content-center">
                  <Col lg={8}>
                    <Fade duration={1000} top>
                      <div className="HomePage_Who_text">
                        <h2>Who we are</h2>
                      </div>
                    </Fade>
                  </Col>
                </div>

                <div className="d-flex justify-content-end">
                  <Col lg={10}>
                    <Fade duration={1000} delay={1000}>
                      <div className="Myriad_normal_20_ color_white HomePage_Who_text">
                        <p>
                          Our goal is to develop exceptionally entertaining
                          games. We believe in presenting high-quality,
                          engaging, and innovative features in our games to be
                          the best in the gaming industry. Our focus is not just
                          development but also continuous improvement through
                          data analysis. Our unique approach will lead us to
                          excellence. We have a multi-talented team to
                          accelerate our accomplishments because for us no dream
                          is too big to achieve.
                        </p>
                      </div>
                    </Fade>
                  </Col>
                </div>
              </Col>

              <Col lg={6}>
                <Fade duration={1000} delay={1000} top distance={"100px"}>
                  <div className="who_img_padding_top">
                    <video autoPlay muted loop id="my_video">
                      <source src={videoURL} type="video/mp4" />
                    </video>
                  </div>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="homePage_bg_pic">
          <Container className="px-0">
            <div>
              <Row className="px-0 mx-0">
                <Col
                  lg={5}
                  className="Ghost_normal_normal color_golden px-0 mx-0 padding_top_bottom_second"
                >
                  <div className="d-flex justify-content-center">
                    <Col lg={8}>
                      <Fade duration={1000} top>
                        <div className="HomePage_Who_text_second">
                          <h2>What we do</h2>
                        </div>
                      </Fade>
                    </Col>
                  </div>

                  <div className="d-flex justify-content-end">
                    <Col lg={10}>
                      <Fade duration={1000} delay={1000}>
                        <div className="Myriad_normal_20_ color_white HomePage_Who_text_second">
                          <p>
                            Our team works passionately to develop marvelous
                            games to ensure high-quality visualization and the
                            best gaming experience in the world. We have started
                            working on a mega project of AAA games for the first
                            time in Pakistan. We are now more focused on
                            employee well-being by initiating the provision of
                            employee benefits.
                          </p>
                        </div>
                      </Fade>
                    </Col>
                  </div>
                </Col>
                <Col lg={6} className="who_img_padding_top"></Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="counting_numbers_Wrapper">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="col-12 d-flex counting_numbers_container flex-lg-row flex-column align-items-sm-center align-items-center">
                  <div className="col-4 d-flex justify-content-center">
                    <div className="col-12 text-center">
                      <div className="Ghost_normal_80 margin_left_number">
                        <h2>
                          <VisibilitySensor
                            partialVisibility
                            offset={{ bottom: 200 }}
                          >
                            {({ isVisible }) => (
                              <div style={{ height: 100 }}>
                                {isVisible ? (
                                  <CountUp
                                    end={50}
                                    duration={2.75}
                                    suffix="k"
                                  />
                                ) : null}
                              </div>
                            )}
                          </VisibilitySensor>
                        </h2>
                      </div>
                      <div className="text-center">
                        <h6>Total Downloads</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="col-12 text-center">
                      <div className="Ghost_normal_80 margin_left_number">
                        <h2>
                          <VisibilitySensor
                            partialVisibility
                            offset={{ bottom: 200 }}
                          >
                            {({ isVisible }) => (
                              <div style={{ height: 100 }}>
                                {isVisible ? (
                                  <CountUp
                                    end={50}
                                    duration={2.75}
                                    suffix="+"
                                  />
                                ) : null}
                              </div>
                            )}
                          </VisibilitySensor>
                        </h2>
                      </div>
                      <div>
                        <h6>Products</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="col-12 text-center">
                      <div className="Ghost_normal_80 margin_left_number">
                        <h2>
                          <VisibilitySensor
                            partialVisibility
                            offset={{ bottom: 200 }}
                          >
                            {({ isVisible }) => (
                              <div style={{ height: 100 }}>
                                {isVisible ? (
                                  <CountUp
                                    end={50}
                                    duration={2.75}
                                    suffix="M"
                                  />
                                ) : null}
                              </div>
                            )}
                          </VisibilitySensor>
                        </h2>
                      </div>
                      <div>
                        <h6>Active Users</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="Join_Us">
          <Container>
            <Row>
              <Col lg={12} className="text-center">
                <div className="Ghost_normal_100px join_us_common join_us_heading">
                  <h3>Join Us</h3>
                </div>
                <div className="text-center col-lg-12">
                  <div className="Myriad_normal_20_  join_us_common Color_1D1D1B text-center mx-auto d-flex justify-content-center join_us_desc">
                    <h4 className="col-lg-8">
                      Join our team to reshape the gaming industry through
                      innovation because we do not just provide jobs but provide
                      a career to learn and grow.
                    </h4>
                  </div>
                </div>
                <div className="join_us_common apply_now_button">
                  <Link to="/career">
                    <button id="apply_now_btn">
                      <button id="apply_second_btn">APPLY NOW</button>
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="cod_bg"></div>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;

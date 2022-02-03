import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheNavigantionBar from "../Components/Navbar/TheNavigantionBar.js";
import "./Career.css";

import career_hero_img from "../Resources/Images/career/career_hero_img.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Waqar from "../Resources/Images/career/waqar.svg";

import kh from "../Resources/Images/career/kh.svg";

import career_culture_first from "../Resources/Images/career/career_culture_first.png";

import career_culture_second from "../Resources/Images/career/career_culture_second.png";

import Heart_icon from "../Resources/Images/career/Heart_icon.svg";

import attandance from "../Resources/Images/career/attandance.svg";

import paid_leave from "../Resources/Images/career/paid_leave.svg";

import loyality from "../Resources/Images/career/loyality.svg";

import provident from "../Resources/Images/career/provident.svg";

import paid from "../Resources/Images/career/paid.svg";

import { CareerData } from "../Components/Careers/CareerData.js";

import Footer from "../Components/Footer/Footer";
import Fade from "react-reveal/Fade";

function Careers() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    {
      text: "I would describe our team as diverse and driven. Everybody is unique and talented . What makes working fun at Aurelian Origins is the broad vision that makes us virtually staying ahead of the crowd.",
      img: Waqar,
      name: "Waqar Javed",
      post: "Game Developer",
    },
    {
      text: "I would describe our team as diverse and driven. Everybody is unique and talented . What makes working fun at Aurelian Origins is the broad vision that makes us virtually staying ahead of the crowd.",
      img: Waqar,
      name: "Waqar Javed",
      post: "Game Developer",
    },
    {
      text: "I would describe our team as diverse and driven. Everybody is unique and talented . What makes working fun at Aurelian Origins is the broad vision that makes us virtually staying ahead of the crowd.",
      img: Waqar,
      name: "Waqar Javed",
      post: "Game Developer",
    },
    {
      text: "I would describe our team as diverse and driven. Everybody is unique and talented . What makes working fun at Aurelian Origins is the broad vision that makes us virtually staying ahead of the crowd.",
      img: Waqar,
      name: "Waqar Javed",
      post: "Game Developer",
    },
  ];
  return (
    <Container fluid className="px-0 about_us_page_main_wrapper ">
      <TheNavigantionBar></TheNavigantionBar>
      <div className="careers_main_wrapper">
        <Container fluid className="about_section_hero_main_wrapper">
          <Container>
            <Row>
              <Col className="d-flex" lg={6}>
                <div className="about_section_hero_section">
                  <h1>Careers</h1>
                </div>
              </Col>
              <Col
                className="about_hero_img_section px-0 d-flex justify-content-center"
                lg={6}
              >
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
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="career_msg_team">
                  <h3>Message from the team</h3>
                </div>
                <div className="col-lg-12 col-md-12 col-12">
                  <Carousel responsive={responsive}>
                    {items.map((data, i) => (
                      <div className="career_items col-lg-12 col-md-12" key={i}>
                        <div className="col-lg-12  col-md-12 d-flex justify-content-center">
                          <div className="caraousel_item_commas">
                            <h3>“</h3>
                          </div>
                          <div className="careers_items_list col-lg-10 col-md-10">
                            <p>{data.text}</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center col-lg-7 col-md-7">
                          <div className="careers_items_list_img">
                            <img src={data.img} alt="..." />
                          </div>
                          <div>
                            <div className="careers_items_list_heading">
                              <h3>{data.name}</h3>
                            </div>
                            <div className="careers_items_list_text">
                              <h4>{data.post}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-center">
              <div className="col-lg-7">
                <div className="career_msg_team_">
                  <h3>Message from HR</h3>
                </div>
                <div className="col-lg-12">
                  <div className="career_items col-lg-12">
                    <div className="col-lg-12 d-flex justify-content-center">
                      <div className="caraousel_item_commas">
                        <h3>“</h3>
                      </div>
                      <div className="careers_items_list col-lg-10">
                        <p>
                          We at Aurelian Origins put quality at the heart of
                          everything we do. Be it our games or our team, quality
                          is one of our forefront values that we do not
                          compromise on. Our work strongly reflects our undying
                          passion for creativity and innovation. Our focus is on
                          developing our employees to be the best version of
                          themselves and together we can achieve our collective
                          dreams. We aim at building an outstanding culture that
                          empowers the best talent and propels us forward in
                          achieving our mission to create the most unique games
                          ever!
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center col-lg-7">
                      <div className="careers_items_list_img">
                        <img src={kh} alt="..." />
                      </div>
                      <div>
                        <div className="careers_items_list_heading">
                          <h3>Khadeeja Zaman</h3>
                        </div>
                        <div className="careers_items_list_text">
                          <h4>HR Generalist</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="career_culture_wrapper">
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Fade duration={2000} delay={200}>
                <div className="col-lg-9">
                  <div className="career_our_culture_heading">
                    <h6>our culture</h6>
                  </div>
                  <div className="career_our_culture_text">
                    <p>
                      We believe in building a culture where employee
                      engagement, loyalty, learning, and dedication is
                      encouraged. We strive to empower our employees to step out
                      of their comfort zones and embrace new challenges for both
                      personal and professional growth.
                    </p>
                  </div>
                </div>{" "}
              </Fade>
            </Col>
            <Col lg={6}>
              <div className="career_culture_img">
                <img src={career_culture_first} alt="...." />
              </div>
            </Col>
          </Row>

          <Row className="career_culture_wrapper">
            <Col lg={6} className="order-last order-lg-first">
              <div className="career_culture_img">
                <img src={career_culture_second} alt="...." />
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex justify-content-center align-items-center"
            >
              <Fade duration={2000} delay={200}>
                <div className="col-lg-9">
                  <div className="career_our_culture_heading">
                    <h6>opportunities</h6>
                  </div>
                  <div className="career_our_culture_text">
                    <p>
                      Aurelian Origins provides excellent career opportunities
                      to those who want to explore and express their talent. If
                      you are passionate to bring innovation in the gaming, you
                      could be the ONE!
                    </p>
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center career_employee_benefite">
                <div className="Employee_Benifits_Careeer">
                  <h4>Employee Benifits</h4>
                </div>

                <div>
                  <h5>
                    Aurelian Origins is focused on providing various benefits
                    for employee wellbeing.
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="employee_benefits_wrapper">
            <Col lg={12} md={12} className="d-flex justify-content-center">
              <div className="col-lg-12  d-lg-flex justify-content-between">
                <Fade duration={2000} delay={200}>
                  <div className="col-lg-4  text-center reward_wrapper">
                    <div>
                      <img src={Heart_icon} alt="..."></img>
                    </div>
                    <div className="craeer_employee_wellBeing">
                      <p>Employee Wellbeing</p>
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} delay={400}>
                  <div className="col-lg-4  text-center reward_wrapper">
                    <div>
                      <img src={attandance} alt="..."></img>
                    </div>
                    <div className="craeer_employee_wellBeing">
                      <p>Attendance Rewards</p>
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} delay={600}>
                  <div className="col-lg-4 text-center reward_wrapper">
                    <div>
                      <img src={paid_leave} alt="..."></img>
                    </div>
                    <div className="craeer_employee_wellBeing">
                      <p>Paid Leaves</p>
                    </div>
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
          <Row className="employee_career_well_beign_second">
            <Col lg={12} className="d-flex justify-content-center">
              <div className="col-lg-12 d-lg-flex justify-content-between">
                <Fade duration={2000} delay={600}>
                  <div className="col-lg-4 text-center reward_wrapper">
                    <div>
                      <img src={loyality} alt="..."></img>
                    </div>
                    <div className="craeer_employee_wellBeing">
                      <p>Loyalty Rewards</p>
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} delay={800}>
                  <div className="col-lg-4 text-center reward_wrapper">
                    <div>
                      <img src={provident} alt="..."></img>
                    </div>
                    <div className="craeer_employee_wellBeing">
                      <p>Provident Fund</p>
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} delay={1000}>
                  <div className="col-lg-4 text-center reward_wrapper">
                    <div>
                      <img src={paid} alt="..."></img>
                    </div>
                    <div className="craeer_employee_wellBeing">
                      <p>Paid Overtime</p>
                    </div>
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="career_open_position_wrapper">
                <h4>Open positions</h4>
              </div>
            </Col>
          </Row>
          <Row>
            {CareerData.map((data, i) => (
              <Col lg={4} className="job_openings_wrapper" key={i}>
                <div className="text-center">
                  <div className="career_position_head text-center">
                    <h4>{data.text}</h4>
                  </div>
                  <div className="career_position_para text-center col-lg-12">
                    <p>{data.descL}</p>
                  </div>
                  <div className="career_position_btn">
                    <button>{data.btn}</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12} className="text-center">
              <div className="career_join_form text-center">
                <h3>Join our team</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="col-lg-12 col-12 d-lg-flex justify-content-center">
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input type="text" placeholder="First Name"></input>
                </div>
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input type="text" placeholder="Last Name"></input>
                </div>
              </div>

              <div className="col-lg-12 col-12 d-lg-flex justify-content-center">
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input type="text" placeholder="Contact Number"></input>
                </div>
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input type="text" placeholder="Email"></input>
                </div>
              </div>

              <div className="col-lg-12 col-12 d-lg-flex justify-content-center">
                <div className="col-lg-5 col-12 career_jojn_form select">
                  <select>
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    <option value="2">No JS</option>
                    <option value="3">Nice!</option>
                  </select>
                </div>
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input type="text" placeholder="City"></input>
                </div>
              </div>
              <div className="col-lg-12 col-12 d-flex justify-content-center px-0">
                <div className="col-lg-11 col-12 career_jojn_form_ d-flex justify-content-center careers_upload_file">
                  <div className="d-flex justify-content-center align-items-center content_main_last_div">
                    {" "}
                    <input type="file"></input>
                    <div>
                      {" "}
                      <h1 className="d-flex">
                        <h3>Upload</h3> your resume here
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-12 d-flex justify-content-center career_last_inpurt___">
                <div className="col-lg-11 col-12 career_jojn_form__ d-flex justify-content-center">
                  <input type="text" placeholder="Email"></input>
                </div>
              </div>
              <div className="col-lg-12 col-12 d-flex justify-content-center career_last_inpurt___">
                <div className="col-lg-11 col-12 career_jojn_form__ d-flex justify-content-center">
                  <button>SUBMIT</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ marginTop: "83px  " }}>
        <Footer></Footer>
      </div>
    </Container>
  );
}

export default Careers;

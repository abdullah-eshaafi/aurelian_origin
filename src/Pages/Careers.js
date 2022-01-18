import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheNavigantionBar from "../Components/Navbar/TheNavigantionBar.js";
import "./Career.css";
import abput_hero_bg from "../Resources/Images/about/abput_hero_bg.png";

import career_hero_img from "../Resources/Images/career/career_hero_img.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Waqar from "../Resources/Images/career/waqar.svg";

import kh from "../Resources/Images/career/kh.svg";
function Careers() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
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
              <Col className="d-flex justify-content-center px-0" lg={6}>
                <div className="about_section_hero_section">
                  <h1>Careers</h1>
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
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="col-lg-7">
                <div className="career_msg_team">
                  <h3>Message from the team</h3>
                </div>
                <div className="col-lg-12">
                  <Carousel responsive={responsive}>
                    {items.map((data, i) => (
                      <div className="career_items col-lg-12" key={i}>
                        <div className="col-lg-12 d-flex justify-content-center">
                          <div className="caraousel_item_commas">
                            <h3>“</h3>
                          </div>
                          <div className="careers_items_list col-lg-10">
                            <p>{data.text}</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center col-lg-7">
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
    </Container>
  );
}

export default Careers;

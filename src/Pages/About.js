import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheNavigantionBar from "../Components/Navbar/TheNavigantionBar";
import "./About.css";

import about_hero_img from "../Resources/Images/about/about_hero_img.png";
import abput_hero_bg from "../Resources/Images/about/abput_hero_bg.png";

import about_us_first from "../Resources/Images/about/about_us_first.png";
import about_us_second from "../Resources/Images/about/about_us_second.png";
import about_us_three from "../Resources/Images/about/about_us_three.png";
import about_us_four from "../Resources/Images/about/about_us_four.png";

import AboutTextImgSec from "../Components/About/AboutTextImgSec";

import about_respect from "../Resources/Images/about/about_respect.png";

import AboutElements from "../Components/About/AboutElements";

import about_creativity from "../Resources/Images/about/about_creativity.png";
import about_passion from "../Resources/Images/about/about_passion.png";
import about_integrity from "../Resources/Images/about/about_integrity.png";

import Ceo_Ustad from "../Resources/Images/about/Ceo_Ustad.png";

import Footer from "../Components/Footer/Footer";

import Fade from "react-reveal/Fade";

import image from "../Resources/Images/career/image.jpg";

// about_creativity
function About() {
  return (
    <Container fluid className="px-0 about_us_page_main_wrapper">
      <TheNavigantionBar></TheNavigantionBar>
      <Container fluid className="about_section_hero_main_wrapper">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center" lg={6}>
              <div className="about_section_hero_section">
                <h1>About us</h1>
              </div>
            </Col>
            <Col className="about_hero_img_section px-0" lg={6}>
              <div className="about_hero_img_sec">
                <img src={abput_hero_bg} alt="..."></img>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <div>
        <AboutTextImgSec
          title="The story so far"
          text="  Ever since Aurelian Origins got its feet on the ground in
                February 2021, its guiding purpose has been to develop
                high-quality games with unique features that will bring fantasy
                and reality in tune."
          img={about_us_first}
          orderfirst={"order-first"}
          orderLast={"order-last"}
          content="center"
          class_="about_section_text_wrapper"
          classImg="about_us_first"
          classText="about_story_far"
          pos={"right"}
          c1="7"
          c2="5"
        />
      </div>
      <div>
        <AboutTextImgSec
          title="AIM"
          text="To be the best #1 gaming company in the world."
          img={about_us_second}
          orderfirst={"order-lg-last order-first"}
          orderLast={"order-first"}
          content="start"
          class_="about_section_text_wrapper_second"
          classImg="about_us_second"
          classText="about_story_far_second"
          pos={"left"}
        />
      </div>
      <div>
        <AboutTextImgSec
          title="VISION"
          text="To create a strong influence  in guiding the gaming industry to the top of entertainment."
          img={about_us_three}
          orderfirst={"order-first"}
          orderLast={"order-last"}
          content="end"
          class_="about_section_text_wrapper_third"
          classImg="about_us_second"
          classText="about_story_far_third"
        />
      </div>
      <div>
        <AboutTextImgSec
          title="MISSION"
          text="Our Mission is to create high quality, engaging, entertaining, and unique games for all platforms to provide an outstanding user experience and to enable talent in reaching their full potential through innovative tools and technology to lead and transform the gaming industry in all aspects."
          img={about_us_four}
          orderfirst={"order-lg-last order-first"}
          orderLast={"order-first"}
          content="start"
          class_="about_section_text_wrapper_second"
          classImg="about_us_second"
          classText="about_story_far_second"
        />
      </div>
      <Row>
        <Col>
          <div className="about_yellow_line"></div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Fade duration={2000} delay={200}>
            <div className="about_us_values_sec">
              <h3>our values</h3>
            </div>
            <div className="d-flex justify-content-center">
              <div className="about_us_values_sec-para col-lg-6">
                <p>
                  Our core values are the essential beliefs that are important
                  to us and guide our behavior and actions at all times. They
                  are timeless and enduring guiding principles that require no
                  exception or justifications. They hold value to Aurelian
                  Origins and all its employees and customers.
                </p>
              </div>
            </div>
          </Fade>
        </Col>
      </Row>
      <div className="about_element_main_wrapper">
        <div>
          <Fade duration={2000} delay={200}>
            <AboutElements
              title="Respect"
              text="  Respect guides us in our daily interactions. We encourage our
                team to express their opinions. We strive to create a culture
                where employees are heard and valued for their ideas. It helps
                us to move forward in a healthy work environment."
              img={about_respect}
              orderfirst={"order-xl-first order-last"}
              orderLast={"order-last"}
            />
          </Fade>
        </div>
        <div>
          <Fade duration={2000} delay={400}>
            <AboutElements
              title="Collaboration"
              text="We push our team to work collectively without losing their individuality. Through honest communication we build trust and share knowledge to achieve our common goal. Collaboration is the key element to get our team aligned.          "
              img={about_respect}
              orderfirst={"order-last"}
              orderLast={"order-xl-first order-last"}
            />
          </Fade>
        </div>
        <div>
          <Fade duration={2000} delay={600}>
            <AboutElements
              title="Creativity"
              text="We inspire novel ideas in our team that bring originality in our work. This fuels innovation and challenges our way of thinking that ultimately leads to big ideas. Such experiments fully stimulate the team and enable them to be at their creative best.
          "
              img={about_creativity}
              orderfirst={"order-xl-first order-last"}
              orderLast={"order-last"}
            />
          </Fade>
        </div>
        <div>
          <Fade duration={2000} delay={800}>
            <AboutElements
              title="Passion"
              text="We generate excitement through passion for what we do. With passion we nurture ideas, inspire excellence and find creative ways to eliminate obstacles. Our passion for our core purpose gives us courage to reach beyond our comfort zone.
          "
              img={about_passion}
              orderfirst={"order-last"}
              orderLast={"order-xl-first order-last"}
            />
          </Fade>
        </div>
        <div>
          <Fade duration={2000} delay={1000}>
            <AboutElements
              title="Integrity"
              text="Integrity is the foundation of our organization. We are admired for our commitment to honesty and trustworthiness. We do the right thing, even when no one is watching. We do the right thing, even if it’s the hardest thing to do.
          "
              img={about_integrity}
              orderfirst={"order-xl-first order-last"}
              orderLast={"order-last"}
              dis="none"
            />
          </Fade>
        </div>
      </div>
      <div className="element_bottome_yellow_line"></div>
      <Container>
        <Row>
          <Col lg={7} className="px-4 d-flex justify-content-center">
            <div className="col-lg-12">
              <div className="ceo_message_about">
                <h4>message from ceo</h4>
              </div>
              <div className="ceo_message_about_para">
                <p>
                  There is a highly competitive global environment in the gaming
                  industry. This is a pressing challenge for countries like
                  Pakistan, where technology has hindered the upgradation of the
                  gaming industry. Pakistan is not just facing a lack of
                  advancement in technology but also experiencing unemployment
                  and lack of innovation. Lack of innovation has led to the
                  downfall of gaming industry especially of high-quality games.
                  High-quality games are still rare occurence in Pakistan due to
                  primitive technology and conventional use of resources.
                </p>
              </div>
              <div className="ceo_message_about_para">
                <p>
                  Therefore, it is desperately needed to overcome this barrier
                  without wasting further time. Aurelian Origins is determined
                  to put all its efforts to innovate high-quality games through
                  advancement in technology with judicious use of resources.
                  Aurelian Origins is more than ready to provide opportunities
                  to those who are passionate and want to bring novelty to the
                  gaming industry.
                </p>
              </div>
              <div className="ceo_message_about_para">
                <p>
                  We believe in empowering our talent to develop entertaining
                  and engaging games. We have built a learning environment where
                  people are encouraged to explore new and emerging trends in
                  the gaming industry. We do not just focus on developing
                  high-quality games but we also believe in developing our
                  employees as they are our biggest asset and true partners in
                  our vision. With passion, integrity and innovation, we put
                  forward selfless devotion to our profession that leads us to
                  present outstanding and exceptional games for you.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={5}
            className="px-0 d-flex justify-content-center justify-content-sm-center order-lg-last order-first"
          >
            <div className="col-lg-10 text-center">
              <div className="ceo_img_padding">
                <img src={Ceo_Ustad} alt=".."></img>
              </div>
              <div className="ceo_about_eleement">
                <h4>Mr. Saif Ullah Siddique</h4>
              </div>
              <div className="ceo_about_eleement">
                <h4> CEO Aurelian Origins</h4>
              </div>
            </div>
          </Col>{" "}
        </Row>
      </Container>
      <div className="about_footer">
        <Footer />
      </div>
    </Container>
  );
}

export default About;

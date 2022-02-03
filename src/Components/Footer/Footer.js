import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import "./Footer.css";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import footer_map from "../../Resources/Images/Footer/footer_map.png";

import close from "../../Resources/Images/Footer/close.svg";

import axios from "axios";

function Footer() {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex for Email.
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState("");
  const [emailClass, setEmailClass] = useState("");

  const [error_email, setError_email] = useState("");
  const [success_message, setSuccess_Message] = useState("");

  const handleSendMessage = () => {
    // console.log("working");
    if (email === "") {
      setEmailClass("error-field3");
      setError_email("Please enter a valid email");

      if (email !== "") {
        if (email.match(regexEmail)) {
          setEmailClass("");
          setError_email("");
        }
      }
    } else {
      if (email.match(regexEmail)) {
        // console.log("email valid");
        setEmailClass("");
        setError_email("");

        // console.log(Name + " " + number + " " + email + " " + text);
        Handle_Call_API();
      } else {
        // console.log("email invalid");
        setError_email("Please enter a valid email");
        setEmailClass("error-field3");
      }
    }
  };

  const Handle_Call_API = (e) => {
    let data = {
      email: email,
    };
    setSpiner("spinner-border");

    // console.log(
    //   data.full_name + " " + data.phone + " " + data.email + " " + data.message
    // );
    // console.log(data.full_name);

    axios
      .post("http://192.168.1.24:8000/api/subscribeChannel", data)
      .then((r) => {
        console.log(r.status);
        // setPhoneNumber("");
        if (r.status === 200) {
          // console.log("dfgrf");
          // setPhoneNumber("");
          setSuccess_Message("Sent successfully");
          setSpiner("");
          setTimeout((e) => {
            setSuccess_Message("");
            setEmail("");
            setSpiner("");
          }, 2000);
        }
      })
      .catch((e) => {});
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailClass("");
    setError_email("");
    // console.log(email)
  };

  const handleEmailValidate = (e) => {
    if (email === "") {
      setError_email("");
      setEmailClass("");
    }
    if (email !== "") {
      if (email.match(regexEmail)) {
        setError_email("");
      } else {
        setEmailClass("error-field3");
        setError_email("Please enter a valid email");
      }
    }
  };

  const [lgShow, setLgShow] = useState(false);

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
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
          <Col className="d-xl-flex d-block px-0">
            <div className="col-xl-4 col-lg-12 px-0 d-flex justify-content-xl-end justify-content-center">
              <div className="col-xl-8 col-8">
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
            <div className="col-xl-4 d-xl-flex justify-content-xl-center d-block">
              <div className="col-xl-5 col-8 d-block mx-auto">
                <div className="footer_second_col_list">
                  <h5>Pages</h5>
                </div>
                <div>
                  <ul className="footer_second_col_li">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Call of liberty</li>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-5 col-8 d-block mx-auto">
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
            <div className="col-xl-4 col-12 d-flex justify-content-xl-start justify-content-center">
              <div className="footer_img  d-flex justify-content-center col-xl-11 ">
                <img src={footer_map} alt="..." className="img-fluid" />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} md={12} className="d-flexjustify-content-center">
            <div className="col-lg-8 col-12">
              <ul className="footer_bootom">
                {values.map((v, idx) => (
                  <li key={idx} onClick={() => handleShow(v)}>
                    Privacy Policy
                    {typeof v === "string" && `below ${v.split("-")[0]}`}
                  </li>
                ))}

                <li>Code of Conduct</li>
                <li>Support</li>
                <li onClick={() => setLgShow(true)}>Subscribe</li>
              </ul>
            </div>
          </Col>
          <Col xl={5} md={12}>
            <div className="text-xl-end text-center footer_right_reserved">
              <h4>2021 © Aurelian origins | All Rights Reserved</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Modal
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <div className="privacy_modal_header">
                    <h2>Privacy Policy</h2>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="privacy_modal_text">
                    <p>
                      Aurelian Origins and its affiliates ("Company" or "We" or
                      "Us" or "Our") respect the privacy of its users ("User" or
                      "You"). We are committed to guard our user's data. We
                      believe that you have a right to know our implementations
                      regarding the data we collect for Facebook or third party
                      Advertisement serving technologies, Google Analytics and
                      firebase system, and why and how we use this data.
                      Aurelian Origins uses Google Analytics, a web analytic
                      service offered by Google Inc. ("Google") as an analytic
                      metrics tool in our games to collect data when user plays
                      games on their devices.
                    </p>
                  </div>
                  <div className="collection_of_data">
                    <h4>Collection of personal data:</h4>
                  </div>
                  <div className="privacy_modal_text">
                    <p>
                      We or stakeholders may collect your personal data i.e.
                      First name, Last name, Phone number, Device ID’s, City,
                      Browser data and Email address directly or indirectly.
                      This data is used for your identification.
                    </p>
                  </div>
                  <div className="collection_of_data">
                    <h4>Collection of non-personal data:</h4>
                  </div>
                  <div className="privacy_modal_text">
                    <p>
                      We or stakeholders may collect information about your
                      software, applications and hardware, hardware,
                      advertisement(s) served, length of your time a billboard
                      was visible, other Internet and website usage data, sites
                      and mobile websites that you have viewed including date
                      and time, area of interest type, size of the
                      advertisement, advertisement response (if any), and angle
                      of view. The preceding data could also be used and
                      disclosed per this policy and therefore the privacy policy
                      of the corporate providing the ad serving technology.
                    </p>
                  </div>

                  <div className="collection_of_data">
                    <h4>Why do we collect data?</h4>
                  </div>
                  <div className="privacy_modal_text">
                    <p>
                      We collect data to verify and ensure payments (if any) for
                      providing you the products and services you request. Data
                      is important to us to find your area of interest and to
                      provide you the functions you want to have, to respond to
                      your queries, to send you marketing and promotion
                      materials, to contact you for rewards you have got. The
                      data may be used by us for administrative, analytical,
                      research, optimization, security and other purposes.
                      Specifically, we may use your Non-Personal Information to
                      help us learn more about your gaming activities and
                      understand your preferences so that we can personalize
                      your experience, provide you with in-game offers and
                      notifications that are tailored to you, and enhance your
                      overall gaming experience.
                    </p>
                  </div>
                  <div className="privacy_modal_text">
                    <p>
                      Aurelian Origins website may employ assistant or third
                      party for tracking pixels or other technologies to collect
                      data as a result of ad serving through our website. Some
                      dynamic advertisement serving technology enable
                      advertising to be temporarily uploaded on the website. We
                      or third parties utilize the advertisement serving
                      technology for data such as age and gender logged from
                      your hardware or device to make sure that appropriate
                      advertising is presented within the website to calculate
                      or control the number of unique and repeat views of a
                      given ad, and/or deliver ads that relate to your interest
                      and measure the potency of ad campaigns.
                    </p>
                  </div>

                  <div className="collection_of_data">
                    <h4>Data Disclosure:</h4>
                  </div>

                  <div>
                    <ul className="privacy_modal_text">
                      <li>
                        To implement any applicable law, regulation, legal
                        process, subpoena or governmental request
                      </li>
                      <li>
                        To check, secure, or otherwise location fraud, security
                        or technical issues
                      </li>

                      <li>
                        To respond to claims that any content published on the
                        Service violates any right of a stakeholders
                      </li>

                      <li>
                        To save the rights, treasure, or personal safety of the
                        Organization, it’s Users or the general public
                      </li>
                      <li>
                        When Company is making any change in control, including
                        by means of combine, acquisition or purchase of all or
                        substantially all of the assets of Company
                      </li>
                      <li>
                        To let our stakeholders and recognition serve you with
                        contextual and relevant advertisements only
                      </li>
                      <li>
                        Aurelian Origins does not allow any personal data to be
                        directly or indirectly linked to the persistent
                        identifier.{" "}
                      </li>
                      <li>
                        Aurelian Origins does not expose or use personal data
                        without your consent.
                      </li>
                    </ul>
                  </div>

                  <div className="collection_of_data">
                    <h4>Policy about Children:</h4>
                  </div>
                  <div className="privacy_modal_text">
                    <p>
                      We develop games for all ages but we do marketing
                      according to the age limits.
                    </p>
                  </div>

                  <div className="collection_of_data">
                    <h4>Change in Policy:</h4>
                  </div>
                  <div className="privacy_modal_text">
                    <p>
                      We may change this policy at any time and if we do, we
                      shall post the updated policy on this page and send you an
                      email notification for the same. If you still use Aurelian
                      Origins after those changes are in effect, you comply with
                      the new policy. If the changes are significant, we may
                      provide a more prominent notice or get your consent, as
                      needed by law.
                    </p>
                  </div>

                  <div className="collection_of_data">
                    <h4>Queries: </h4>
                  </div>
                  <div className="privacy_modal_text">
                    <p>
                      If you have any questions regarding our Privacy Policy or
                      you want to get in touch with us, you are most welcome to
                      send us an email at the following address:
                      support@aurelianorigins.com and we will make an effort to
                      reply within a reasonable time frame.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </div>

      <div>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Row>
            <Col lg={6}>
              <div className="subscribe_modal_img "></div>
            </Col>
            <Col lg={6}>
              <div
                className="d-flex justify-content-end close_btn_img"
                onClick={() => setLgShow(false)}
              >
                <img src={close} alt="..."></img>
              </div>
              <div className="subscribe_modal_align">
                <div>
                  <div>
                    <div className="m_subscribe_text">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="m_subscribe_para">
                      <p>
                        Get new updates on our latest products. Don’t miss out!
                      </p>
                    </div>
                    <div>
                      <div className="m_subscribe_para_input d-flex">
                        <input
                          type="text"
                          name="input-text"
                          id="input-text"
                          required
                          spellCheck="false"
                          className={emailClass}
                          value={email}
                          onChange={handleEmailChange}
                          onBlur={handleEmailValidate}
                          autoComplete="off"
                          placeholder="your email"
                        />

                        <button onClick={handleSendMessage} type="button">
                          {" "}
                          SUBSCRIBE
                        </button>
                      </div>
                      <div className={spiner}></div>
                      <p className={emailClass}>{error_email}</p>
                      <p className={"m-0"}>{success_message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    </div>
  );
}

// className="img-fluid"
export default Footer;

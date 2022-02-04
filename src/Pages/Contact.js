import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheNavigationBar from "../Components/Navbar/TheNavigantionBar";
import "./Contact.css";

import career_hero_img from "../Resources/Images/career/career_hero_img.png";

import Footer from "../Components/Footer/Footer";
import conatct_map from "../Resources/Images/Blog/conatct_map.png";

import location_on from "../Resources/Images/Blog/location_on.svg";
import mail from "../Resources/Images/Blog/mail.svg";
import phone from "../Resources/Images/Blog/phone.svg";

import axios from "axios";

function Contact() {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex for Email.

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState("");

  const [nameClass, setNameClass] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const [phoneClass, setPhoneClass] = useState("");
  const [textclass, setTextClass] = useState("");

  const [error_email, setError_email] = useState("");
  const [error_name, setError_name] = useState("");
  const [error_phone, setError_phone] = useState("");
  const [error_text, setError_text] = useState("");
  const [success_message, setSuccess_Message] = useState("");

  const handleSendMessage = () => {
    // console.log("working");
    if (Name === "" || email === "" || PhoneNumber === "" || text === "") {
      setNameClass("error-field3");
      setError_name("Please enter a valid name");
      setEmailClass("error-field3");
      setError_email("Please enter a valid email");
      setPhoneClass("error-field3");
      setError_phone("Please enter a valid phone number");
      setTextClass("error-field3");
      setError_text("Please write your message");
      if (Name !== "") {
        setNameClass("");
        setError_name("");
      }
      if (email !== "") {
        if (email.match(regexEmail)) {
          setEmailClass("");
          setError_email("");
        }
      }
      if (PhoneNumber !== "") {
        // setPhoneClass("");
        handlePhoneValidate();
        // console.log(number);
      }
      if (text !== "") {
        // setTextClass("");
        // setError_text("");
        handleTextValidate();
        // console.log("adf");
      }
    } else {
      if (email.match(regexEmail)) {
        // console.log("email valid");
        setEmailClass("");
        setError_email("");
        setPhoneClass("");

        // console.log(Name + " " + number + " " + email + " " + text);
        Handle_Call_API();
      } else {
        // console.log("email invalid");
        setError_email("Please enter a valid email");
        setEmailClass("error-field3");
        setTextClass("");
      }
    }
  };

  const Handle_Call_API = (e) => {
    let data = {
      full_name: Name,

      email: email,
      phone: PhoneNumber,
      message: text,
    };
    setSpiner("spinner-border");

    // console.log(
    //   data.full_name + " " + data.phone + " " + data.email + " " + data.message
    // );
    // console.log(data.full_name);

    axios
      .post("https://api.aurelianorigins.com/api/contactUs", data)
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
            setName("");
            setEmail("");
            setPhoneNumber("");
            setText("");
            setSpiner("");
          }, 2000);
        }
      })
      .catch((e) => {});
  };
  const handleNumberChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^0-9]/gi, "");
    setPhoneNumber(e.target.value);
    if (PhoneNumber === "") {
      setPhoneClass("");
      setError_phone("");
    }
  };

  const handleNameChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^A-Za-z\s]/gi, "");
    setName(e.target.value);
    setNameClass("");
    setError_name("");

    // console.log(Name)
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailClass("");
    setError_email("");
    // console.log(email)
  };

  const handletextChange = (e) => {
    setText(e.target.value);
    setTextClass("");
    setError_text("");
    // console.log(text)
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

  //===================================== handle name Validate function  ===============================
  const handleNameValidate = (e) => {
    if (Name === "") {
      setNameClass("");
      setError_name("");
    }
  };

  //===================================== handle Phone Validate function  ===============================
  const handlePhoneValidate = (e) => {
    if (PhoneNumber === "") {
      setPhoneClass("");
      setError_phone("");
    }
    if (PhoneNumber.length < 11) {
      setPhoneClass("error-field3");
      setError_phone("Please enter a valid phone number");
    } else {
      setPhoneClass("");
      setError_phone("");
    }
  };
  //===================================== handle Text Validate function  ===============================
  const handleTextValidate = (e) => {
    if (text === "") {
      setTextClass("");
      setError_text("");
    }
    if (text !== "") {
      let text_length = parseInt(text.length);
      if (text_length <= 7) {
        // console.log("checkmate")
        setTextClass("error-field3");
        setError_text("Minimum length of 7 Characters required");
      } else {
        setError_text("");
        setTextClass("");
      }
    }
  };

  return (
    <Container fluid className="px-0 about_us_page_main_wrapper ">
      <TheNavigationBar></TheNavigationBar>
      <div className="careers_main_wrapper contact-section">
        <Container fluid className="about_section_hero_main_wrapper">
          <Container>
            <Row>
              <Col className="d-flex justify-content-center" lg={6}>
                <div className="about_section_hero_section">
                  <h1>Contact Us</h1>
                </div>
              </Col>
              <Col className="about_hero_img_section px-0" lg={6}>
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
                <input
                  type="text"
                  name="input-text"
                  id="input-text"
                  required
                  spellCheck="false"
                  value={Name}
                  className={nameClass}
                  autoComplete="off"
                  onChange={handleNameChange}
                  onBlur={handleNameValidate}
                  placeholder="Full Name"
                />
                <p className={nameClass}>{error_name}</p>
              </div>
              <div className="contact_section_input">
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
                  placeholder="Email"
                />

                <p className={emailClass}>{error_email}</p>
              </div>
              <div className="contact_section_input">
                <input
                  type="text"
                  maxLength={15}
                  required
                  spellCheck="false"
                  className={phoneClass}
                  value={PhoneNumber}
                  onChange={handleNumberChange}
                  onBlur={handlePhoneValidate}
                  placeholder="Phone Number"
                />
                <p className={phoneClass}>{error_phone}</p>
              </div>
              <div className="contact_section_input">
                <textarea
                  type="text"
                  id="input-text"
                  name="input-text"
                  rows="4"
                  required
                  cols="50"
                  className={textclass}
                  value={text}
                  onChange={handletextChange}
                  onBlur={handleTextValidate}
                  placeholder="Message"
                ></textarea>

                <p className={textclass}>{error_text}</p>
              </div>
              <div className="contact_section_input">
                <button onClick={handleSendMessage} type="button">
                  <div className={spiner}></div>
                  Send
                </button>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            className="order-first order-lg-last .contact_input___form"
          >
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
              <a href="https://g.page/aureliansolutions?share" target="_blank">
                <img src={conatct_map} alt="..." />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default Contact;

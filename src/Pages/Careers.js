import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TheNavigantionBar from "../Components/Navbar/TheNavigantionBar.js";
import "./Career.css";

import axios from "axios";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Waqar from "../Resources/Images/career/waqar.svg";

import mohsin from "../Resources/Images/career/mohsin.svg";

import kh from "../Resources/Images/career/kh.svg";

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
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const careerList = [
    "Applying For",
    "Junior Unity Developer",
    "Post Production CG Artist",
    "Concept Artist",
    "3D Modeler",
    "3D Animator",
    "Art Director",
    "HR Officer",
  ];

  const [spiner, setSpiner] = useState("");
  const [success_message, setSuccess_Message] = useState("");

  const [full_name, setFullName] = useState("");
  const [error_name, setError_name] = useState("");
  const [nameClass, setNameClass] = useState("");

  const [last_name, setlastName] = useState("");
  const [error_lname, setError_lname] = useState("");
  const [lnameLClass, setLNameClass] = useState("");

  const [PhoneNumber, setPhoneNumber] = useState("");
  const [phoneClass, setPhoneClass] = useState("");
  const [error_phone, setError_phone] = useState("");

  const [email, setEmail] = useState("");
  const [emailClass, setEmailClass] = useState("");
  const [error_email, setError_email] = useState("");

  const [apply_for, setApplyFor] = useState("");
  const [error_apply, setError_apply] = useState("");
  const [applyClass, setapplyClass] = useState("");

  const [city, setCity] = useState("");
  const [error_city, setError_city] = useState("");
  const [cityclass, setClassCity] = useState("");

  const [attachments, setAttachment] = useState("");
  const [error_file, setError_file] = useState("");
  const [fileClass, setfileClass] = useState("");

  const [portfolio, setportfolio] = useState("");
  const [error_portfolio, setError_portfolio] = useState("");
  const [portfolioClass, setportfolioClass] = useState("");

  console.log(attachments.name);

  const handleNameChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^A-Za-z\s]/gi, "");
    setFullName(e.target.value);
    setNameClass("");
    setError_name("");

    // console.log(Name)
  };

  const handleNameValidate = (e) => {
    if (full_name === "") {
      setNameClass("");
      setError_name("");
    }
  };
  const handlePortfolioChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^A-Za-z\s]/gi, "");
    setportfolio(e.target.value);
    setError_portfolio("");
    setError_portfolio("");
  };

  const handleLastNameChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^A-Za-z\s]/gi, "");
    setlastName(e.target.value);
    setLNameClass("");
    setError_lname("");
  };

  const handleLNameValidate = (e) => {
    if (last_name === "") {
      setLNameClass("");
      setError_lname("");
    }
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

  const handleApplyChange = (e) => {
    setapplyClass("");
    setError_apply("");
    // console.log(text)
  };

  //===================================== handle setApplyFor input field function  ===============================
  const handleApplyFor = (e) => {
    setApplyFor(e.target.value);
  };

  const handleAttachment = (file) => {
    setAttachment(file[0]);
    if (attachments !== "") {
      setError_file("");
    }
    // console.log(attachment)
  };
  //===================================== handle submit function  ===============================
  const handlefileAttachment = (file) => {
    if (attachments !== "") {
      setfileClass("");
      setError_file("");
    }
    if (attachments === "") {
      setfileClass("");
      setError_file("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailClass("");
    setError_email("");
    // console.log(email)
  };
  //===================================== handle email Validate function  ===============================
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

  const handleCityChange = (e) => {
    let element = e.target;
    element.value = element.value.replace(/[^A-Za-z\s]/gi, "");
    setCity(e.target.value);
    setClassCity("");
    setError_city("");
  };

  const handleSubmit = (e) => {
    if (
      full_name === "" ||
      last_name === "" ||
      PhoneNumber === "" ||
      apply_for === "" ||
      email === "" ||
      attachments === ""
    ) {
      setNameClass("error-field3");
      setError_name("Please enter a valid name");
      setEmailClass("error-field3");
      setError_email("Please enter a valid email");
      setapplyClass("error-field3");
      setError_apply("Please select a field");
      setfileClass("error-field3");
      setError_file("Please upload your resume");
      setError_lname("Please enter a valid name");
      setLNameClass("error-field3");
      setPhoneClass("error-field3");
      setError_phone("Please enter a Phone Number");

      if (full_name !== "") {
        setNameClass("");
        setError_name("");
      }
      if (last_name !== "") {
        setError_lname("");
        setLNameClass("");
      }

      if (PhoneNumber !== "") {
        setError_phone("");
        setPhoneClass("");
      }
      if (email !== "") {
        if (email.match(regexEmail)) {
          setEmailClass("");
          setError_email("");
        }
      }
      if (apply_for !== "") {
        setapplyClass("");
        setError_apply("");
      }
      if (attachments !== "") {
        setfileClass("");
        setError_file("");
      }
    } else {
      setSpiner("spinner-border");
      const fData = new FormData();
      fData.append("full_name", full_name);
      fData.append("last_name", last_name);
      fData.append("email", email);
      fData.append("apply_for", apply_for);
      fData.append("attachments", attachments);
      fData.append("city", city);
      fData.append("portfolio_link", portfolio);
      fData.append("contact_no", PhoneNumber);

      axios
        .post("https://api.aurelianorigins.com/api/applyForCareer", fData)
        .then((r) => {
          console.log(r);
          if (r.status === 200) {
            setSpiner("");
            setSuccess_Message("Sent successfully");
            setTimeout((e) => {
              setSuccess_Message("");
              setSpiner("");
              setFullName("");
              setEmail("");
              setApplyFor("");
              setAttachment("");
            }, 2000);
            // console.log("dfgrf");
          }
        })
        .catch((e) => {
          setSpiner("");
        });
    }
  };

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
      text: "Teamwork, transparency and respect are the values that Aurelian Origins put into an action every single day. The company promotes professional staff to ensure diversification and innovation to bring the best out of the team.    ",
      img: "https://aurilian.s3.us-east-2.amazonaws.com/compresspng+(2)/najam-min.png",
      name: "Najam Saqib",
      post: "Team Lead",
    },
    {
      text: "I would describe our team as diverse and driven. Everybody is unique and talented and working with full efforts. What makes working fun at Aurelian Origins is the broad vision that makes us virtually staying ahead of the crowd.",
      img: Waqar,
      name: "Waqar Javed",
      post: "Game Developer",
    },

    {
      text: "I worked here on some good titles for more than 2 years and experienced a substantial growth in my learning and skills. I would say this is one of the best place where you get various opportunities to try new things in your domain.",
      img: "https://aurilian.s3.us-east-2.amazonaws.com/compresspng+(2)/waseeq-min.png",
      name: "Waseeq Butt",
      post: "Sr Unity Developer",
    },
    {
      text: "Aurelian Origins on their own ground provide many opportunities to grab. There is a good work-life balance over here. It is great to work at Aurelian Origins.Really enjoyed working with Aurelian Origins in a calm environment",
      img: mohsin,
      name: "Mohsin Zahoor",
      post: "3D Character Artist",
    },
  ];
  return (
    <Container fluid className="px-0 about_us_page_main_wrapper ">
      <TheNavigantionBar></TheNavigantionBar>
      <div className="careers_main_wrapper">
        <Container fluid className="about_section_hero_main_wrapper">
          <Container>
            <Row>
              <Col className="d-flex " lg={6}>
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
                  <img
                    src="https://aurilian.s3.us-east-2.amazonaws.com/compresspng+(2)/career_hero_img-min.png"
                    alt="..."
                  ></img>
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
                        <div className="d-flex align-items-center caraousel_image_text col-lg-8 col-md-8">
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
                </div>
              </Fade>
            </Col>
            <Col lg={6}>
              <div className="career_culture_img">
                <img
                  src="https://aurilian.s3.us-east-2.amazonaws.com/compresspng+(2)/career_culture_first-min.png"
                  alt="...."
                />
              </div>
            </Col>
          </Row>

          <Row className="career_culture_wrapper">
            <Col lg={6} className="order-last order-lg-first">
              <div className="career_culture_img">
                <img
                  src="https://aurilian.s3.us-east-2.amazonaws.com/compresspng+(2)/career_culture_second-min.png"
                  alt="...."
                />
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
                <div className="col-lg-4  text-center reward_wrapper">
                  <div>
                    <img src={Heart_icon} alt="..."></img>
                  </div>
                  <div className="craeer_employee_wellBeing">
                    <p>Employee Wellbeing</p>
                  </div>
                </div>

                <div className="col-lg-4  text-center reward_wrapper">
                  <div>
                    <img src={attandance} alt="..."></img>
                  </div>
                  <div className="craeer_employee_wellBeing">
                    <p>Attendance Rewards</p>
                  </div>
                </div>

                <div className="col-lg-4 text-center reward_wrapper">
                  <div>
                    <img src={paid_leave} alt="..."></img>
                  </div>
                  <div className="craeer_employee_wellBeing">
                    <p>Paid Leaves</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="employee_career_well_beign_second">
            <Col lg={12} className="d-flex justify-content-center">
              <div className="col-lg-12 d-lg-flex justify-content-between">
                <div className="col-lg-4 text-center reward_wrapper">
                  <div>
                    <img src={loyality} alt="..."></img>
                  </div>
                  <div className="craeer_employee_wellBeing">
                    <p>Loyalty Rewards</p>
                  </div>
                </div>

                <div className="col-lg-4 text-center reward_wrapper">
                  <div>
                    <img src={provident} alt="..."></img>
                  </div>
                  <div className="craeer_employee_wellBeing">
                    <p>Provident Fund</p>
                  </div>
                </div>

                <div className="col-lg-4 text-center reward_wrapper">
                  <div>
                    <img src={paid} alt="..."></img>
                  </div>
                  <div className="craeer_employee_wellBeing">
                    <p>Paid Overtime</p>
                  </div>
                </div>
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
                  <a href="#title">
                    <div className="career_position_btn">
                      <button>{data.btn}</button>
                    </div>{" "}
                  </a>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col lg={12} className="text-center">
              <div className="career_join_form text-center" id="title">
                <h3>Join our team</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="col-lg-12 col-12 d-lg-flex justify-content-center">
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input
                    type="text"
                    name="full_name"
                    id="input-text"
                    value={full_name}
                    className={nameClass}
                    required
                    spellCheck="false"
                    onChange={handleNameChange}
                    onBlur={handleNameValidate}
                    autoComplete={"off"}
                    placeholder="First Name"
                  ></input>
                  <p className={nameClass}>{error_name}</p>
                </div>
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input
                    type="text"
                    name="last_name"
                    id="input-text"
                    value={last_name}
                    className={lnameLClass}
                    required
                    spellCheck="false"
                    onChange={handleLastNameChange}
                    onBlur={handleLNameValidate}
                    autoComplete={"off"}
                    placeholder="Last Name"
                  ></input>
                  <p className={lnameLClass}>{error_lname}</p>
                </div>
              </div>

              <div className="col-lg-12 col-12 d-lg-flex justify-content-center">
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input
                    type="text"
                    maxLength={15}
                    required
                    spellCheck="false"
                    className={phoneClass}
                    value={PhoneNumber}
                    onChange={handleNumberChange}
                    onBlur={handlePhoneValidate}
                    placeholder="Contact Number"
                  ></input>
                  <p className={phoneClass}>{error_phone}</p>
                </div>
                <div className="col-lg-5 col-12 career_jojn_form">
                  <input
                    type="text"
                    name="email"
                    id="input-text"
                    required
                    spellCheck="false"
                    className={emailClass}
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleEmailValidate}
                    autoComplete={"off"}
                    placeholder="Email"
                  ></input>
                  <p className={emailClass}>{error_email}</p>
                </div>
              </div>

              <div className="col-lg-12 col-12 d-lg-flex justify-content-center">
                <div className="col-lg-5 col-12 career_jojn_form select">
                  <select
                    required
                    spellCheck="false"
                    className={applyClass}
                    onBlur={handleApplyChange}
                    onChange={handleApplyFor}
                    value={apply_for}
                  >
                    {careerList.map((data) => {
                      return (
                        <>
                          <option value={data} key={data}>
                            {data}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>

                <div className="col-lg-5 col-12 career_jojn_form">
                  <input
                    type="text"
                    name="city"
                    id="input-text"
                    value={city}
                    className={cityclass}
                    required
                    spellCheck="false"
                    onChange={handleCityChange}
                    autoComplete={"off"}
                    placeholder="City"
                  ></input>
                </div>
              </div>
              <div className="col-lg-3 text-md-center text-start col-12 erropr_mag">
                <p className={applyClass}>{error_apply}</p>
              </div>

              <div className="col-lg-12 col-12 d-flex justify-content-center px-0">
                <div className="col-lg-11 col-12 career_jojn_form_ d-flex justify-content-center careers_upload_file">
                  <div className="d-flex justify-content-center align-items-center content_main_last_div">
                    {" "}
                    <input
                      type="file"
                      accept=".doc, .docx, application/pdf"
                      id="file-upload"
                      onChange={(e) => handleAttachment(e.target.files)}
                      onBlur={handlefileAttachment}
                    ></input>
                    <div>
                      {" "}
                      <h1 className="d-flex">
                        <h3>Upload</h3> your resume here
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-center col-12 file_mag_">
                <p className={fileClass}>{attachments && attachments.name}</p>
              </div>
              <div className="col-lg-3 text-md-center text-start col-12 erropr_mag_">
                <p className={fileClass}>{error_file}</p>
              </div>

              <div className="col-lg-12 col-12 d-flex justify-content-center career_last_inpurt___">
                <div className="col-lg-11 col-12 career_jojn_form__ d-flex justify-content-center">
                  <input
                    type="text"
                    name="portfolio"
                    id="input-text"
                    value={portfolio}
                    className={portfolioClass}
                    required
                    spellCheck="false"
                    onChange={handlePortfolioChange}
                    autoComplete={"off"}
                    placeholder="Portfolio Link"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12 col-12 d-flex justify-content-center career_last_inpurt___">
                <div className="col-lg-11 col-12 career_jojn_form__ d-flex justify-content-center">
                  <button onClick={handleSubmit}>
                    <div className={spiner}></div>SUBMIT
                  </button>
                  <p className={"m-0"}>{success_message}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ marginTop: "83px" }}>
        <Footer></Footer>
      </div>
    </Container>
  );
}

export default Careers;

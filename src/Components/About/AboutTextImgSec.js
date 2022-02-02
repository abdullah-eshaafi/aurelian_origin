import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import Fade from "react-reveal/Fade";
import VisibilitySensor from "react-visibility-sensor";

function AboutTextImgSec({
  title,
  text,
  img,
  orderfirst,
  orderLast,
  content,
  class_,
  classImg,
  classText,
  c1,
  c2,
}) {
  return (
    <Container>
      <Row>
        <Col
          lg={c1}
          md={10}
          sm={10}
          xs={12}
          className={`d-flex justify-content-xl-${content} justify-content-center 
            px-0 ${orderfirst}`}
        >
          <Fade duration={1000} delay={200}>
            <div className={`col-lg-8 col-md-8  col-sm-10 ${class_}`}>
              <div className={`${classText}`}>
                <h2>{title}</h2>
              </div>
              <div className="about_ever_since">
                <p>{text}</p>
              </div>
            </div>
          </Fade>
        </Col>
        <Col lg={c2} md={12} sm={12} xs={12} className={`px-0 ${orderLast}`}>
          <div className={`${classImg}`}>
            <img src={img} alt="..."></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutTextImgSec;

import React from "react";
import { Row, Col } from "react-bootstrap";

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
}) {
  return (
    <div>
      <Row>
        <Col
          lg={6}
          md={10}
          sm={10}
          xs={12}
          className={`d-flex justify-content-xl-${content} justify-content-center 
            px-0 ${orderfirst}`}
        >
          <div className={`col-lg-8 col-md-8  col-sm-10 ${class_}`}>
            <div className={`${classText}`}>
              <h2>{title}</h2>
            </div>
            <div className="about_ever_since">
              <p>{text}</p>
            </div>
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} xs={12} className={`px-0 ${orderLast}`}>
          <div className={`${classImg}`}>
            <img src={img} alt="..."></img>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutTextImgSec;

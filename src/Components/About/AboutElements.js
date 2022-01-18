import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function AboutElements({ title, text, img, orderfirst, orderLast, dis }) {
  return (
    <Container>
      <Row>
        <Col
          xl={5}
          lg={7}
          className={`d-flex justify-content-center ${orderfirst} px-0`}
        >
          <div className="col-xl-11 px-0">
            <div className="about_us_elements_haeding">
              <h4>{title}</h4>
            </div>
            <div className="about_us_elements_para col-xl-12 px-0">
              <p>{text}</p>
            </div>
          </div>
        </Col>
        <Col xl={2} lg={4} className={`d-flex justify-content-center`}>
          <div className="about_elements_img">
            <img src={img} alt="...." />
            <div style={{ display: dis }}></div>
          </div>
        </Col>
        <Col xl={2} lg={2} className={`${orderLast}`}></Col>
      </Row>
    </Container>
  );
}

export default AboutElements;

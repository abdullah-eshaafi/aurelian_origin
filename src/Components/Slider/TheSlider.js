import React, { useState } from "react";
import "./TheSlider.css";
import { Container, Row, Col } from "react-bootstrap";

//Image in the slider


import Left_arrow from "../../Resources/Images/Slider/left_arrow.svg";
import Right_arrow from "../../Resources/Images/Slider/Right_arrow.svg";

import Fade from "react-reveal/Fade";

function TheSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [show, setShow] = useState(false);

  const slides = [
    {
      id: 1,
      link: "https://aurilian.s3.us-east-2.amazonaws.com/Slider/slider1.jpg",
    },
    {
      id: 2,
      link: "https://aurilian.s3.us-east-2.amazonaws.com/Slider/slider4.jpg",
    },
    {
      id: 3,
      link: "https://aurilian.s3.us-east-2.amazonaws.com/Slider/slider3.jpg",
    },
    {
      id: 4,
      link: "https://aurilian.s3.us-east-2.amazonaws.com/Slider/slider7.jpg",
    },
    {
      id: 5,
      link: "https://aurilian.s3.us-east-2.amazonaws.com/Slider/slider5.jpg",
    },
    {
      id: 6,
      link: "https://aurilian.s3.us-east-2.amazonaws.com/Slider/slider2.jpg",
    },
    {
      id: 7,
      link: "https://aurilian.s3.us-east-2.amazonaws.com/Slider/slider6.jpg",
    },
  ];
  const slideNext = (e) => {
    setShow(true);
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    setShow(true);
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  React.useEffect(() => {
    setShow(true);
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
      setShow(true);
    }, 4000);
    return () => {
      clearInterval(intervalId);
      setShow(true);
    };
  }, [slides.length]);
  return (
    <Container
      className="mx-0 px-0 Hompage-slider-container"
      fluid
      style={{ overflow: "hidden" }}
    >
      <Row className="mx-0 px-0">
        <Col className="mx-0 px-0">
          <div className="Hompage-slider-wrapper">
            <Fade left when={show}>
              <div className="slider-Image-wrapper">
                <img src={slides[currentSlide].link} alt=".." />
              </div>{" "}
            </Fade>

            <div className="Homepage_arrows d-flex justify-content-between">
              <div className="margin_left_56 prev" onClick={slidePrev}>
                <button>
                  <img src={Left_arrow} alt="..." />
                </button>
              </div>
              <div className="margin_right_56 next" onClick={slideNext}>
                <button>
                  <img
                    src={Right_arrow}
                    alt="..."
                    className="hompage_right_arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TheSlider;

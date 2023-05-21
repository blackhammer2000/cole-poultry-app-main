import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/Hero.css";
import poultry1 from "../assets/poultry1.jpg";
import poultry2 from "../assets/poultry2.jpg";
import poultry3 from "../assets/poultry3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const slideshowRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    const slides = slideshowRef.current.getElementsByClassName("carousel-item");
    const activeSlide = slideshowRef.current.querySelector(".active");
    const activeIndex = Array.prototype.indexOf.call(slides, activeSlide);
    const nextIndex = (activeIndex + 1) % slides.length;

    activeSlide.classList.remove("active");
    slides[nextIndex].classList.add("active");
  };

  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="hero-content text-center">
              <h1 className="hero-title">
                <span className="hero-highlight-red font-weight-bold big-e">e</span>
                -POULTRY
              </h1>
              <p className="hero-description">
                Revolutionizing Poultry Farming with Digital Solutions
              </p>
              <Button className="hero-button" variant="danger" href="/product">
                Explore Products
              </Button>
            </div>
          </Col>
          <Col md={6}>
            <div
              className="carousel slide"
              data-bs-ride="carousel"
              data-aos="fade-left"
              ref={slideshowRef}
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={poultry1}
                    className="d-block w-100 img-fluid"
                    alt="Slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={poultry2}
                    className="d-block w-100 img-fluid"
                    alt="Slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={poultry3}
                    className="d-block w-100 img-fluid"
                    alt="Slide 3"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="hero-bg"></div>
    </div>
  );
};

export default HeroSection;

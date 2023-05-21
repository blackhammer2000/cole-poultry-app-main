import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CompanyLogo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/AboutUsSection.css";

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="about-us-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} order={1} data-aos="fade-up">
            <div className="about-us-subsection">
              <div>
                <h2 className="about-us-title fw-bold">Who Are We</h2>
                {/* <h1 className="about-us-subtitle">e-Poultry</h1> */}
                <h4 className="hero-title">
                  <span className="hero-highlight-red font-weight-bold big-e">
                    e
                  </span>
                  -POULTRY
                </h4>
                <p>
                  We are an Agri fintech company on a mission to revolutionize
                  poultry farming by leveraging on technology to offer robust
                  solutions to the challenges facing value chain players and
                  actors in poultry farming. Through the mobile based
                  application, farmers are able to optimize their operations,
                  increase profitability and track overall production of their
                  flock.
                </p>
                <a href="/product" className="ceo-button btn btn-primary">
                  OUR PRODUCTS
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} order={2} data-aos="fade-up">
            <img
              src={CompanyLogo}
              alt="Company Logo"
              className="about-us-logo"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUsSection;

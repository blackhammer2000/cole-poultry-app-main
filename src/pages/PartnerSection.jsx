import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Partner.css'
import partner1 from '../assets/partner1.png'
import partner2 from '../assets/partner2.png'
import partner3 from '../assets/partner3.png'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.png'
const PartnersSection = () => {
  return (
    <section className="partners-section">
      <Container>
        <h1 className="section-title fw-bold">Our Partners</h1>
        <Row className="justify-content-center">
          <Col xs={6} sm={4} md={3} lg={2}>
            <img src={partner1} alt="Partner 1" className="partner-logo" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
          <img src={partner2} alt="Partner 2" className="partner-logo" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
          <img src={partner3} alt="Partner 3" className="partner-logo" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
          <img src={partner4} alt="Partner 4" className="partner-logo" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2}>
          <img src={partner5} alt="Partner 5" className="partner-logo" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PartnersSection;

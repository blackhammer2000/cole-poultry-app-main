import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Team.css';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Team = () => {
  // Initialize AOS library
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="team-section">
      <Container>
        <h1 className="team-title" data-aos="fade-right" data-aos-delay="200">
          Our Team
        </h1>
        <Row>
          <Col md={6} data-aos="zoom-out" data-aos-delay="300">
            <div className="team-member">
              <img src={team1} alt="Team Member 1" className="team-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={6} data-aos="zoom-out" data-aos-delay="300">
            <div className="team-member">
              <img src={team2} alt="Team Member 2" className="team-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={6} data-aos="zoom-out" data-aos-delay="300">
            <div className="team-member">
              <img src={team3} alt="Team Member 2" className="team-image" />
              <div className="overlay"></div>
            </div>
          </Col>
          <Col md={6} data-aos="zoom-out" data-aos-delay="300">
            <div className="team-member">
              <img src={team4} alt="Team Member 2" className="team-image" />
              <div className="overlay"></div>
            </div>
          </Col>
        </Row>
        <p className="team-paragraph" data-aos="fade-up" data-aos-delay="400">
       At e-Poultry, we have assembled a talented and passionate team dedicated to revolutionizing the poultry farming industry. With expertise spanning agriculture, finance, technology, and business development, our team is committed to providing robust solutions to the challenges faced by value chain players and actors in poultry farming.<br />
       Together, our team at e-Poultry is driven by a shared passion for transforming poultry farming through technology. We are committed to empowering value chain players and actors in the industry by providing them with innovative and practical solutions that drive commercialization, efficiency, and profitability in poultry farming.
       
        </p>
      </Container>
    </div>
  );
};

export default Team;

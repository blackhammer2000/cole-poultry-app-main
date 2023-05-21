import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GiLaurelCrown, GiTargetArrows, GiCrystalGrowth } from "react-icons/gi";
import { FaRegCommentAlt } from "react-icons/fa";
import AboutUsSection from "./AboutUsSection";
import CardComponent from "./Card";
import "./css/About.css";
const About = () => {
  return (
    <div>
      <AboutUsSection />
      <Container>
        <Row>
          <Col md={4} className="border-right border-danger">
            <CardComponent
              icon={<GiLaurelCrown className="about-us-icon" />}
              title="Vision"
              text="To be a globally recognized poultry management app that digitalizes processes in the poultry value chain."
            />
          </Col>
          <div className="seperator text-danger"></div>
          <Col md={3}>
            <CardComponent
              icon={<GiCrystalGrowth className="about-us-icon" />}
              title="Core-Values"
              text="Innovation, Customer Satisfaction,Efficiency,Intergrity."
            />
          </Col>
          <div className="seperator text-danger"></div>
          <Col md={4}>
            <CardComponent
              icon={<GiTargetArrows className="about-us-icon" />}
              title="Mission"
              text="Provide an all-round solution to make poultry management simple and efficient for poultry farmers.
              "
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;

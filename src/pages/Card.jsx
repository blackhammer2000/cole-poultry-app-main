import React from 'react';
import { Card } from 'react-bootstrap';
import { GiLaurelCrown, GiTargetArrows, GiCrystalGrowth } from 'react-icons/gi';
import './css/Card.css'
const CardComponent = ({ icon, title, text }) => {
  return (
    <section className="about-us-main-card">
    <Card className="about-us-card">
      <Card.Body>
        {icon}
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
    </section>
  );
};

export default CardComponent;

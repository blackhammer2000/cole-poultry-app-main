import React from 'react';
import './css/Service.css';
import service1 from '../assets/service1.webp';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.webp';
import service4 from '../assets/service4.svg';

const Service = () => {
  return (
    <div className="service-section">
      <h2 className="service-title">Our Services</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card-content">
              <img src={service1} alt="Training" className="service-card-icon" />
              <h3 className="service-card-title">Training & Capacity Building</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card-content">
              <img src={service2} alt="Farm Visit" className="service-card-icon" />
              <h3 className="service-card-title">Farm Visit & Housing Quotation</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card-content">
              <img src={service3} alt="Production Costing" className="service-card-icon" />
              <h3 className="service-card-title">Production Costing and Budget</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-card">
            <div className="service-card-content">
              <img src={service4} alt="Farm Support" className="service-card-icon" />
              <h3 className="service-card-title">Farm Support and Technical Assistance</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

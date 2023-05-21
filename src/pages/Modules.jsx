import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFileEarmarkPlus, BsPencilSquare, BsFileText, BsShieldShaded, BsShop, BsCreditCard, BsPersonPlus, BsCloudUpload, BsLink, BsCameraVideo } from 'react-icons/bs';
import './css/Modules.css';

const Modules = () => {
  return (
    <div className="modules-section">
      <Container>
        <h2 className="modules-title">Modules</h2>
        <Row>
          <Col md={4}>
            <div className="module-card">
              <BsPersonPlus className="module-icon" />
              <h3 className="module-card-title">Farmer</h3>
              <p className="module-card-text">Create Farm, Add Farm Manager, Update Farm Reports & Track Productivity</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="module-card">
              <BsShieldShaded className="module-icon" />
              <h3 className="module-card-title">Insurance</h3>
              <p className="module-card-text">Covers Against Burglary, Acts of God</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="module-card">
              <BsShop className="module-icon" />
              <h3 className="module-card-title">E-commerce</h3>
              <p className="module-card-text">Provides In-App Market Linkages to Consumers and Traders</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <div className="module-card">
              <BsCreditCard className="module-icon" />
              <h3 className="module-card-title">Credit</h3>
              <p className="module-card-text">Check for System Available for Farmers for Input Supplies</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="module-card">
              <BsLink className="module-icon" />
              <h3 className="module-card-title">E-extension</h3>
              <p className="module-card-text">Links Extension Officers and Vets Directly to Farmers in Realtime</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="module-card">
              <BsCameraVideo className="module-icon" />
              <h3 className="module-card-title">IOT</h3>
              <p className="module-card-text">Provides Smart Solutions for Counting, Weighing, Brooding, and Monitoring Bird Activity through Cameras and Sensors</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Modules;

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/Careers.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import career from '../assets/career.svg';

const CareersPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submit logic
    if (name && email && resume) {
      // Construct the email URL with the subject and body
      const emailUrl = `mailto:info@epoultry.co.ke ?subject=Job Application&body=${encodeURIComponent(
        `Name: ${name}%0D%0AEmail: ${email}%0D%0A`
      )}`;
      // Open the user's default email client
      window.location.href = emailUrl;
      // Display success toast notification
      toast.success('Application submitted successfully!', { autoClose: 3000 });
      // Reset form fields
      setName('');
      setEmail('');
      setResume(null);
    } else {
      // Display error toast notification
      toast.error('Please fill in all fields.', { autoClose: 3000 });
    }
  };

  return (
    <div className="careers-page" data-aos="fade-up">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="text-center font-weight-bold">Careers</h1>
            <h2>Join Our Team</h2>
            <p>We are currently not hiring subscribe to our newsletter for updates.<br />Stay Tuned!</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="resume" className="form-label">Resume</label>
                <input
                  type="file"
                  className="form-control"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files[0])}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-hover-red">Apply Now</button>
            </form>
          </Col>
          <Col md={6}>
            <img src={career} alt="Career" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default CareersPage;

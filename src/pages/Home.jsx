import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from './HeroSection';
import PartnerSection from './PartnerSection';
import Information from './Infomation';
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Information />
      <Container>
      
        <PartnerSection />
        
      </Container>
      
    </div>
    
  );
};

export default Home;

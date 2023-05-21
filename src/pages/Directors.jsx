import React from 'react';
import '../pages/css/Directors.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import abisai from '../assets/abisai.jpg';
import tracy from '../assets/tracy.jpg';
import sam from '../assets/sam.jpg';
import frank from '../assets/frank.jpg';
import peter from '../assets/peter.jpg';

const directors = [
  {
    name: 'Abisai Nandi',
    position: 'Founder and CEO: E-POULTRY LTD',
    qualifications: 'BSc Business Management, Currently at Harvard University (Food Systems in Emerging Economies), Agribusiness Management (Naco-Tech School), 2yrs Leadership Training with Rosa Luxemburg Stiftung',
    experience: 'Over 10yrs experience in Strategic Business Management. Founder of Chicken Basket - A limited company with over 50 full-time employees and an average annual turnover of 1M USD, committed to end-to-end poultry value chain model. Social Entrepreneur committed to sustainable venture in value chain model.',
    image: abisai
  },
  {
    name: 'Tracy Chapman Oludhe',
    position: 'Co-Founder and CTO E Poultry LTD, Co-Founder Trendy Agriculture',
    qualifications: 'BSc Business IT (Cybersecurity Specialist), Certified in CCNA, A+ Computer Programming and web design',
    experience: '',
    image: tracy
  },
  {
    name: 'Samwel Mwangi',
    position: 'R&D E-Poultry, CEO Plotus Technology Company',
    qualifications: 'Bachelor of Engineering (Mechanical and Production Engineering)',
    experience: '3 years of experience in Collaborative design leading, development, and testing of systems',
    image: sam
  },
  {
    name: 'Frankline Omollo',
    position: 'Chief Systems Designer and Developer: E-POULTRY LTD',
    qualifications: 'Bachelors Degree in Mathematics and Computer Science',
    experience: '5 years experience in backend engineering and systems architect. Hands-on experience in developing complex software solutions',
    image: frank
  },
  {
    name: 'Peter Mwangi Maina',
    position: 'R&D E-Poultry, Co-Founder Plotus technology company',
    qualifications: 'B Eng Mechanical and Mechatronics Engineering (Specialist in Computer-Aided Design (CAD), Computer-Aided Manufacturing (CAM)',
    experience: 'Three years programming product design and development',
    image: peter
  }
];

const Board = () => {
  return (
    <div className="container">
      <h2>Board of Directors</h2>
      <div className="row">
        {directors.map((director, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div className="card mb-4">
              <img src={director.image} alt={director.name} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{director.name}</h3>
                <p className="card-text">{director.position}</p>
                <p className="card-text">Qualifications: {director.qualifications}</p>
                {director.experience && <p className="card-text">Experience: {director.experience}</p>}
              </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;

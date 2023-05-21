import React from 'react';
import './css/Product.css';

// Import icons
import { FaShoppingBasket, FaMedkit, FaUtensils, FaHome } from 'react-icons/fa';

// Import product images

import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';
import product4 from '../assets/product4.jpg';



const Product = () => {
  return (
    <div className="product-section">
      <h2 className="product-title">Our Products</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="product-card">
            <img src={product1} alt="Chicken Feeds" className="product-card-image" />
            <div className="product-card-content">
              <h3 className="product-card-title"><FaShoppingBasket /> Chicken Feeds</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-card">
            <img src={product3} alt="Medication" className="product-card-image" />
            <div className="product-card-content">
              <h3 className="product-card-title"><FaMedkit /> Medication & Cages</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-card">
            <img src={product4} alt="Feeders" className="product-card-image" />
            <div className="product-card-content">
              <h3 className="product-card-title"><FaUtensils /> Feeders</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-card">
            <img src={product2} alt="Drinkers" className="product-card-image" />
            <div className="product-card-content">
              <h3 className="product-card-title"><FaHome /> Drinkers</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

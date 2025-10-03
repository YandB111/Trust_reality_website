// Brands.jsx

import React from 'react';
import './Brands.css';

import brand1 from '../../assets/brands/brand1.jpg';
import brand2 from '../../assets/brands/brand2.jpeg';

const Brands = () => {
  const brands = [
    { name: "Trust Realty", logo: brand1 },
    { name: "Prestige Interiors", logo: brand2 },
    { name: "Trust Realty", logo: brand1 },
    { name: "Prestige Interiors", logo: brand2 },
    { name: "Trust Realty", logo: brand1 },
    { name: "Prestige Interiors", logo: brand2 },
    { name: "Trust Realty", logo: brand1 },
    { name: "Prestige Interiors", logo: brand2 },
    { name: "Trust Realty", logo: brand1 },
    { name: "Prestige Interiors", logo: brand2 },
  ];

  // Duplicate brands for smooth infinite scroll
  const repeatedBrands = [...brands, ...brands];

  return (
    <div className="brands-container">
      <h2>Our Brands</h2>
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {repeatedBrands.map((brand, index) => (
            <div
              key={index}
              className="brand-card our-brand-logo-detail js-scroll fade-in-bottom scrolled"
            >
              <img src={brand.logo} alt={brand.name} />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;

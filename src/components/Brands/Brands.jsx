// Brands.jsx

import React from 'react';
import './Brands.css';

import brand1 from '../../assets/brands/brand1.png';
import brand2 from '../../assets/brands/brand2.png';
import brand3 from '../../assets/brands/brand3.png';
import brand4 from '../../assets/brands/brand4.png';
import brand5 from '../../assets/brands/brand5.png';
import brand6 from '../../assets/brands/brand6.png';
import brand7 from '../../assets/brands/brand7.png';
import brand8 from '../../assets/brands/brand8.png';
import brand9 from '../../assets/brands/brand9.png';
import brand10 from '../../assets/brands/brand10.png';
import brand11 from '../../assets/brands/brand11.png';
import brand12 from '../../assets/brands/brand12.png';
const Brands = () => {
  const brands = [
    { name: "", logo: brand1 },
    { name: "", logo: brand2 },
    { name: "", logo: brand3 },
    { name: "", logo: brand4 },
    { name: "", logo: brand5 },
    { name: "", logo: brand6 },
    { name: "", logo: brand7 },
    { name: "", logo: brand8 },
    { name: "", logo: brand9 },
    { name: "", logo: brand10 },
     { name: "", logo: brand11 },
      { name: "", logo: brand12 },
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

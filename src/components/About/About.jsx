import React from 'react';
import './About.css';
import AnimatedNumber from './AnimatedNumber';
import { Link } from 'react-router-dom';

const About = ({ hideButton = false }) => {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">

        {/* Left Section */}
        <div className="about-left">
          <h4 className="about-title">About Us – Our Legacy</h4>

          <div className="about-highlight">
            <div className="crisil-logo">
              <span className="crisil-text-red">TRUST REALTY</span>
              <p className="crisil-subtext">✨ 100% RERA Certified Company</p>
            </div>
            <div className="highlight-text">
              <h2>🏢 Premium Homes & Commercial Spaces with Top Developers like DLF & Godrej</h2>
            </div>
          </div>

          <p className="about-description">
            At Trust Realty, we don’t just sell properties, we create long-term relationships.
            With over a decade of experience, we are known for transparent processes, verified properties, and customer-first values.

            Our Strengths:
            ✔ 100% Authentic & RERA-Approved Properties
            ✔ Strong partnerships with DLF, Godrej, M3M, Sobha, EMAAR, Tata Realty, Birla Estates & more
            ✔ Trusted by thousands of clients across Haryana, Punjab & Tricity
            ✔ Dedicated end-to-end guidance – from site visits to paperwork

            💡 “With us, you don’t just buy a property – you buy peace of mind.”

          </p>

          {/* Always rendered, but conditionally hidden */}
          <Link
            to="/about-us"
            className="about-link"
            style={{ display: hideButton ? 'none' : 'inline-block' }}
          >
            SEE DETAILS →
          </Link>
        </div>

        {/* Right Section - Stats */}
        <div className="about-right">
          <div className="about-stats-grid">
            <div className="stat-box">
              <AnimatedNumber target={16} duration={3000} />
              <p>Years of Excellence</p>
            </div>
            <div className="stat-box">
              <AnimatedNumber target={300} duration={3000} />
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <AnimatedNumber target={180} duration={3000} />
              <p>Mn. Sq. Ft. lease</p>
            </div>
            <div className="stat-box">
              <AnimatedNumber target={170} duration={3000} />
              <p>Mn. Sq. Ft. Underway</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-reach-us">
          <h3>Reach Us</h3>
          <p><strong> </strong>
           📧 Email: trustrealty32@gmail.com<br />
           🌐 Website: trustrealty.online<br />
           {/* <br /> */}
           🏅 Certifications: iOS | RERA | Builder Approved
          </p>
          <p><strong>📞 Call Us:</strong><br />8054761832 | 8360686307 </p>
          {/* <p><strong></strong><br /></p> */}
          <p><strong>Email:</strong><br />
            <a href="mailto:properties@prestigeconstructions.com">
              trustrealty.online
            </a>
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import "./Testimonial.css";

const Testimonial = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className="testimonial-section">
      {!playVideo ? (
        <div className="testimonial-content">
          <div className="quote-mark">❝</div>
          <div className="testimonial-box">
            <h4 className="small-title">TESTIMONIAL</h4>
            <h2>Customer Assurance Banner</h2>
            <p>
              Why Trust Realty is Your Best Choice:
              <br />
              <strong>
                ✔ 10+ Years of Experience <br />
                ✔ 100% RERA-Compliant Properties <br />
                ✔ Strong Builder Partnerships (DLF, Godrej & more) <br />
                ✔ Transparent Deals – No Hidden Charges <br />
                ✔ Dedicated Post-Sale Support.
              </strong>
            </p>
            <p className="closing-text">
              “Choosing Trust Realty means choosing honesty, security & profitable investments.”
            </p>
          </div>
          <button
            className="play-btn"
            onClick={() => setPlayVideo(true)}
            aria-label="Play Video"
          >
            ▶
          </button>
        </div>
      ) : (
        <div className="video-wrapper">
          <button
            className="close-btn"
            onClick={() => setPlayVideo(false)}
            aria-label="Close Video"
          >
            ✖
          </button>
          <video
            width="100%"
            height="500"
            controls
            autoPlay
          >
            <source src="/Testonomial/Testonomial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default Testimonial;

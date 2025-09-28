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
              
              {" "}
              <strong>✔ 10+ Years of Experience
              ✔ 100% RERA-Compliant Properties
              ✔ Strong Builder Partnerships (DLF, Godrej & more)
              ✔ Transparent Deals – No Hidden Charges
              ✔ Dedicated Post-Sale Support.</strong>.
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
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
            title="Customer Testimonial"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Testimonial;

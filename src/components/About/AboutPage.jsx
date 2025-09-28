import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import About from "./About";
import Timeline from "./TimelineData/Timeline";
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutPage.css";
import landmarkImg from "../../assets/landmark/landmark.jpg";
import Footer from "../Footer/Footer";

// 🔹 Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <span>&#8592;</span> {/* Left Arrow */}
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <span>&#8594;</span> {/* Right Arrow */}
  </div>
);

const developments = [
  {
    image: landmarkImg,
    title: "Landmark Investment in Uttarakhand!",
    subtitle: "Limited Opportunity! ",
  },
  {
    image: "https://via.placeholder.com/400x300?text=Conrad+Bengaluru",
    title: " Boutique SCO Plots in Sector 62, Gurgaon by Adani Realty & Brahma Group",
    subtitle: "Basement + Ground + 4 Floors (DTCP Approved)",
  },
  {
    image: "https://via.placeholder.com/400x300?text=Prestige+Shantiniketan",
    title: "Kurukshetra – A Land of Your Future!",
    subtitle: " 1,000 premium plots",
  },
  {
    image: "https://via.placeholder.com/400x300?text=Prestige+Tech+Park",
    title: "Prestige Tech Park",
    subtitle: "IT Park",
  },
];

const AboutPage = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <Navbar />

      <div style={{ padding: "100px 20px" }}>
        {/* About Section */}
        <About hideButton={true} />

        {/* Timeline */}
        <Timeline />

        {/* Landmark Developments Section */}
        <section className="developments-section">
          <div className="developments-header">
            <div>
              <h4 className="section-subtitle">Don’t Just Buy Land – Own a Landmark!</h4>
              <h2 className="section-title">Landmark Developments</h2>
            </div>
          </div>

          <Slider {...settings}>
            {developments.map((dev, i) => (
              <div key={i} className="development-card">
                <img src={dev.image} alt={dev.title} />
                <h3>{dev.title}</h3>
                <p>{dev.subtitle}</p>
              </div>
            ))}
          </Slider>

        </section>
        {/* Landmark Developments Section */}
        <section className="residential-section">
          <div className="residential-header">
            <h5 className="residential-title">
              <span className="residential-label">Residential | </span>
              <span className="residential-subtitle">
                Your dream home, simplified.

                We Specialize In:
                - Luxury Apartments, Villas & Independent Floors
                - Affordable Housing & Premium Residences
                - Fresh Launches, Pre-Launch & Resale Properties

              </span>
            </h5>
          </div>

          <Slider {...settings}>
            {developments.map((dev, i) => (
              <div key={i} className="development-card">
                <img src={dev.image} alt={dev.title} />
                <h3>{dev.title}</h3>
                <p>{dev.subtitle}</p>
              </div>
            ))}
          </Slider>

          <section className="commercial-section">
            <div className="commercial-header">
              <h5 className="commercial-title">
                <span className="commercial-label">Commercial |</span>
                <span className="commercial-subtitle">
                  Your dream home, simplified. We Specialize In:
                  - Luxury Apartments, Villas & Independent Floors
                  - Affordable Housing & Premium Residences
                  - Fresh Launches, Pre-Launch & Resale Properties

                </span>
              </h5>
            </div>
          </section>


          <Slider {...settings}>
            {developments.map((dev, i) => (
              <div key={i} className="development-card">
                <img src={dev.image} alt={dev.title} />
                <h3>{dev.title}</h3>
                <p>{dev.subtitle}</p>
              </div>
            ))}
          </Slider>

        </section>
        {/* Sticky Enquire Button */}
        <button className="enquire-btn" onClick={() => setShowEnquiry(true)}>
          Enquire Now
        </button>

        {/* Enquiry Form */}
        {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
      </div>
      <Footer />
    </div>

  );
};

export default AboutPage;

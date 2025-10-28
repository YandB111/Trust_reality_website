import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import About from "./About";
import Timeline from "./TimelineData/Timeline";
import EnquiryForm from "../EnquiryForm/EnquiryForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AboutPage.css";
import Footer from "../Footer/Footer";

import landmarkImg1 from "../../assets/landmark/landmark.jpg";
import landmarkImg2 from "../../assets/landmark/landmark.jpg";
import landmarkImg3 from "../../assets/landmark/landmark.jpg";

import residential1 from "../../assets/residential/residential1.jpg";
import residential2 from "../../assets/residential/residential2.jpg";
import residential3 from "../../assets/residential/residential3.jpg";
import goodrej from "../../assets/residential/goodrej.mp4";

import commercial1 from "../../assets/commercial/Godrej1.jpeg";
import commercial2 from "../../assets/commercial/DLF.png";
import commercial3 from "../../assets/commercial/AdaniReality.png";
import commercial4 from "../../assets/commercial/DLF1.png";

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <span>&#8592;</span>
  </div>
);
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>
    <span>&#8594;</span>
  </div>
);

// // Data
// const landmarkDevelopments = [
//   {
//     image: landmarkImg1,
//     title: "Landmark Investment in Uttarakhand!",
//     subtitle: "Limited Opportunity – Own your dream space in Dev Bhoomi!",
//   },
//   {
//     image: landmarkImg2,
//     title: "Prestige Landmark Heights, Dehradun",
//     subtitle: "Premium hill-view apartments",
//   },
//   {
//     image: landmarkImg3,
//     title: "Nature Valley Enclave",
//     subtitle: "Luxury plots surrounded by nature",
//   },
// ];

const residentialDevelopments = [
  {
    image: residential1,
    title: "Godrej Sora Residences",
    subtitle: "Understated elegance for serene living",
  },
  {
    video: goodrej,
    title: "Godrej Sora Residences Walkthrough",
    subtitle: "A visual journey through serene luxury",
  },
  {
    image: residential2,
    title: "DLF Park View Homes",
    subtitle: "Luxury apartments designed for comfort",
  },
  {
    image: residential3,
    title: "Shantiniketan Villas",
    subtitle: "Premium villas with private gardens",
  },
];

const commercialDevelopments = [
  {
    image: commercial1,
    title: "Godrej Aristocrat",
    subtitle: "Luxury Redefined at Sector 49, Golf Course Extension Road ",
  },
  {
    image: commercial2,
    title: "DLF MidTown",
    subtitle: "Prceision & Care in Every Detail",
  },
  {
    image: commercial3,
    title: "Adani Reality",
    subtitle: "10 Projects 4.5 million sq. ft.",
  },
   {
    image: commercial4,
    title: "DLF MidTowne",
    subtitle:  "Prceision & Care in Every Detail",
  },
];

const AboutPage = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [modalContent, setModalContent] = useState(null); // For image/video modal

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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  const renderSlide = (dev) => (
    <div className="development-card" onClick={() => openModal(dev)}>
      {dev.video ? (
        <video src={dev.video} controls className="development-video" />
      ) : (
        <img src={dev.image} alt={dev.title} />
      )}
      <h3>{dev.title}</h3>
      <p>{dev.subtitle}</p>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div style={{ padding: "100px 20px" }}>
        <About hideButton={true} />
        <Timeline />

        {/* 🔹 Landmark Section */}
        {/* <section className="landmark-section">
          <div className="landmark-header">
            <h5 className="landmark-title">
              <span className="landmark-label">Landmark | </span>
              <span className="landmark-subtitle">
                Don’t Just Buy Land – Own a Landmark! Ldimited Opportunity – Own your dream space in Dev Bhoomi!
              </span>
            </h5>
          </div>
          <Slider {...settings}>{landmarkDevelopments.map(renderSlide)}</Slider>
        </section> */}

        {/* 🔹 Residential Section */}
        <section className="residential-section">
          <div className="residential-header">
            <h5 className="residential-title">
              <span className="residential-label">Residential | </span>
              <span className="residential-subtitle">
                Godrej Sora draws from the Shibui way of life — understated, balanced, and serene.
              </span>
            </h5>
          </div>
          <Slider {...settings}>{residentialDevelopments.map(renderSlide)}</Slider>
        </section>

        {/* 🔹 Commercial Section */}
        <section className="commercial-section">
          <div className="commercial-header">
            <h5 className="commercial-title">
              <span className="commercial-label">Commercial | </span>
              <span className="commercial-subtitle">
                Your dream home, simplified. We specialize in: Luxury Apartments, Villas, Offices, and Retail Spaces.
              </span>
            </h5>
          </div>
          <Slider {...settings}>{commercialDevelopments.map(renderSlide)}</Slider>
        </section>

        <button className="enquire-btn" onClick={() => setShowEnquiry(true)}>
          Enquire Now
        </button>
        {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
      </div>

      <Footer />

      {/* ✅ Modal for Image/Video */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            {modalContent.video ? (
              <video src={modalContent.video} controls autoPlay muted className="modal-media" />
            ) : (
              <img src={modalContent.image} alt={modalContent.title} className="modal-media" />
            )}
            <h3>{modalContent.title}</h3>
            <p>{modalContent.subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;

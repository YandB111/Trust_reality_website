import React, { useState, useEffect } from "react";
import "./LatestSliderProject.css";
import project1 from "../../assets/projects/project1.jpeg";
import project3 from "../../assets/projects/project3.jpg";
import project2 from "../../assets/projects/project2.jpeg";
const slides = [
  {
    id: 1,
    title: "Landmark Investment in Uttarakhand!",
    location: "Premium 17,186 sq. ft. land parcel near Hyatt & Patanjali.",
    type: "land",
    size: "17,186 sq. ft. land",
    price: " ₹13.5 Cr (Negotiable) | Limited Opportunity!",
    Phone: "8360686307",
    img: project1,
    link: "/about-us",
  },
  {
    id: 2,
    title:
      "Presenting Boutique  by Adani Realty & Brahma Group – the perfect address for your business and investment.",
    location: "SCO Plots in Sector 62, Gurgaon",
    type: "Villas",
    size: "Size: 120–250 sq. yds ",
    price: "₹8,00,000 per sq. yd",
    Phone: " 8054761832",
    img: project3,
    link: "/about-us",
  },
  {
    id: 3,
    title: "Kurukshetra – A Land of Your Future!",
    location: "Kurukshetra",
    type: "Land",
    size: "1,000 premium plots ",
    price: "Just ₹55 Lakhs onwards",
    Phone: "8054761832",
    img: project2,
    link: "/about-us",
  },
];

export default function LatestSliderProject() {
  const [current, setCurrent] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    if (isDesktop) {
      // Loop enabled on desktop
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
    } else {
      // Mobile → Stop at first slide
      if (current > 0) setCurrent(current - 1);
    }
  };

  const nextSlide = () => {
    if (isDesktop) {
      // Loop enabled on desktop
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    } else {
      // Mobile → Stop at last slide
      if (current < slides.length - 1) setCurrent(current + 1);
    }
  };

  return (
    <div className="latest-slider-container">
      {/* Left Arrow */}
      <button className="latest-arrow latest-left" onClick={prevSlide}>
        &#8592;
      </button>

      {/* Current Slide */}
      <div className="latest-slide">
        <img src={slides[current].img} alt={slides[current].title} />
        <div className="latest-slide-info">
          <h2>{slides[current].title}</h2>
          <p>{slides[current].location}</p>
          <div className="latest-details">
            <p>
              <strong>Project Type:</strong> {slides[current].type}
            </p>
            <p>
              <strong>Development Size:</strong> {slides[current].size}
            </p>
            <p>
              <strong>Phone:</strong> {slides[current].Phone || "N/A"}
            </p>
          </div>

          <a href={slides[current].link} className="latest-btn">
            {slides[current].price}
          </a>
        </div>
      </div>

      {/* Right Arrow */}
      <button className="latest-arrow latest-right" onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
}

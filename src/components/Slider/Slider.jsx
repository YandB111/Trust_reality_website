import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import Slide1 from "../../assets/slider/Slide1Image.png";
import Slide2 from "../../assets/slider/SlideImage2.png";
import Slide3 from "../../assets/slider/SlideImage3.png";
import Slide4 from "../../assets/slider/SlideImage4.png";
import Slide5 from "../../assets/slider/SlideImage5.png";
import Slide6 from "../../assets/slider/SlideImage6.jpg";

const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

export default function Slider() {
  const [current, setCurrent] = useState(1); // start at first real slide
  const [transition, setTransition] = useState(true);
  const length = images.length;

  // Slides with clone at start and end
  const slides = [images[length - 1], ...images, images[0]];

  // ✅ autoplay independent of current
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
    setTransition(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
    setTransition(true);
  };

  // ✅ Handle infinite loop
  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setTransition(false);
      setCurrent(1); // jump back to first real slide
    } else if (current === 0) {
      setTransition(false);
      setCurrent(slides.length - 2); // jump to last real slide
    }
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      <div
        className="slider-track"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
          transition: transition ? "transform 0.8s ease-in-out" : "none",
          width: `${slides.length * 100}%`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((img, index) => (
          <div
            className="slide"
            key={index}
            style={{ width: `${100 / slides.length}%` }} // ✅ each slide fits evenly
          >
            <img src={img} alt={`Slide ${index}`} className="slide-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./Slider.css";

import Slide1 from "../../assets/slider/Slide1Image.jpg";
import Slide2 from "../../assets/slider/SlideImage2.jpg";
import Slide3 from "../../assets/slider/SlideImage3.jpg";
import Slide4 from "../../assets/slider/SlideImage4.jpg";
import Slide5 from "../../assets/slider/SlideImage5.jpg";
import Slide6 from "../../assets/slider/SlideImage6.jpg";
import Slide7 from "../../assets/slider/SlideImage7.jpg";
import Slide8 from "../../assets/slider/SlideImage8.jpg";

const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8];

export default function Slider() {
  const [current, setCurrent] = useState(1); // Start at first real slide
  const [transition, setTransition] = useState(true);
  const length = images.length;

  // ✅ Clone first and last for infinite loop
  const slides = [images[length - 1], ...images, images[0]];

  // ✅ Autoplay every 5s
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

  // ✅ Loop back when reaching clone slides
  const handleTransitionEnd = () => {
    if (current === slides.length - 1) {
      setTransition(false);
      setCurrent(1); // Jump to first real slide
    } else if (current === 0) {
      setTransition(false);
      setCurrent(slides.length - 2); // Jump to last real slide
    }
  };

  return (
    <div className="slider">
      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="arrow right" onClick={nextSlide}>
        &#10095;
      </button>

      {/* Slides */}
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
            style={{ width: `${100 / slides.length}%` }}
          >
            <img src={img} alt={`Slide ${index}`} className="slide-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

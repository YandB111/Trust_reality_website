import React, { useState, useEffect } from "react";
import "./BoardOfDirectors.css";
import DirectorImg from "../../assets/director/Director.jpg";

const directors = [
  {
    name: "Irfan Razack",
    role: "Chairman & Managing Director",
    img: DirectorImg,
  },
  {
    name: "Rezwan Razack",
    role: "Joint Managing Director",
    img: "/images/rezwan.jpg",
  },
  {
    name: "Noaman Razack",
    role: "Whole-Time Director",
    img: "/images/noaman.jpg",
  },
  { name: "New Director", role: "Director", img: "/images/new-director.jpg" },
  { name: "Another Director", role: "Director", img: "/images/another.jpg" },
];

const BoardOfDirectors = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // ✅ Adjust items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? directors.length - itemsPerPage : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= directors.length - itemsPerPage ? 0 : prev + 1
    );
  };

  return (
    <div className="board-of-directors">
      <h2>
        Board of <span>Directors</span>
      </h2>

      <div className="slider-wrapper">
        <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>

        <div
          className="directors-track"
          style={{
            transform: `translateX(-${(index * 100) / itemsPerPage}%)`,
            transition: "transform 0.6s ease-in-out",
          }}
        >
          {directors.map((director, i) => (
            <div className="director-card" key={i}>
              <div className="image-wrapper">
                <img src={director.img} alt={director.name} />
              </div>
              <h3>{director.name}</h3>
              <p>{director.role}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default BoardOfDirectors;

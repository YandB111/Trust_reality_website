import React, { useState, useEffect } from "react";
import "./BoardOfDirectors.css";
import Rbs from "../../assets/director/Rbs.png";
import tro1 from "../../assets/director/TrustRealityOffice1.png";
import tro2 from "../../assets/director/TrustRealityOffice2.png";
import Rec1 from "../../assets/director/RecCert1.png";
import Rec2 from "../../assets/director/RecCert2.png";
import Rec3 from "../../assets/director/RecCert3.png";
import RealEstateAuthority from "../../assets/director/RealEstateAuthority.png";
import urc1 from "../../assets/director/urc1.png";
import urc2 from "../../assets/director/urc2.png";
import Hrap1 from "../../assets/director/Hrap1.png";
import Hrap2 from "../../assets/director/Hrap2.png";
import Hrap3 from "../../assets/director/Hrap3.png";

const directors = [
  { name: "Registration Certification", role: "Trust Reality", img: Rbs },
  { name: "Trust Reality Office", role: "Panchkula, Haryana", img: tro1 },
  { name: "Trust Reality Office", role: "Panchkula, Haryana", img: tro2 },
  { name: "Registration Certificate 1", role: "Trust Reality", img: Rec1 },
  { name: "Registration Certificate 2", role: "Trust Reality", img: Rec2 },
  { name: "Registration Certificate 3", role: "Trust Reality", img: Rec3 },
  { name: " ", role: "", img: RealEstateAuthority },
  { name: "Udyam Registration 1", role: "Certificate", img: urc1 },
  { name: "Udyam Registration 2", role: "Certificate", img: urc2 },
  { name: "HERAP 1", role: "Certificate", img: Hrap1 },
  { name: "HERAP 2", role: "Certificate", img: Hrap2 },
  { name: "HERAP 3", role: "Certificate", img: Hrap3 },
];

const BoardOfDirectors = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [lightboxImage, setLightboxImage] = useState(null); // 🔥 for lightbox

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth <= 760 ? 1 : 3);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? directors.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === directors.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (img) => {
    setLightboxImage(img);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="board-of-directors">
      <h2>
        All Approved <span>Certifications</span>
      </h2>

      <div className="slider-wrapper">
        <button className="arrow left" onClick={prevSlide}>
          &#8592;
        </button>

        <div
          className="directors-track"
          style={{
            transform: `translateX(-${(index * 100) / itemsPerPage}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {directors.map((director, i) => (
            <div className="director-card" key={i}>
              <div
                className="image-wrapper"
                onClick={() => openLightbox(director.img)}
              >
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

      {/* ✅ Lightbox Overlay */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close-btn" onClick={closeLightbox}>
              &times;
            </button>
            <img src={lightboxImage} alt="Zoomed In" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardOfDirectors;

import React, { useState } from "react";
import "./Residential.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import residential1 from "../../assets/residential/residential1.jpg";
import Krisumiresidential2 from "../../assets/residential/Krisumiresidential2.jpeg";
import Gaia3 from "../../assets/residential/Gaia3.jpg";

const projects = [
  {
    id: 1,
    image: residential1,
    name: "Godrej Experience Center",
    location: "Haryana",
    address: "Sector 54, Gurugram, Haryana",
    type: "Allotment",
    status: "NEW LAUNCH",
  },
  {
    id: 2,
    image: Krisumiresidential2,
    name: "Krisumi Water Side Residence",
    location: "Haryana",
    address: "Sector 36 A, Gurugram, Haryana",
    type: "Apartment",
    status: "NEW LAUNCH",
  },
  {
    id: 3,
    image: Gaia3,
    name: "2/3 Bespoke Residence",
    location: "Haryana",
    address: "Sector 102 , Dwarka, Express",
    type: "Apartment",
    status: "NEW LAUNCH",
  },
];

const locations = [
  { name: "All Properties", key: "ALL" },
  { name: "Haryana", key: "Haryana" },
  { name: "Punjab", key: "Punjab" },
];

export default function Residential() {
  const [selectedLocation, setSelectedLocation] = useState("ALL");
  const [overlayImage, setOverlayImage] = useState(null); // for modal image

  const filteredProjects =
    selectedLocation === "ALL"
      ? projects
      : projects.filter((p) => p.location === selectedLocation);

  return (
    <div>
      <Navbar />

      <div className="residential-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Regions</h3>
          <ul>
            {locations.map((loc) => (
              <li
                key={loc.key}
                className={selectedLocation === loc.key ? "active" : ""}
                onClick={() => setSelectedLocation(loc.key)}
              >
                {loc.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="residential-page">
          <h1 className="page-title">Residential Projects</h1>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div
                  className="image-wrapper"
                  onClick={() => setOverlayImage(project.image)}
                >
                  <img src={project.image} alt={project.name} />
                  <span
                    className={`status ${project.status
                      .replace(" ", "-")
                      .toLowerCase()}`}
                  >
                    {project.status}
                  </span>
                </div>

                <h2 className="project-name">{project.name}</h2>
                <p className="location">{project.address}</p>

                <div className="details">
                  <p>
                    <strong>Project Type:</strong> {project.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* ✅ Image Overlay Modal */}
      {overlayImage && (
        <div className="image-overlay" onClick={() => setOverlayImage(null)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setOverlayImage(null)}
            >
              ×
            </button>
            <img src={overlayImage} alt="Project Full View" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

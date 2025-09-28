import React, { useState } from "react";
import "./Commercial.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Sample commercial project data
const projects = [
  // Delhi-NCR
  {
    id: 1,
    image: "/images/commercial1.jpg",
    name: "DLF Cyber Hub",
    location: "Delhi-NCR",
    address: "Gurgaon, Delhi-NCR",
    price: "₹ 15,000/sq.ft onwards",
    type: "Office Space",
    size: "10 Acre",
    units: "200 Units",
    status: "READY TO MOVE",
  },
  {
    id: 2,
    image: "/images/commercial2.jpg",
    name: "Spaze IT Park",
    location: "Delhi-NCR",
    address: "Noida, Delhi-NCR",
    price: "₹ 12,500/sq.ft onwards",
    type: "Office Space",
    size: "8 Acre",
    units: "150 Units",
    status: "UNDER CONSTRUCTION",
  },
  // Bangalore
  {
    id: 3,
    image: "/images/commercial3.jpg",
    name: "Prestige Tech Park",
    location: "Bangalore",
    address: "Electronic City, Bangalore",
    price: "₹ 18,000/sq.ft onwards",
    type: "Office Space",
    size: "12 Acre",
    units: "180 Units",
    status: "NEW LAUNCH",
  },
  {
    id: 4,
    image: "/images/commercial4.jpg",
    name: "RMZ Ecoworld",
    location: "Bangalore",
    address: "Whitefield, Bangalore",
    price: "₹ 16,500/sq.ft onwards",
    type: "Office Space",
    size: "15 Acre",
    units: "200 Units",
    status: "READY TO MOVE",
  },
  // Chennai
  {
    id: 5,
    image: "/images/commercial5.jpg",
    name: "Olympia Tech Park",
    location: "Chennai",
    address: "OMR Road, Chennai",
    price: "₹ 13,500/sq.ft onwards",
    type: "Office Space",
    size: "10 Acre",
    units: "120 Units",
    status: "UNDER CONSTRUCTION",
  },
  {
    id: 6,
    image: "/images/commercial6.jpg",
    name: "Ascendas IT Park",
    location: "Chennai",
    address: "Guindy, Chennai",
    price: "₹ 14,000/sq.ft onwards",
    type: "Office Space",
    size: "8 Acre",
    units: "100 Units",
    status: "NEW LAUNCH",
  },
];

// Locations for sidebar
const locations = [
  { name: "All Properties", key: "ALL" },
  { name: "Bangalore", key: "Bangalore" },
  { name: "Delhi-NCR", key: "Delhi-NCR" },
  { name: "Chennai", key: "Chennai" },
];

export default function Commercial() {
  const [selectedLocation, setSelectedLocation] = useState("ALL");

  // Filter projects based on selected location
  const filteredProjects =
    selectedLocation === "ALL"
      ? projects.slice(0, 6) // Show max 6 cards for All Properties
      : projects.filter((p) => p.location === selectedLocation);

  return (
    <div>
      <Navbar />

      <div className="commercial-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>All Properties</h3>
          <ul>
            {locations.map((loc) => (
              <li
                key={loc.key}
                className={selectedLocation === loc.key ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedLocation(loc.key);
                }}
              >
                {loc.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="commercial-page">
          <h1 className="page-title">Commercial Projects</h1>

          <div className="project-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="image-wrapper">
                    <img src={project.image} alt={project.name} />
                    <span
                      className={`status ${project.status.replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h2 className="project-name">{project.name}</h2>
                  <p className="location">{project.address}</p>
                  <p className="price">{project.price}</p>

                  <div className="details">
                    <p>
                      <strong>Project Type:</strong> {project.type}
                    </p>
                    <p>
                      <strong>Development Size:</strong> {project.size}
                    </p>
                    <p>
                      <strong>Total Units:</strong> {project.units}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No projects available for this location.</p>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

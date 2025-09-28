import React, { useState } from "react";
import "./Residential.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Sample project data
const projects = [
  // Delhi-NCR
  {
    id: 1,
    image: "/images/mayflower.jpg",
    name: "Mayflower @ The Prestige City Indirapuram",
    location: "Delhi-NCR",
    address: "The Prestige City, NH-24, Extension, Indirapuram, Delhi-NCR",
    price: "₹ 3.4 Cr onwards",
    type: "Apartment",
    bedrooms: "3 & 4 Bed apartments, duplexes & Sky Mansions",
    size: "6.63 Acre",
    units: "620 Units",
    status: "NEW LAUNCH",
  },
  {
    id: 2,
    image: "/images/mulberry.jpg",
    name: "Mulberry @ The Prestige City Indirapuram",
    location: "Delhi-NCR",
    address: "The Prestige City, NH-24, Extension, Indirapuram, Delhi-NCR",
    price: "₹ 3.75 Cr onwards",
    type: "Apartment",
    bedrooms: "2, 3, 4 BHK, Sky Mansions & Villaments",
    size: "17 Acre",
    units: "1719 Units",
    status: "UNDER CONSTRUCTION",
  },
  // Chennai
  {
    id: 3,
    image: "/images/pallavaram.jpg",
    name: "Prestige Pallavaram Gardens",
    location: "Chennai",
    address: "Pallavaram-Thuraipakkam Rd, Nemilichery, Pallavaram, Chennai",
    price: "₹ 1.2 Cr onwards",
    type: "Apartment",
    bedrooms: "2, 3, 4 BHK",
    size: "21.84 Acre",
    units: "2069 Units",
    status: "NEW LAUNCH",
  },
  {
    id: 4,
    image: "/images/chennai2.jpg",
    name: "Prestige Chennai Towers",
    location: "Chennai",
    address: "OMR Road, Chennai",
    price: "₹ 2.5 Cr onwards",
    type: "Apartment",
    bedrooms: "3 & 4 BHK",
    size: "15 Acre",
    units: "800 Units",
    status: "UNDER CONSTRUCTION",
  },
  // Bangalore
  {
    id: 5,
    image: "/images/bangalore.jpg",
    name: "Prestige Bangalore Heights",
    location: "Bangalore",
    address: "Whitefield, Bangalore",
    price: "₹ 2.1 Cr onwards",
    type: "Apartment",
    bedrooms: "2, 3 BHK",
    size: "10 Acre",
    units: "800 Units",
    status: "READY TO MOVE",
  },
  {
    id: 6,
    image: "/images/bangalore2.jpg",
    name: "Prestige Bangalore Towers",
    location: "Bangalore",
    address: "Electronic City, Bangalore",
    price: "₹ 1.8 Cr onwards",
    type: "Apartment",
    bedrooms: "2 & 3 BHK",
    size: "12 Acre",
    units: "950 Units",
    status: "NEW LAUNCH",
  },
];

// Locations for sidebar
const locations = [
  { name: "All Properties", key: "ALL" },
  { name: "Bangalore", key: "Bangalore" },
  { name: "Hyderabad", key: "Hyderabad" },
  { name: "Mumbai", key: "Mumbai" },
  { name: "Cochin", key: "Cochin" },
  { name: "Delhi-NCR", key: "Delhi-NCR" },
  { name: "Chennai", key: "Chennai" },
];

export default function Residential() {
  const [selectedLocation, setSelectedLocation] = useState("ALL");

  // Filter projects based on selected location
  const filteredProjects =
    selectedLocation === "ALL"
      ? projects.slice(0, 6) // Show max 6 cards for All Properties
      : projects.filter((p) => p.location === selectedLocation);

  return (
    <div>
      <Navbar />

      <div className="residential-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>All Properties</h3>
          <ul>
            {locations.map((loc) => (
              <li
                key={loc.key}
                className={selectedLocation === loc.key ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault(); // prevent default link behavior
                  e.stopPropagation(); // prevent bubbling
                  setSelectedLocation(loc.key); // set location
                }}
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
                      <strong>Bedrooms:</strong> {project.bedrooms}
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

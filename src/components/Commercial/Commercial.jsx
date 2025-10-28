import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Commercial.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// ✅ Import your images
import Godrej1 from "../../assets/commercial/Godrej1.jpeg";
import Godrej2 from "../../assets/commercial/DLF1.png";

// ✅ Sample commercial project data (Haryana & Punjab only)
const projects = [
  {
    id: 1,
    image: Godrej1,
    name: "DLF",
    location: "Haryana",
    address: "Gurgaon, Haryana",
    price: "₹ 15,500/sq.ft onwards",
    status: "READY TO MOVE",
  },
  {
    id: 2,
    image: Godrej2,
    name: "Godrej  Aristocrat ",
    location: "Haryana",
    address: "Gurgaon, Haryana",
    price: "₹ 12,000/sq.ft onwards",
    status: "UNDER CONSTRUCTION",
  },
];

// ✅ Sidebar locations
const locations = [
  { name: "All Properties", key: "ALL" },
  { name: "Haryana", key: "Haryana" },
  { name: "Punjab", key: "Punjab" },
];

export default function Commercial() {
  const [selectedLocation, setSelectedLocation] = useState("ALL");

  // ✅ Filter logic
  const filteredProjects =
    selectedLocation === "ALL"
      ? projects
      : projects.filter((p) => p.location === selectedLocation);

  return (
    <div>
      <Navbar />

      <div className="commercial-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Filter by Location</h3>
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
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="image-wrapper">
                    <img src={project.image} alt={project.name} />
                    <span
                      className={`status ${project.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h2 className="project-name">{project.name}</h2>
                  <p className="location">{project.address}</p>
              

                 
                </motion.div>
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

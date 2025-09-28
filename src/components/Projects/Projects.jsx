import { useState } from "react";
import CustomMap from "./CustomMap";
import "./Projects.css";

const cities = [
  { name: "Bangalore", projects: 19, type: "RESIDENTIAL" },
  { name: "Hyderabad", projects: 9, type: "COMMERCIAL", type: "RESIDENTIAL" },
  { name: "Mumbai", projects: 8, type: "RESIDENTIAL" },
  { name: "Cochin", projects: 6, type: "HOSPITALITY" },
  { name: "Delhi-NCR", projects: 3, type: "RETAIL" },
  { name: "Chennai", projects: 1, type: "RESIDENTIAL" },
  { name: "Kozhikode", projects: 1, type: "COMMERCIAL" },
  { name: "Mangalore", projects: 1, type: "HOSPITALITY" },
  { name: "Goa", projects: 0, type: "RETAIL" },
];

const tabs = ["RESIDENTIAL", "COMMERCIAL", "HOSPITALITY", "RETAIL"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("RESIDENTIAL");

  
  const filteredCities = cities.filter(
    (city) => city.type === activeTab
  );

  return (
    <section className="projects-section">
      <div className="projects-left">
        <h2 className="section-title">Projects</h2>

        {/* ✅ Tabs */}
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ Filtered Cities */}
        <div className="projects-grid">
          {filteredCities.map((city, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon"></div>
              <h3 className="project-name">{city.name}</h3>
              <p className="project-count">
                {city.projects} Projects Available
              </p>
              <a href="#" className="view-link">
                View All ↗
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="projects-map">
        <CustomMap />
      </div>
    </section>
  );
}

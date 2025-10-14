import { useState } from "react";
import CustomMap from "./CustomMap";
import "./Projects.css";

const cities = [
  { name: "Kurukshetra", lat: 29.9695, lng: 76.8783, projects: 1, type: "RESIDENTIAL" },
  { name: "Panipat", lat: 29.3909, lng: 76.9635, projects: 1, type: "RESIDENTIAL" },
  { name: "Gurgaon", lat: 28.4595, lng: 77.0266, projects: 1, type: "RESIDENTIAL" },
  { name: "Delhi", lat: 28.6139, lng: 77.209, projects: 1, type: "COMMERCIAL" },
];

const tabs = ["RESIDENTIAL", "COMMERCIAL"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("RESIDENTIAL");

  // Filter cities based on the selected tab
  const filteredCities = cities.filter((city) => city.type === activeTab);

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
                {city.projects} Project Available
              </p>
              <a href="#" className="view-link">
                View All ↗
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Dynamic Map */}
      <div className="projects-map">
        <CustomMap locations={filteredCities} />
      </div>
    </section>
  );
}

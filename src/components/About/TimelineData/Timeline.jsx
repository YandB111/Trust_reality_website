import React, { useState } from "react";
import "./Timeline.css";

const timelineData = {
  "2025": [
    {
      title: "Living & Fundraising",
      details:
        "We go beyond property sales to create modern living solutions and profitable investment opportunities.- 🏠 Co-Living Spaces for students & professionals - 🏠 Co-Living Spaces for students & professionals - 🏠 Co-Living Spaces for students & professionals - 🔐 Secure & Transparent Fundraising Platforms",
      image: "https://via.placeholder.com/400x250?text=Prestige+101"
    },
    {
      title: "Awards & Recognition",
      details:
        "🏆 What Defines Us: - Recognized for ethical & customer-focused practices - Trusted by thousands of families & corporates - Exclusive partner to India’s leading builders - 10+ years of real estate excellence",
      image: "https://via.placeholder.com/400x250?text=Ocean+Towers+Goa"
    }
  ],
  "2023": [
    {
      title: "Prestige Jasdan Classic, Mumbai",
      details:
        "A luxury residential tower in South Mumbai offering elegant 3- and 4-BHK homes...",
      image: "https://via.placeholder.com/400x250?text=Jasdan+Classic"
    }
  ],
  "2021": [
    {
      title: "Prestige City, Hyderabad",
      details:
        "A large-scale residential township featuring smart homes, green spaces...",
      image: "https://via.placeholder.com/400x250?text=Prestige+City+Hyderabad"
    }
  ],
  "2020": [
    {
      title: "Prestige Golfshire, Bangalore",
      details:
        "An ultra-luxury villa community with a golf course and serene views...",
      image: "https://via.placeholder.com/400x250?text=Golfshire+Bangalore"
    }
  ],
  "2019": [
    {
      title: "Prestige Lakeside Habitat, Bangalore",
      details:
        "Sprawled across 100+ acres near Varthur Lake, offering a mix of apartments...",
      image: "https://via.placeholder.com/400x250?text=Lakeside+Habitat"
    }
  ]
};

export default function Timeline() {
  const years = Object.keys(timelineData).sort((a, b) => b - a); // Sort descending
  const [activeYear, setActiveYear] = useState(years[0]);

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">History Timeline</h2>

      <div className="timeline-bar">
        {years.map((year, index) => (
          <div key={index} className="timeline-node">
            <div
              className={`dot ${activeYear === year ? "active" : ""}`}
              onClick={() => setActiveYear(year)}
            />
            <span className="year">{year}</span>
          </div>
        ))}
      </div>

      <div className="timeline-grid">
        {timelineData[activeYear].map((project, index) => (
          <div key={index} className="timeline-card">
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

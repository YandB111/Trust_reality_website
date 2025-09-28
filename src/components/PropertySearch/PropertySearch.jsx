import { useState } from "react";
import "./PropertySearch.css";
import PriceRangeSlider from "./PriceRangeSlider";
import EnquiryForm from "../EnquiryForm/EnquiryForm"; // correct path

export default function PropertySearch() {
  const [activeTab, setActiveTab] = useState("BUY");
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="property-search">
      <div className="search-container">
        {/* Left Side - Search Filters */}
        <div className="search-filters">
          {/* Tabs */}
          <div className="tabs">
            {["BUY", "RENT", "COMMERCIAL"].map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="search-form">
            <div className="form-group">
              <span className="icon">🏢</span>
              <select>
                <option>Project Type</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>

            <div className="form-group">
              <span className="icon">📍</span>
              <select>
                <option>Location</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>
            </div>

            <div className="form-group">
              <span className="icon">🛏️</span>
              <select>
                <option>Bedrooms</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
              </select>
            </div>

            <div className="form-group">
              <span className="icon">🏗️</span>
              <select>
                <option>Construction Status</option>
                <option>Ready to Move</option>
                <option>Under Construction</option>
              </select>
            </div>

            <div className="form-group price-group">
              <PriceRangeSlider />
            </div>

            <div className="form-group btn-group">
              <button className="search-btn">0 PROJECTS FOUND →</button>
            </div>
          </div>
        </div>

        {/* Right Side - Title */}
        <div className="search-title-container">
          <p className="search-title">
            Your Trusted Partner <span className="highlight">in Real Estate </span>
            <br />
            Secure, Certified & Hassle-Free
          </p>
        </div>
      </div>

      {/* Enquire Now Sticky Button */}
      <button className="enquire-btn" onClick={() => setShowEnquiry(true)}>
        Enquire Now
      </button>

      {/* Enquiry Form Modal */}
      {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
    </div>
  );
}

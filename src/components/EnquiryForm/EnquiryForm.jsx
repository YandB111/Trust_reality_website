import { useState } from "react";
import "./EnquiryForm.css";

export default function EnquiryForm({ onClose }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const clientNumber = "+917009096715";
    const message = `Hello! I'm interested in your projects.
Name: ${name}
Mobile: ${mobile}
Email: ${email}
Project Type: ${projectType}`;

    window.open(
      `https://api.whatsapp.com/send?phone=${clientNumber}&text=${encodeURIComponent(message)}`,
      "_blank"
    );

    onClose();
  };

  return (
    <div className="enquiry-overlay" onClick={onClose}>
      <div className="enquiry-modal" onClick={(e) => e.stopPropagation()}>
        <div className="enquiry-content">
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>Enquiry Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Your Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              required
            >
              <option value="">Select Project Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", msg: "Please fill in all required fields." });
      return;
    }

    try {
      const rawUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
      const API_URL = rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", msg: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", msg: "Failed to send message. Please try again." });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ type: "error", msg: "Error connecting to server. Please try again later." });
    }
  };

  return (
    <main className="contact-container" id="main-content">
      {/* ── Left Column: Info & Map ── */}
      <motion.div 
        className="contact-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="contact-info-card">
          <h2>Get in Touch</h2>
          <p>Our team is ready to help you with admissions, courses, and guidance.</p>
          
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-content">
                <h4>Address</h4>
                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div className="info-content">
                <h4>Phone</h4>
                <a href="tel:+91999999">+91 999999</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-content">
                <h4>Email</h4>
                <a href="mailto:info@studyaarc.com">info@studyaarc.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaClock /></div>
              <div className="info-content">
                <h4>Hours</h4>
                <p>Mon–Sat, 10 AM to 7 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container" aria-label="Map location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.50708250592!2d77.0688981!3d28.527582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5d8b5e08f3%3A0x37e3a1e85f3e2bbf!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="StudyArc location map"
          />
        </div>
      </motion.div>

      {/* ── Right Column: Form ── */}
      <motion.div 
        className="contact-form-wrapper"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2>Contact Us</h2>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Have questions? Reach out using the form below.
        </p>

        {status && (
          <div className={`status-msg ${status.type}`} role="alert">
            {status.msg}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </motion.div>
    </main>
  );
}

export default Contact;

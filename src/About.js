import React, { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/students1.jpg",
    "/images/students2.jpg",
    "/images/students3.jpg",
    "/images/students4.jpg",
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="about-container">
      {/* Slideshow at Top */}
      <div className="slideshow">
        {slides.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
            <div className="slide-text">Who We Are</div>
          </div>
        ))}
      </div>

      {/* About Content */}
      <div className="about-section">
        
        <p>
          At <strong>StudyAarc Coaching Centre</strong>, we are dedicated to shaping the
          future of students by providing top-quality education, mentorship, and guidance.
          Our mission is to inspire learning, boost confidence, and help every student
          achieve academic excellence.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower students with knowledge and skills, enabling them to excel in their
          academic and professional journeys.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become a trusted educational hub where students find inspiration, clarity, and
          success in every step of their learning journey.
        </p>
      </div>
    </div>
  );
}

export default About;

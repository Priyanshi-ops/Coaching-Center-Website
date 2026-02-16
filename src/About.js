import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import "./About.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    process.env.PUBLIC_URL + "/images/students1.jpg",
    process.env.PUBLIC_URL + "/images/students2.jpg",
    process.env.PUBLIC_URL + "/images/students3.jpg",
    process.env.PUBLIC_URL + "/images/students4.jpg",
  ];

  const goToSlide = useCallback(
    (index) => setCurrentSlide(index),
    []
  );

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Keyboard navigation for slideshow
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [slides.length]);

  return (
    <main className="about-container" id="main-content">
      {/* Slideshow */}
      <div
        className="slideshow"
        role="region"
        aria-roledescription="carousel"
        aria-label="Student gallery"
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${slides.length}`}
            aria-hidden={index !== currentSlide}
          >
            <img src={src} alt={`StudyArc students — gallery image ${index + 1}`} />
            <div className="slide-text" aria-hidden="true">
              Who We Are
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div
        className="slide-indicators"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slide-indicator ${i === currentSlide ? "active" : ""}`}
            role="tab"
            aria-selected={i === currentSlide}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goToSlide(i)}
            tabIndex={i === currentSlide ? 0 : -1}
          />
        ))}
      </div>

      {/* About Content */}
      <motion.div
        className="about-sections-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.section
          className="about-section"
          variants={itemVariants}
          aria-labelledby="about-heading"
        >
          <h2 id="about-heading">About StudyArc</h2>
          <p>
            At <strong>StudyArc Coaching Centre</strong>, we are dedicated to shaping the
            future of students by providing top-quality education, mentorship, and guidance.
            Our mission is to inspire learning, boost confidence, and help every student
            achieve academic excellence.
          </p>
        </motion.section>

        <motion.section
          className="about-section"
          variants={itemVariants}
          aria-labelledby="mission-heading"
        >
          <h2 id="mission-heading">Our Mission</h2>
          <p>
            To empower students with knowledge and skills, enabling them to excel in their
            academic and professional journeys. We believe that every student deserves
            personalized attention and world-class guidance.
          </p>
        </motion.section>

        <motion.section
          className="about-section"
          variants={itemVariants}
          aria-labelledby="vision-heading"
        >
          <h2 id="vision-heading">Our Vision</h2>
          <p>
            To become a trusted educational hub where students find inspiration, clarity, and
            success in every step of their learning journey. We aim to create an environment that
            fosters critical thinking and creativity.
          </p>
        </motion.section>
      </motion.div>
    </main>
  );
}

export default About;

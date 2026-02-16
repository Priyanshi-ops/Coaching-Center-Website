import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Course.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function Course() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  const courses = [
    {
      id: 1,
      img: process.env.PUBLIC_URL + "/images/class9logo.png",
      title: "Class 9 Coaching",
      description: "Strong foundation in Maths, Science & English",
      details:
        "Our Class 9 program builds a strong base in core subjects with concept clarity and regular practice sessions.",
    },
    {
      id: 2,
      img: process.env.PUBLIC_URL + "/images/class10logo.png",
      title: "Class 10 Coaching",
      description: "Comprehensive preparation for CBSE/ICSE board exams",
      details:
        "Class 10 program focuses on board exam preparation with mock tests, sample papers, and time management strategies.",
    },
    {
      id: 3,
      img: process.env.PUBLIC_URL + "/images/class11logo.png",
      title: "Class 11 Coaching",
      description: "Advanced concepts for competitive exam readiness",
      details:
        "In Class 11, we strengthen conceptual understanding in Physics, Chemistry, Maths, and Biology to gear up for competitive exams.",
    },
    {
      id: 4,
      img: process.env.PUBLIC_URL + "/images/class12logo.png",
      title: "Class 12 Coaching",
      description: "Board & entrance exam focused preparation",
      details:
        "Class 12 program ensures strong preparation for boards while aligning with competitive exam requirements.",
    },
    {
      id: 5,
      img: process.env.PUBLIC_URL + "/images/IITNEET.png",
      title: "NEET/IIT-JEE Coaching",
      description:
        "With determination and guidance, success in NEET and JEE is yours.",
      details:
        "Our NEET/IIT-JEE program provides in-depth coverage of syllabus, regular tests, and doubt-solving sessions for success.",
    },
    {
      id: 6,
      img: process.env.PUBLIC_URL + "/images/law.png",
      title: "CLAT Coaching",
      description:
        "Hard work and smart preparation will make CLAT achievable.",
      details:
        "The CLAT program covers legal reasoning, logical aptitude, GK, and mock tests to maximize your exam performance.",
    },
  ];

  const handleOpenModal = useCallback((course, e) => {
    triggerRef.current = e.currentTarget;
    setSelectedCourse(course);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    // Return focus to the button that opened the modal
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  // Trap focus inside modal & handle Escape
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Focus the close button when modal opens
    const closeBtn = modalRef.current?.querySelector(".close-btn");
    if (closeBtn) closeBtn.focus();

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen, handleCloseModal]);

  return (
    <main className="course-page" id="main-content">
      <h2 className="course-title">Choose Your Learning Path</h2>

      <motion.div
        className="course-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        role="list"
        aria-label="Available courses"
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="course-card"
            variants={cardVariants}
            role="listitem"
          >
            <img
              src={course.img}
              alt=""
              className="course-icon"
              aria-hidden="true"
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button
              onClick={(e) => handleOpenModal(course, e)}
              aria-label={`View details for ${course.title}`}
            >
              View Details
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {isModalOpen && selectedCourse && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <button
              className="close-btn"
              onClick={handleCloseModal}
              aria-label="Close dialog"
            >
              &times;
            </button>
            <h2 id="modal-title">{selectedCourse.title}</h2>
            <p id="modal-description">{selectedCourse.details}</p>
            <Link
              to="/admission"
              className="enroll-btn"
              onClick={handleCloseModal}
              aria-label={`Enroll in ${selectedCourse.title}`}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Course;

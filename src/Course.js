import React, { useState } from "react";
import "./Course.css";
import { Link } from "react-router-dom";


function Course() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      img: "/images/class9logo.png",
      title: "Class 9 Coaching",
      description: "Strong foundation in Maths, Science & English",
      details: "Our Class 9 program builds a strong base in core subjects with concept clarity and regular practice sessions."
    },
    {
      id: 2,
      img: "/images/class10logo.png",
      title: "Class 10 Coaching",
      description: "Comprehensive preparation for CBSE/ICSE board exams",
      details: "Class 10 program focuses on board exam preparation with mock tests, sample papers, and time management strategies."
    },
    {
      id: 3,
      img: "/images/class11logo.png",
      title: "Class 11 Coaching",
      description: "Comprehensive preparation for CBSE/ICSE board exams",
      details: "In Class 11, we strengthen conceptual understanding in Physics, Chemistry, Maths, and Biology to gear up for competitive exams."
    },
    {
      id: 4,
      img: "/images/class12logo.png",
      title: "Class 12 Coaching",
      description: "Comprehensive preparation for CBSE/ICSE board exams",
      details: "Class 12 program ensures strong preparation for boards while aligning with competitive exam requirements."
    },
    {
      id: 5,
      img: "/images/IITNEET.png",
      title: "NEET/IIT-JEE Coaching",
      description: "With determination and guidance, success in NEET and JEE is yours.",
      details: "Our NEET/IIT-JEE program provides in-depth coverage of syllabus, regular tests, and doubt-solving sessions for success."
    },
    {
      id: 6,
      img: "/images/law.png",
      title: "CLAT Coaching",
      description: "Hard work and smart preparation will make CLAT achievable.",
      details: "The CLAT program covers legal reasoning, logical aptitude, GK, and mock tests to maximize your exam performance."
    },
  ];

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };
  

  return (
    <div className="course-page">
      <h2 className="course-title">Choose Your Learning Path</h2>
      <div className="course-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.img} alt={course.title} className="course-icon" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => handleOpenModal(course)}>View Details</button>
          </div>
        ))}
      </div>

      {isModalOpen && selectedCourse && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>{selectedCourse.title}</h2>
            <p>{selectedCourse.details}</p>
            <button className="enroll-btn" >
              <Link to="/admission" style={{ textDecoration: "none", color: "inherit" }}>

              Enroll Now
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Course;

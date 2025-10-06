// src/App.js
import "./App.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Course from "./Course";
import Admission from "./Admission";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src="/images/logo.jpg" alt="StudyArc Logo" className="logo" />
         
        
        <h1>StudyArc</h1>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      <nav>
        <ul className={`menu ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Who we are</Link></li>
          <li><Link to="/course">Courses</Link></li>
          <li><Link to="/admission">Admissions</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to StudyArc Coaching Centre</h2>
          <p>Classes 9 to 12</p>
<Link to="/Course">
            <button className="btn">Explore Courses</button>
          </Link> 
          <Link to="/admission">    
             <button className="btn">Join Now</button>
             </Link>
        </div>

        <div className="hero-image">
          <img src="/images/picone.png" alt="Student studying" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose-us">
        <div className="why-content">
          <div className="reasons">
            <ul>
              <li>
                <span className="checkmark">✔</span>
                Expert faculty for strong fundamentals
              </li>
              <li>
                <span className="checkmark">✔</span>
                Personalized attention for each student
              </li>
              <li>
                <span className="checkmark">✔</span>
                Comprehensive study material & assessments
              </li>
              <li>
                <span className="checkmark">✔</span>
                Focus on board & competitive exams
              </li>
            </ul>
          </div>
          <div className="why-title">
            <h3>Why Choose Us</h3>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>StudyArc</h4>
          <p>Providing quality coaching for Classes 9-12.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/course">Courses</Link></li>
            <li><Link to="/admission">Admissions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@studyarc.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: Delhi, India</p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} StudyArc. All rights reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

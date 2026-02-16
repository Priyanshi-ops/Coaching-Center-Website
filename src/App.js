// src/App.js
import "./App.css";
import { useState, useEffect, useRef, useMemo } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Contact from "./Contact";
import About from "./About";
import Course from "./Course";
import Admission from "./Admission";

/* ── Fade-in on scroll hook ── */
function useInView() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return [ref, isInView];
}

/* ── Stagger animation variants ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ===========================
   Floating Particles
   =========================== */
function FloatingParticles() {
  const particles = useMemo(
    () =>
      [...Array(6)].map((_, i) => ({
        key: i,
        style: {
          "--delay": `${i * 2}s`,
          "--size": `${4 + Math.random() * 8}px`,
          "--x": `${10 + Math.random() * 80}%`,
          "--duration": `${15 + Math.random() * 10}s`,
        },
      })),
    []
  );

  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map((p) => (
        <div key={p.key} className="particle" style={p.style} />
      ))}
    </div>
  );
}

/* ===========================
   Navbar
   =========================== */
function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location, setMenuOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Who we are" },
    { to: "/course", label: "Courses" },
    { to: "/admission", label: "Admissions" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar" role="banner">
      <div className="logo-container">
        <Link to="/" aria-label="StudyArc Home">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.jpg"}
            alt="StudyArc logo"
            className="logo"
          />
        </Link>
        <h1>StudyArc</h1>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
      </button>

      <nav role="navigation" aria-label="Main navigation">
        <ul
          id="main-navigation"
          className={`menu ${menuOpen ? "show" : ""}`}
          role="menubar"
        >
          {navLinks.map((link) => (
            <li key={link.to} role="none">
              <Link
                to={link.to}
                role="menuitem"
                aria-current={location.pathname === link.to ? "page" : undefined}
                className={location.pathname === link.to ? "nav-active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* ===========================
   Home Page
   =========================== */
function Home() {
  const [whyRef, whyInView] = useInView();
  const [achRef, achInView] = useInView();

  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero" aria-label="Welcome to StudyArc">
        <FloatingParticles />
        <div className="hero-blob hero-blob-1" aria-hidden="true" />
        <div className="hero-blob hero-blob-2" aria-hidden="true" />
        <div className="hero-blob hero-blob-3" aria-hidden="true" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-badge">🎓 Trusted by 5000+ Students</span>

          <h1 className="hero-heading">
            Welcome to <span className="gradient-text">StudyArc</span> Coaching Centre
          </h1>

          <p className="hero-subtitle">
            Empowering students of Classes 9–12 with expert faculty,
            personalized mentorship, and a 95% board exam success rate.
          </p>

          <div className="hero-buttons" role="group" aria-label="Call to action">
            <Link to="/course">
              <button className="btn btn-primary" aria-label="Explore our courses">
                <span>Explore Courses</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </Link>
            <Link to="/admission">
              <button className="btn btn-outline" aria-label="Join StudyArc now">
                Join Now
              </button>
            </Link>
          </div>

          <div className="hero-trust" aria-label="Trust indicators">
            <div className="trust-item">
              <span className="trust-icon" aria-hidden="true">⭐</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="trust-divider" aria-hidden="true" />
            <div className="trust-item">
              <span className="trust-icon" aria-hidden="true">📚</span>
              <span>20+ Years</span>
            </div>
            <div className="trust-divider" aria-hidden="true" />
            <div className="trust-item">
              <span className="trust-icon" aria-hidden="true">🏆</span>
              <span>95% Success</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-glow" aria-hidden="true" />
          <img
            src={process.env.PUBLIC_URL + "/images/picone.png"}
            alt="Student studying with books and mathematical formulas"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section
        id="why-choose-us"
        className="why-choose-us"
        aria-labelledby="why-heading"
        ref={whyRef}
      >
        <motion.div
          className="why-content"
          initial="hidden"
          animate={whyInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="reasons" role="list" aria-label="Reasons to choose StudyArc">
            <ul>
              {[
                { icon: "🎯", text: "Expert faculty for strong fundamentals" },
                { icon: "👤", text: "Personalized attention for each student" },
                { icon: "📖", text: "Comprehensive study material & assessments" },
                { icon: "🏅", text: "Focus on board & competitive exams" },
              ].map((reason, i) => (
                <motion.li key={i} variants={itemVariants} role="listitem">
                  <span className="checkmark" aria-hidden="true">{reason.icon}</span>
                  {reason.text}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div className="why-title" variants={itemVariants}>
            <h3 id="why-heading">
              <span className="gradient-text">Why Choose</span>
              <br />StudyArc?
            </h3>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section
        className="achievements"
        aria-labelledby="achievements-heading"
        ref={achRef}
      >
        <motion.h3
          className="section-title"
          id="achievements-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={achInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Our Achievements
        </motion.h3>

        <motion.div
          className="achievement-cards"
          initial="hidden"
          animate={achInView ? "visible" : "hidden"}
          variants={containerVariants}
          role="list"
          aria-label="Achievement statistics"
        >
          {[
            { stat: "5000+", label: "Students Trained", icon: "🎓" },
            { stat: "95%", label: "Board Exam Success Rate", icon: "📊" },
            { stat: "20+", label: "Years of Excellence", icon: "⏳" },
            { stat: "50+", label: "Expert Teachers", icon: "👨‍🏫" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="achievement-card"
              variants={itemVariants}
              role="listitem"
              tabIndex={0}
              aria-label={`${item.stat} ${item.label}`}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="achievement-icon" aria-hidden="true">{item.icon}</span>
              <h2 aria-hidden="true">{item.stat}</h2>
              <p>{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

/* ===========================
   Footer
   =========================== */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-column">
          <h4>StudyArc</h4>
          <p>Providing quality coaching for Classes 9-12. Building strong foundations for academic success.</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/course">Courses</Link></li>
              <li><Link to="/admission">Admissions</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p><a href="mailto:info@studyarc.com">info@studyarc.com</a></p>
          <p><a href="tel:+911234567890">+91 12345 67890</a></p>
          <p>Delhi, India</p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links" role="list" aria-label="Social media links">
            <a href="https://www.facebook.com/p/Study-Arc-61571548692279/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" role="listitem"><FaFacebookF /></a>
            <a href="https://www.instagram.com/study_arc9/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" role="listitem"><FaInstagram /></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" role="listitem"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} StudyArc. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ===========================
   App Root
   =========================== */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Admission.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function Admission() {
  const [form, setForm] = useState({
    fullName: "",
    classApplying: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("http://localhost:8080/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || `Server error ${res.status}`);
      }

      await res.json();
      setStatus({ ok: true, msg: "Admission submitted successfully!" });
      setForm({
        fullName: "",
        classApplying: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (error) {
      setStatus({ ok: false, msg: error.message || "Submission failed" });
    }
  };

  return (
    <main className="admission-container" id="main-content">
      <motion.div
        className="left-form"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="admission-title">Admission Form</h2>

        {status && (
          <div
            className={`status ${status.ok ? "success" : "error"}`}
            role="alert"
            aria-live="polite"
          >
            {status.msg}
          </div>
        )}

        <form
          className="admission-form"
          onSubmit={handleSubmit}
          aria-label="Admission application form"
          noValidate
        >
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
              required
              autoComplete="name"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="classApplying">Class Applying For</label>
            <select
              id="classApplying"
              name="classApplying"
              value={form.classApplying}
              onChange={handleChange}
              required
              aria-required="true"
            >
              <option value="">Select Class</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
              autoComplete="tel"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              value={form.address}
              onChange={handleChange}
              autoComplete="street-address"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Additional notes (optional)"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </motion.div>

      <motion.div
        className="right-box"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="quotes-wrapper" aria-label="Inspirational quotes">
          {[
            {
              text: "\u201CEducation is the most powerful weapon you can use to change the world.\u201D",
              color: "blue-card",
            },
            {
              text: "\u201CThe beautiful thing about learning is that no one can take it away from you.\u201D",
              color: "green-card",
            },
            {
              text: "\u201CEvery student can learn, just not on the same day or in the same way.\u201D",
              color: "orange-card",
            },
            {
              text: "\u201CSuccess is the sum of small efforts repeated day in and day out.\u201D",
              color: "pink-card",
            },
          ].map((quote, i) => (
            <motion.blockquote
              key={i}
              className={`quote-card ${quote.color}`}
              variants={itemVariants}
            >
              {quote.text}
            </motion.blockquote>
          ))}
        </div>
      </motion.div>
    </main>
  );
}

export default Admission;
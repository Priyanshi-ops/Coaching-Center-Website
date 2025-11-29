import React, { useState } from "react";
import "./Admission.css";

function Admission() {
  const [form, setForm] = useState({
    fullName: "",
    classApplying: "",
    email: "",
    phone: "",
    address: "",
    message: ""
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
        message: ""
      });
    } catch (error) {
      setStatus({ ok: false, msg: error.message || "Submission failed" });
    }
  };

  return (
    <div className="admission-container">
      <div className="left-form">
        <h2 className="admission-title">Admission Form</h2>

        {status && (
          <div className={`status ${status.ok ? "success" : "error"}`}>
            {status.msg}
          </div>
        )}

        <form className="admission-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <label>Class Applying For</label>
          <select
            name="classApplying"
            value={form.classApplying}
            onChange={handleChange}
            required
          >
            <option value="">Select Class</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
          </select>

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter your address"
            value={form.address}
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Additional notes (optional)"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      <div className="right-box">
        <div className="quotes-wrapper">
          <div className="quote-card blue-card">
            “Education is the most powerful weapon you can use to change the world.”
          </div>

          <div className="quote-card green-card">
            “The beautiful thing about learning is that no one can take it away from you.”
          </div>

          <div className="quote-card orange-card">
            “Every student can learn, just not on the same day or in the same way.”
          </div>

          <div className="quote-card pink-card">
            “Success is the sum of small efforts repeated day in and day out.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
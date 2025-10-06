import React from "react";
import "./Admission.css";

function Admission() {
  return (
    <div className="admission-page">
      <h2 className="admission-title">Admission Form</h2>
      <form className="admission-form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Class Applying For</label>
        <select required>
          <option value="">Select Class</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
        </select>

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <label>Address</label>
        <textarea placeholder="Enter your address"></textarea>

        <label>Message</label>
        <textarea placeholder="Additional notes (optional)"></textarea>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Admission;

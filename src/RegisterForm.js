import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // handle form submission
  };

  return (
    <div className="register-container">
      <div className="left-section">
        <div className="heading-wrapper">
          <h2>Who Can Join Us?</h2>
        </div>
        <ul className="join-list">
          <li>
            <div className="number-circle">1</div>
            <div className="description">
              <strong>School Students</strong>
            </div>
          </li>
          <li>
            <div className="number-circle">2</div>
            <div className="description">
              <strong>College Students</strong>
            </div>
          </li>
          <li>
            <div className="number-circle">3</div>
            <div className="description">
              <strong>Professionals</strong>
            </div>
          </li>
        </ul>
      </div>

      <div className="right-section">
        <h3 className="form-heading">REGISTER FOR LANTOON</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
          <div className="phone-input-group">
  <input
    type="text"
    value="+91"
    readOnly
    className="country-code"
  />
  <input
    type="tel"
    name="mobile"
    placeholder="Mobile"
    value={formData.mobile}
    onChange={handleChange}
    className="form-input phone-number"
    required
  />
</div>

          <button type="submit" className="submit-button">Register Now</button>
        </form>

        <div className="contact-info">
          <p>OR</p>
          <p>Call or WhatsApp @</p>
          <div className="whatsapp-contacts">
            <a href="https://wa.me/7994798712" className="whatsapp-link">
              <img src="/assets/whatsapp.png" alt="WhatsApp" className="whatsapp-icon" /> 7994798712
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

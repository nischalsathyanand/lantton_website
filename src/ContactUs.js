import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="contact-page">
      <header className="contact-header"></header>
      <section className="contact-banner">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <p>Feel free to get in touch with us for any queries</p>
          <button className="contact-btn" onClick={openModal}>
            Contact Now
          </button>
        </div>
      </section>

      {/* Contact Form and Address Section */}
      <section className="contact-section">
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <div className="form-row">
              <select>
                <option value="Ind (+91)">Ind (+91)</option>
               
                {/* Add more options as needed */}
              </select>
              <input type="tel" placeholder="Phone" required />
              <select>
                <option value="Question">Question</option>
                <option value="Feedback">Feedback</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <textarea placeholder="Message" required></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        
        {/* Address Columns */}
        <div className="contact-address">
          <div className="address-column">
            <h3>Chennai</h3>
            <p>First Bench</p>
            <p>abc</p>
            <p>xyz</p>
            <p>TamilNadu, India</p>
            <p>PIN - 600008</p>
            <p>Phone: +91 - 1234567890</p>
            <p>Email: support@lantoon.com</p>
          </div>
         
        </div>
      </section>
     <section className="map">
  <iframe
    title="location-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.488854687395!2d80.2541546748431!3d13.068174787256106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526612f0859b73%3A0xf093343621c30365!2sAban%20Offshore%20Limited!5e0!3m2!1sen!2sin!4v1728291459410!5m2!1sen!2sin"
    width="100%"
    height="450"
    frameBorder="0"
    style={{ border: 0 }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>
</section>


      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Contact Details</h3>
            <p>Email: support.lantoon@gmai.com</p>
            <p>Phone: +123 456 7890</p>
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;

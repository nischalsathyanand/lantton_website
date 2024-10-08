import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HomeContent.css";
import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  const navigate = useNavigate();
  const [isEnquiryExpanded, setIsEnquiryExpanded] = useState(false);

  const handleViewLanguagesClick = () => {
    navigate("/languages");
  };

  const handleAttendFreeClassClick = () => {
    console.log("Attend Free Class Clicked");
  };

  const toggleEnquiryForm = () => {
    setIsEnquiryExpanded(!isEnquiryExpanded);
  };

  return (
    <div className="home-content">
      {/* Carousel Section */}
      <Carousel
        showArrows={true}
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="carousel-wrapper"
      >
        <div className="carousel-slide first-slide">
          <div className="carousel-content">
            <h1 className="main-heading">Lantoon Learning App</h1>
            <p className="subheading">
              Learn a new language the way you learn best
            </p>
            <div className="buttons">
              <button
                className="button-primary"
                onClick={handleViewLanguagesClick}
              >
                View Languages
              </button>
              <button
                className="button-secondary"
                onClick={handleAttendFreeClassClick}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>

        <div className="carousel-slide second-slide">
          <div className="carousel-content">
            <h1 className="main-heading">
              Is it possible to make your brain think in a language?
            </h1>
            <p className="subheading">In Lantoon way, YES!</p>
            <div className="buttons">
              <button
                className="button-primary"
                onClick={handleViewLanguagesClick}
              >
                View Languages
              </button>
              <button
                className="button-secondary"
                onClick={handleAttendFreeClassClick}
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </Carousel>

      <div className={`enquiry-section ${isEnquiryExpanded ? "expanded" : ""}`}>
  <div className="enquiry-header" onClick={toggleEnquiryForm}>
    <span>{isEnquiryExpanded ? "" : "Register for Learning"}</span>
    <span className="arrow">{isEnquiryExpanded ? "✕" : "↑"}</span>
  </div>

  {isEnquiryExpanded && (
    <div className="enquiry-content">
      <p className="enquiry-title">Lantoon Registration</p>

      <input type="text" placeholder="Name" className="enquiry-input" />

      <div className="enquiry-phone-group">
        <input type="text" placeholder="+91" className="country-code"  readOnly/>
        <input type="text" placeholder="Mobile" className="phone-number" />
      </div>

      <button className="enquiry-submit">Register Now</button>

      <div className="whatsapp-contacts">
        <a href="https://wa.me/7994798712" className="whatsapp-link">
          <img src="/assets/whatsapp.png" alt="WhatsApp" /> 7994798712
        </a>
      </div>
    </div>
  )}
</div>


    </div>
  );
};

export default HomeContent;

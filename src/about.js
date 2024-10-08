import React from "react";
import "./about.css";
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate();
    const handleRegisterClick =()=>
    {
navigate("/register")
    }
    return (
        <div className="about-page">
            <header className="about-header">
               
            </header>
            <section className="about-banner">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>Your success is our mission. We offer top-notch educational programs for various competitive exams.</p>
                    <button className="register-btn1" onClick={handleRegisterClick}>Register Now</button>
                </div>
            </section>
            <section className="about-details">
                <h3>Our Programs</h3>
                <p></p>
            </section>
        </div>
    );
};

export default About;

import React from "react";
import "./languages.css";
import { useNavigate } from 'react-router-dom';

const Languages = () => {
    const languages = [
        { name: "English", flag: require("../src/images/uk.png"), image: require("../src/images/ukimage.jpg") },
        { name: "German", flag: require("../src/images/german.png"), image: require("../src/images/germanf.jpg") },
        { name: "Spanish", flag: require("../src/images/spain.png"), image: require("../src/images/barcelona.jpg") },
        { name: "Hindi", flag: require("../src/images/India.png"), image: require("../src/images/indiamain.jpg") },
        { name: "French", flag: require("../src/images/france.png"), image: require("../src/images/effel.png") },
        { name: "Italian", flag: require("../src/images/italy.png"), image: require("../src/images/piza_italy.jpg") },
        { name: "Japanese", flag: require("../src/images/japan.png"), image: require("../src/images/japanees.jpeg") }
    ];

    const navigate = useNavigate();
    const handleContactUs = () => {
        navigate("/contact");
    };

    return (
        <div className="languages-page">
            <header className="languages-header"></header>
            <section className="languages-banner">
                <div className="languages-content">
                    <h2>Languages We Offer</h2>
                    <p>We provide courses in a variety of languages, ensuring everyone has access to quality learning.</p>
                    <button className="register-btn1" onClick={handleContactUs}>Contact Us</button>
                </div>
            </section>

            <section className="languages-details">
                <div className="languages-grid">
                    {languages.map((language, index) => (
                        <div key={index} className="language-card">
                            <img src={language.image} alt={`${language.name}`} className="language-main-image" />
                            <h4>{language.name}</h4>
                            <img src={language.flag} alt={`${language.name} flag`} className="language-flag-icon" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Languages;

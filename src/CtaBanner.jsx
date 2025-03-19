import React from "react";
import "./CtaBanner.css";
// import ctaImage from "./cta-image.png"; // Replace with actual image path

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-content">
        <h2 className="cta-heading">
          Take Your Customer <br /> Service To The <br /> Next Level
        </h2>
        <a href="#" className="cta-button">
          Get 14 Days Free Trial →
        </a>
        <p className="cta-subtext">No credit card required</p>
      </div>
      <div className="cta-image-container">
        <img src="https://img.freepik.com/free-photo/woman-with-glasses-laptop_23-2147679000.jpg" width={'200px'} height={'300px'} alt="Customer Support" className="cta-image" />
        <div className="floating-icons">
          <span className="icon star">★</span>
          <span className="icon search">🔍</span>
          <span className="icon crown">👑</span>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

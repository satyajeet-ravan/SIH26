import React from "react";
import "./About.css";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left Content */}
        <div className="about-content">

          <div className="about-label">
            <span className="about-line"></span>
            <span>ABOUT BREEDVISION</span>
          </div>

          <h2>
            Empowering Livestock
            <br />
            Recognition with AI
          </h2>

          <p>
            BreedVision is an AI-powered platform that helps you identify
            cattle and buffalo breeds instantly from an image. Our advanced
            model is trained on thousands of images to deliver accurate
            predictions along with detailed information about each breed.
          </p>

          <p>
            Whether you are a farmer, researcher, student, or livestock
            enthusiast, BreedVision makes breed identification simple,
            fast and accessible.
          </p>

        </div>

        {/* Right Image */}
        <div className="about-image-wrapper">
            <img
  src={aboutImage}
  alt="Cattle and buffalo"
  className="about-image"
/>
         
        </div>

      </div>
    </section>
  );
};

export default About;
import { useState } from "react";
import {
  Upload,
  Sparkles,
  ArrowRight
} from "lucide-react";

import heroImage from "../assets/Hero.JPG";

import "./Hero.css";

function Hero() {

  const [image, setImage] = useState(null);

  const handleUpload = (event) => {

    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png"
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload JPG, JPEG or PNG.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Maximum image size is 10MB.");
      return;
    }

    setImage(URL.createObjectURL(file));
  };

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${heroImage})`
      }}
    >

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="ai-badge">
         
        </div>

        <h1>
          AI-Powered Breed
          <br />
          Classification
        </h1>

        <h2>
          of Cattle & Buffaloes
        </h2>

        <p>
          Upload an image of cattle or buffalo and let our
          advanced AI model identify the breed instantly
          with high accuracy.
        </p>

        <div className="hero-buttons">

          <label className="upload-button">

            <Upload size={18} />

            Upload Image

            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleUpload}
              hidden
            />

          </label>

          <button className="explore-button">
            Explore Breeds
            <ArrowRight size={17} />
          </button>

        </div>

        {image && (

          <div className="image-preview">

            <img
              src={image}
              alt="Selected cattle"
            />

            <div>
              <strong>Image selected</strong>

              <span>
                Ready for breed analysis
              </span>

              <button>
                Analyze Breed
              </button>
            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Hero;
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Upload,
  Sparkles,
  ArrowRight
} from "lucide-react";

import heroImage from "../assets/Hero.JPG";

import "./Hero.css";

function Hero() {
  const { t } = useTranslation();
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
      alert(t("hero.errorType"));
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert(t("hero.errorSize"));
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
          {t("hero.title")}
        </h1>

        <h2>
          {t("hero.subtitle")}
        </h2>

        <p>
          {t("hero.description")}
        </p>

        <div className="hero-buttons">

          <label className="upload-button">

            <Upload size={18} />

            {t("hero.uploadBtn")}

            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={handleUpload}
              hidden
            />

          </label>

          <button className="explore-button">
            {t("hero.exploreBtn")}
            <ArrowRight size={17} />
          </button>

        </div>

        {image && (

          <div className="image-preview">

            <img
              src={image}
              alt={t("hero.selected")}
            />

            <div>
              <strong>{t("hero.selected")}</strong>

              <span>
                {t("hero.ready")}
              </span>

              <button>
                {t("hero.analyzeBtn")}
              </button>
            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Hero;
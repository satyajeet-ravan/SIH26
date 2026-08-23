import {
  MapPin,
  Info,
  ArrowRight,
  CircleDot,
  GlassWater
} from "lucide-react";

import girCow from "../assets/Gircow.png";

import "./PredictionCard.css";

function PredictionCard() {
  return (
    <div
      className="prediction-card"
      style={{
        backgroundImage: `url(${girCow})`
      }}
    >
      <div className="prediction-overlay"></div>

      <div className="prediction-content">

        <p className="prediction-label">
          Predicted Breed
        </p>

        <div className="prediction-heading">
          <h2>Gir Cow</h2>

          <span>
            92.4% Confidence
          </span>
        </div>

        <div className="breed-details">

          <Detail
            icon={CircleDot}
            label="Species"
            value="Cattle"
          />

          <Detail
            icon={MapPin}
            label="Origin"
            value="India (Gujarat)"
          />

          <Detail
            icon={GlassWater}
            label="Purpose"
            value="Milk"
          />

          <Detail
            icon={Info}
            label="Characteristics"
            value="Long ears, convex forehead, reddish coat, good milk yield"
          />

        </div>

        <button className="details-button">
          View Full Details
          <ArrowRight size={15} />
        </button>

      </div>
    </div>
  );
}

function Detail({ icon: Icon, label, value }) {
  return (
    <div className="detail">

      <Icon size={14} />

      <span>{label}</span>

      <strong>{value}</strong>

    </div>
  );
}

export default PredictionCard;
import {
  Image,
  UserRound,
  Sun,
  ScanFace
} from "lucide-react";

import "./SupportedImages.css";

const items = [
  {
    icon: Image,
    title: "Clear Image",
    description: "Better results with clear images"
  },
  {
    icon: UserRound,
    title: "Single Animal",
    description: "Best results with single animal in the frame"
  },
  {
    icon: Sun,
    title: "Good Lighting",
    description: "Natural lighting gives better accuracy"
  },
  {
    icon: ScanFace,
    title: "Side or Front View",
    description: "Side or front facing angle works best"
  }
];

function SupportedImages() {
  return (
    <section className="supported-images">

      <div className="supported-heading">
        <strong>Supported Images</strong>
        <span>JPG, JPEG, PNG (Max 10MB)</span>
      </div>

      {items.map((item) => {

        const Icon = item.icon;

        return (
          <div className="supported-item" key={item.title}>

            <div className="supported-icon">
              <Icon size={19} />
            </div>

            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>

          </div>
        );
      })}

    </section>
  );
}

export default SupportedImages;
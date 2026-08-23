import {
  UploadCloud,
  Cpu,
  Search,
  FileText,
  ArrowRight
} from "lucide-react";

import "./HowItWorks.css";

const steps = [
  {
    icon: UploadCloud,
    title: "1. Upload Image",
    description: "Upload clear image of cattle or buffalo"
  },
  {
    icon: Cpu,
    title: "2. AI Analysis",
    description: "Our AI model analyzes the features"
  },
  {
    icon: Search,
    title: "3. Breed Prediction",
    description: "Best matching breed is predicted"
  },
  {
    icon: FileText,
    title: "4. View Details",
    description: "Get detailed information about the breed"
  }
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">

      <div className="section-label">
        <span></span>
        HOW IT WORKS
      </div>

      <h2>
        Simple Steps, Accurate Results
      </h2>

      <div className="steps">

        {steps.map((step, index) => {

          const Icon = step.icon;

          return (
            <div className="step-wrapper" key={step.title}>

              <div className="step">

                <div className="step-icon">
                  <Icon size={27} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

              {index !== steps.length - 1 && (
                <ArrowRight
                  className="step-arrow"
                  size={24}
                />
              )}

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default HowItWorks;
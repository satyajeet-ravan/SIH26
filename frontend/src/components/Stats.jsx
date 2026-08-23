import {
  Beef,
  Target,
  Database,
  ShieldCheck
} from "lucide-react";

import "./Stats.css";

const stats = [
  {
    icon: Beef,
    number: "25+",
    title: "Cattle Breeds",
    subtitle: "Supported"
  },
  {
    icon: Beef,
    number: "15+",
    title: "Buffalo Breeds",
    subtitle: "Supported"
  },
  {
    icon: Target,
    number: "95%+",
    title: "Accuracy",
    subtitle: "of Prediction"
  },
  {
    icon: Database,
    number: "10K+",
    title: "Images",
    subtitle: "Trained"
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Secure & Private",
    subtitle: "Predictions"
  }
];

function Stats() {
  return (
    <section className="stats">

      {stats.map((stat, index) => {

        const Icon = stat.icon;

        return (
          <div className="stat-item" key={index}>

            <div className="stat-icon">
              <Icon size={27} />
            </div>

            <div>
              <strong>{stat.number}</strong>

              <p>{stat.title}</p>

              <small>{stat.subtitle}</small>
            </div>

          </div>
        );
      })}

    </section>
  );
}

export default Stats;
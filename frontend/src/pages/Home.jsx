import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import PredictionCard from "../components/PredictionCard";
import SupportedImages from "../components/SupportedImages";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Stats />

        <section className="how-prediction-section">
          <HowItWorks />
          <PredictionCard />
        </section>

        <SupportedImages />
      </main>
    </>
  );
}

export default Home;
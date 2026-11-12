import React from "react";
import "./Home.css";
import SolarFacts from "../components/SolarFacts";
import Footer from "../components/Footer";



const Home = () => {
  return (
    <div className="home">
      {/* hero section */}
      <div className="hero">
        <div className="overlay"></div>
        <h1 className="title">Explore The Planets</h1>
        <p className="tagline">Discover planets, moons, and fascinating space facts.</p>
        <button className="hero-btn" onClick={() => window.location.href = "/planets"}>
          Space Journey
        </button>
      </div>



      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>

        <div className="feature-cards">

          <div className="card">
            <h3>🌍 Planets</h3>
            <p>Learn about every planet in our solar system.</p>
          </div>

          <div className="card">
            <h3>🔭  Cosmic Explore</h3>
            <p>Discover stars, galaxies, and everything beyond planets.</p>
          </div>

          <div className="card">
            <h3>🚀 3D Space</h3>
            <p>Experience planets in a realistic 3D environment.</p>
          </div>

          <div className="card">
            <h3>🧠 Space Quiz</h3>
            <p>Test your knowledge and become a space expert.</p>
          </div>

        </div>
      </section>
      <SolarFacts/>
      <Footer/>
        </div>

  );
};

export default Home;

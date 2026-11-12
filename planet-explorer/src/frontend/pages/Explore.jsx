import star from "../assets/star.jpg";
import galaxy from "../assets/galaxy.jpg";
import nebula from "../assets/nebula.jpg";
import blackhole from "../assets/blackhole.jpg";
import supernova from "../assets/supernova.jpg";
import quasar from "../assets/quasar.jpg";
import darkmatter from "../assets/darkmatter.jpg";
import exoplanet from "../assets/exoplanet.jpg";
import pulsars from "../assets/pulsars.jpg";
import { useState } from "react";

const Explore = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={page}>
      {/* HERO */}
      <h1 style={title}>Cosmic Exploration🌌</h1>
      <p style={subtitle}>
        Discover stars, galaxies, and everything beyond planets
      </p>

      {/* CARDS */}
      <div style={grid}>
        <ExploreCard
          image={star}
          title="Stars"
          text="Massive glowing balls of gas that light up the universe and create elements essential for life."
        />

        <ExploreCard
          image={galaxy}
          title="Galaxies"
          text="Huge collections of stars, dust, and gas held together by gravity. Our home is the Milky Way."
        />

        <ExploreCard
          image={nebula}
          title="Nebulae"
          text="Beautiful cosmic clouds where stars are born and die, glowing with vibrant colors."
        />

        <ExploreCard
          image={blackhole}
          title="Black Holes"
          text="Mysterious regions of space with gravity so strong that even light cannot escape."
        />
        <ExploreCard
          image={supernova}
          title="Supernova"
          text="A massive stellar explosion that marks the dramatic death of a star and creates new elements in space."
        />
        <ExploreCard
          image={quasar}
          title="Quasar"
          text="An extremely bright cosmic object powered by a supermassive black hole at the center of a distant galaxy."
        />
        <ExploreCard
          image={darkmatter}
          title="Dark Matter"
          text="An invisible form of matter that makes up most of the universe but cannot be directly seen."
        />
        <ExploreCard
          image={exoplanet}
          title="Exoplanets"
          text="Planets that orbit stars outside our solar system. Some may even support life."
        />
        <ExploreCard
          image={pulsars}
          title="Pulsars"
          text="Highly magnetized, rotating neutron stars that emit beams of electromagnetic radiation."
        />

      </div>
    </div>
  );
};

/* CARD COMPONENT */
const ExploreCard = ({ image, title, text }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...card,
        transform: hover ? "translateY(-10px) scale(1.05)" : "none",
        boxShadow: hover
          ? "0 0 35px rgba(120,170,255,0.7)"
          : card.boxShadow
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={image}
        alt={title}
        style={{
          ...imageStyle,
          transform: hover ? "scale(1.1)" : "scale(1)",
          transition: "transform 0.4s ease"
        }}
      />
      <h2 style={{ margin: "12px 0 8px" }}>{title}</h2>

     <p style={{ opacity: 0.85, lineHeight: "1.6" }}>{text}</p>

    </div>
  );
};

const page = {
  minHeight: "100vh",
  padding: "90px 40px",
  background: "radial-gradient(circle at top,  #0b1d3a, #020617)",
  color: "#fff",
  textAlign: "center"
};

const title = {
  fontSize: "32px",
  marginBottom: "10px"
};

const subtitle = {
  fontSize: "18px",
  opacity: 0.8,
  marginBottom: "40px"
};

const grid  = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "60px",
  maxWidth: "1100px",
  margin: "auto"
};

const card = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 0 20px rgba(0,0,0,0.6)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer"
};


const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px",
  marginBottom: "15px"
};





export default Explore;

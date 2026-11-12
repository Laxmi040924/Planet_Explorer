import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import planetsData from "../data/planetsData";
import "./PlanetDetails.css";

export default function PlanetDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  // because planetsData is an array
  const planet = planetsData.find(p => p.id === id);

  if (!planet) return <h2 style={{color:"white"}}>Planet Not Found</h2>;

  return (
    <div className="planet-details">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="banner">
        <img src={planet.banner} alt={planet.name} />

        <div className="banner-text">
          <h1>{planet.name}</h1>
          <p>{planet.subtitle}</p>
        </div>
      </div>

      <div className="info">

  <h2>About</h2>
  <div className="info-box">
    <p>{planet.description}</p>
  </div>

  <h2>Key Facts</h2>
  <div className="info-box facts-grid">
      <div className="fact-item">Distance: {planet.facts.distance}</div>
      <div className="fact-item">Day Length: {planet.facts.day}</div>
      <div className="fact-item">Year Length: {planet.facts.year}</div>
      <div className="fact-item">Gravity: {planet.facts.gravity}</div>
      <div className="fact-item">Radius: {planet.facts.radius}</div>
      <div className="fact-item">Temp: {planet.facts.temperature}</div>
  </div>

  <h2>Moons</h2>
  <div className="info-box">
    {planet.moons.map((m,i)=>(
      <span key={i} className="moon-tag">{m}</span>
    ))}
  </div>

  <h2>Did You Know?</h2>
  <div className="info-box">
    <ul>
      {planet.interesting.map((f,i)=>(
        <li key={i}>{f}</li>
      ))}
    </ul>
  </div>

</div>
</div>
  );
}
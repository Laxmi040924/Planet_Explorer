import React from "react";
import "./Planets.css";
import { useNavigate } from "react-router-dom";
import mercury from "../assets/mercury.jpg";
import venus from "../assets/venus.jpg";
import earth from "../assets/earth.jpg";
import mars from "../assets/mars.jpg";
import jupiter from "../assets/jupiter.jpg";
import saturn from "../assets/saturn.jpg";
import uranus from "../assets/uranus.jpg";
import neptune from "../assets/neptune.jpg";



const planets = [
    { id:"mercury",name: "Mercury", image: mercury },
    { id: "venus",name: "Venus", image: venus },
    { id:"earth",name: "Earth", image: earth },
    { id:"mars",name: "Mars", image: mars },
    { id:"jupiter",name: "Jupiter", image: jupiter },
    { id:"saturn",name: "Saturn", image: saturn },
    { id:"uranus",name: "Uranus", image: uranus },
    { id:"neptune",name: "Neptune", image: neptune },
];


const Planets = () => {
  const navigate=useNavigate();
  return (
    <div className="planets-page">
      <h1 className="planets-title">Planets in Our Solar System 🪐</h1>

      <div className="planets-grid">
        {planets.map((planet,index) => (
          <div className="planet-card" key={index}>
            <div className="planet-image">
              <img src={planet.image} alt={planet.name} />
            </div>

            <h3>{planet.name}</h3>
         
            <button className="details-btn" onClick={()=> navigate(`/planet/${planet.id}`)}>
              See Details
            </button>
           
         
          </div>
        ))}
      </div>
    </div>
  );   
};

export default Planets;



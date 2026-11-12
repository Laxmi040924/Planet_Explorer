import React, { useRef } from "react";
import "./SolarFacts.css";

const items = [
  {
    id: 1,
    title: "1.Many Worlds",
    desc: "Our solar system has eight planets,and five dwarf planets.",
    img: "./src/frontend/assets/slide1.jpg"
  },
  {
    id: 2,
    title: "2.Small Worlds,Too",
    desc: "About 1.2 million asteroids,and about 4,000 comets are in our solar system.",
    img: "./src/frontend/assets/slide2.jpg"
  },
  {
    id: 3,
    title: "3.Lots of Moons",
    desc: "Our solar system has hundreds of moons.",
    img: "./src/frontend/assets/slide3.jpg"
  },
  {
    id: 4,
    title: "4.Meet Me in the Milky Way",
    desc: "Our solar sytem is in one of the Milky Way galaxy's spiral arms called the Orian Spur.",
    img: "./src/frontend/assets/slide4.jpg"
  },
  {
    id: 5,
    title: "5.A Long Way Around",
    desc: "Our solar system takes about 230 million years to orbit the galactic center.",
    img: "./src/frontend/assets/slide5.jpg"
  },
  {
    id: 6,
    title: "6.Spiraling Through Space",
    desc: "The Milky Way is a barred spiral galaxy.",
    img: "./src/frontend/assets/slide6.jpg"
  },
  {
    id: 7,
    title: "7.Diverse Atmospheres",
    desc: "Our solar system has many worlds with many types of atmospheres.",
    img: "./src/frontend/assets/slide7.jpg"
  },
  {
    id: 8,
    title: "8.Ring Worlds",
    desc: "The four giant planets-and at least one asteroids-have rings.",
    img: "./src/frontend/assets/slide8.jpg"
  },
  {
    id: 9,
    title: "9.Getting Out There",
    desc: "More than 300 robotic spacecraft have left Earth's orbit,and 24 U.S. astronauts have traveled to the moon.",
    img: "./src/frontend/assets/slide9.jpg"
  },
  {
    id: 10,
    title: "10.Life as We Know It",
    desc: "So far,Earth is the only place we've found life in our solar system.",
    img: "./src/frontend/assets/slide10.jpg"
  }
];

function SolarFacts() {
  const sliderRef = useRef(null);
  const scrollRight = () => {
    const slider = sliderRef.current;
    const scrollStep = 300; 
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft >= maxScroll) {
     
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollStep, behavior: "smooth" });
    }
  };

  return (
    <div className="ten-container">
      <h2 className="ten-title">10 THINGS ABOUT OUR SOLAR SYSTEM</h2>
      <button className="arrow right" onClick={scrollRight}>&gt;</button>
      <div>
        <div className="ten-slider" ref={sliderRef}>
          {[...items].map((item, index) => (
            <div className="ten-item" key={index}>
              <img src={item.img} alt={item.title} className="ten-img" />
              <div className="ten-content">
                <p className="ten-text">{item.title}</p>
                <p className="ten-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SolarFacts;

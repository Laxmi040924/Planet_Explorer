import mercury from "../assets/mercury.jpg";
import venus from "../assets/venus.jpg";
import earth from "../assets/earth.jpg";
import mars from "../assets/mars.jpg";
import jupiter from "../assets/jupiter.jpg";
import saturn from "../assets/saturn.jpg";
import uranus from "../assets/uranus.jpg";
import neptune from "../assets/neptune.jpg";


const planetsData = [
{
 id:"mercury",
 name:"Mercury",
 banner:mercury,
 subtitle:"The smallest and fastest planet — closest to the Sun.",
 description:
  "Mercury is the smallest planet in our solar system and the closest to the Sun. Due to its thin atmosphere, it experiences extreme temperature changes.",
 facts:{
  distance:"57.9 million km",
  day:"59 Earth days",
  year:"88 Earth days",
  gravity:"3.7 m/s²",
  radius:"2,439 km",
  temperature:"167°C"
 },
 moons:["No natural moons"],
 interesting:[
  "Mercury has wrinkles caused by cooling and shrinking.",
  "It has the largest temperature variation in the solar system.",
  "A day on Mercury is longer than its year."
 ]
},
{
 id:"venus",
 name:"Venus",
 banner:venus,
 subtitle:"The hottest planet — Earth's toxic twin.",
 description:
  "Venus is the second planet from the Sun and is often called Earth's twin because both are similar in size. However, Venus has an extremely thick atmosphere made mostly of carbon dioxide, trapping heat and making it the hottest planet in the solar system.",
 facts:{
  distance:"108.2 million km",
  day:"243 Earth days (slowest rotation)",
  year:"225 Earth days",
  gravity:"8.87 m/s²",
  radius:"6,052 km",
  temperature:"475°C"
 },
 moons:["No moons — Venus has none"],
 interesting:[
  "Venus rotates backward — the Sun rises in the west and sets in the east.",
  "It is hotter than Mercury even though Mercury is closer to the Sun.",
  "The pressure on Venus is 90 times Earth's — like being deep underwater.",
  "Its clouds are made of sulfuric acid.",
  "Venus is the brightest planet in the night sky."
 ]
},
{
 id:"earth",
 name:"Earth",
 banner:earth,
 subtitle:"Our home — the only known planet with life.",
 description:
  "Earth is the third planet from the Sun and the only known world to support life. Its atmosphere protects it and maintains suitable temperatures.",
 facts:{
  distance:"149.6 million km",
  day:"24 hours",
  year:"365.25 days",
  gravity:"9.8 m/s²",
  radius:"6,371 km",
  temperature:"15°C"
 },
 moons:["1 Moon — Luna"],
 interesting:[
  "Earth is the densest planet in the solar system.",
  "70% of Earth's surface is covered in water.",
  "Earth has a magnetic field that shields us from solar radiation."
 ]
},
{
 id:"mars",
 name:"Mars",
 banner:mars,
 subtitle:"The Red Planet — possible past water world.",
 description:
  "Mars is known as the Red Planet due to iron oxide on its surface. Scientists believe liquid water once existed here.",
 facts:{
  distance:"227.9 million km",
  day:"24.6 hours",
  year:"687 Earth days",
  gravity:"3.71 m/s²",
  radius:"3,389 km",
  temperature:"-60°C"
 },
 moons:["Phobos","Deimos"],
 interesting:[
  "Mars has the tallest volcano — Olympus Mons.",
  "Mars has dust storms that can cover the entire planet.",
  "Rovers like Curiosity and Perseverance are exploring Mars."
 ]
},
{
 id:"jupiter",
 name:"Jupiter",
 banner:jupiter,
 subtitle:"The gas giant — largest planet in the solar system.",
 description:
  "Jupiter is the fifth planet from the Sun and the largest in our solar system. It is a gas giant with a massive storm known as the Great Red Spot.",
 facts:{
  distance:"778 million km",
  day:"9.9 hours",
  year:"12 Earth years",
  gravity:"24.8 m/s²",
  radius:"69,911 km",
  temperature:"-145°C"
 },
 moons:["More than 90 moons","Famous — Io, Europa, Ganymede, Callisto"],
 interesting:[
  "Jupiter's Great Red Spot is over 300 years old.",
  "Ganymede is the largest moon in the solar system.",
  "Jupiter protects inner planets by absorbing asteroids."
 ]
},
{
 id:"saturn",
 name:"Saturn",
 banner:saturn,
 subtitle:"The Ringed Giant — with stunning ice rings.",
 description:
  "Saturn is famous for its beautiful ring system made of ice and rock. It is the second-largest planet in the solar system.",
 facts:{
  distance:"1.43 billion km",
  day:"10.7 hours",
  year:"29 Earth years",
  gravity:"10.4 m/s²",
  radius:"58,232 km",
  temperature:"-178°C"
 },
 moons:["More than 80 moons","Titan is the largest"],
 interesting:[
  "Titan has lakes of methane and ethane.",
  "Saturn's rings are mostly ice.",
  "Saturn is the least dense planet — it could float in water!"
 ]
},
{
 id:"uranus",
 name:"Uranus",
 banner:uranus,
 subtitle:"The tilted ice giant — rotates on its side.",
 description:
  "Uranus is an ice giant with a unique sideways rotation. This causes extreme seasons that last over 20 years.",
 facts:{
  distance:"2.87 billion km",
  day:"17 hours",
  year:"84 Earth years",
  gravity:"8.69 m/s²",
  radius:"25,362 km",
  temperature:"-224°C"
 },
 moons:["27 known moons","Titania & Oberon are largest"],
 interesting:[
  "Uranus spins almost completely sideways.",
  "It has faint rings like Saturn.",
  "It appears blue due to methane gas."
 ]
},
{
 id:"neptune",
 name:"Neptune",
 banner:neptune,
 subtitle:"The windy ice giant — home to the strongest storms.",
 description:
  "Neptune is the farthest planet from the Sun. It is known for its deep blue color and extreme supersonic winds.",
 facts:{
  distance:"4.5 billion km",
  day:"16 hours",
  year:"165 Earth years",
  gravity:"11.15 m/s²",
  radius:"24,622 km",
  temperature:"-214°C"
 },
 moons:["14 known moons — Triton is the largest"],
 interesting:[
  "Neptune has the strongest winds in the solar system.",
  "Triton orbits backward — retrograde motion.",
  "It was discovered through mathematics before telescopes saw it."
 ]
},
]
export default planetsData;
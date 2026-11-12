import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { Stars } from "@react-three/drei";

/* TEXTURES  */
import sunImg from "../assets/sun.jpg";
import mercuryImg from "../assets/mercury.jpg";
import venusImg from "../assets/venus.jpg";
import earthImg from "../assets/earth.jpg";
import marsImg from "../assets/mars.jpg";
import jupiterImg from "../assets/jupiter.jpg";
import saturnImg from "../assets/saturn.jpg";
import uranusImg from "../assets/uranus.jpg";
import neptuneImg from "../assets/neptune.jpg";

/*PLANET DATA */
const planets = [
  { name: "Mercury", texture: mercuryImg, size: 0.3, distance: 4, speed: 0.04 },
  { name: "Venus", texture: venusImg, size: 0.4, distance: 5.5, speed: 0.03 },
  { name: "Earth", texture: earthImg, size: 0.45, distance: 7, speed: 0.025 },
  { name: "Mars", texture: marsImg, size: 0.35, distance: 8.5, speed: 0.02 },
  { name: "Jupiter", texture: jupiterImg, size: 0.8, distance: 11, speed: 0.015 },
  { name: "Saturn", texture: saturnImg, size: 0.7, distance: 14, speed: 0.012 },
  { name: "Uranus", texture: uranusImg, size: 0.6, distance: 17, speed: 0.01 },
  { name: "Neptune", texture: neptuneImg, size: 0.6, distance: 20, speed: 0.008 },
];

/* SUN */
function Sun() {
  const texture = new THREE.TextureLoader().load(sunImg);

  return (
    <mesh>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        map={texture}
        emissive={"#ff9a42"}
        emissiveIntensity={4}
        toneMapped={false}
      />
      <Text
        position={[0, 2.2, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Sun
      </Text>


    </mesh>
  );
}

/*  ORBIT RING  */
function OrbitRing({ radius }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 64]} />
      <meshBasicMaterial color="#888" side={THREE.DoubleSide} />
    </mesh>
  );
}

/*  PLANET  */
function Planet({ data }) {
  const planetRef = useRef();
  const angle = useRef(Math.random() * Math.PI * 2);
  const texture = new THREE.TextureLoader().load(data.texture);

  useFrame((state, delta) => {
    angle.current += data.speed * delta * 20;   //  orbit slow
    planetRef.current.position.x = Math.cos(angle.current) * data.distance;
    planetRef.current.position.z = Math.sin(angle.current) * data.distance;

    planetRef.current.rotation.y += delta * 0.2; //  self rotation slow
  });


  return (
    <>
      <OrbitRing radius={data.distance} />

      <mesh ref={planetRef}>
        <sphereGeometry args={[data.size, 32, 32]} />
        <meshStandardMaterial map={texture} />

        <Text
          position={[0, data.size + 0.4, 0]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"

        >
          {data.name}
        </Text>
      </mesh>
    </>
  );
}

/*  MAIN SPACE  */
export default function Space3D() {
  return (
    <div style={{ height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 8, 18], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />

        <Sun />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {planets.map((planet, index) => (
          <Planet key={index} data={planet} />
        ))}


        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 1.2}
          minPolarAngle={Math.PI / 6}
          dampingFactor={0.05}
          enableDamping
        />
        {/* Directional light → side shadow */}


      </Canvas>
    </div>
  );
}

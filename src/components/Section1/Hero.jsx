"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Robo } from "./robo";

const Hero = () => {
  const modelRef = useRef();

  return (
    <div className="flex justify-center items-center h-full w-[50%]"
     style={{
        background:
          "radial-gradient(circle, rgba(16, 163, 209, 0.5) 0%, rgba(16, 163, 209, 0) 70%)",
      }}
    >
      <Canvas className="flex justify-center items-center">
        <ambientLight position={[0, 0, 0]} intensity={1000} />
        <pointLight position={[0, 0, 20]} intensity={1000} />
        <pointLight position={[0, 0, -20]} intensity={1000} />
        <pointLight position={[-20, 0, 0]} intensity={500} />
        <pointLight position={[20, 0, 0]} intensity={500} />
        <OrbitControls
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <group
            ref={modelRef}
            scale={[0.19, 0.19, 0.19]}
            position={[0, -4, 0]}
          >
            <Robo />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero;

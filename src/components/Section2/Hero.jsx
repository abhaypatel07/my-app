"use client";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Modelfirst } from "../Robot";

const Hero = () => {
  const modelRef = useRef();

  return (
    <div
      className="flex justify-center items-center h-[100vh] w-[60%]">
      <Canvas className="flex justify-center items-center">
        <ambientLight position={[0, 0, 0]} intensity={1} />
        <OrbitControls
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          enableZoom={false}
        />
        <Suspense fallback={null}>
          <group
            ref={modelRef}
            scale={[2.1, 2.1, 2.1]}
            position={[0, -2, 0]}
          >
            <Modelfirst />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero;

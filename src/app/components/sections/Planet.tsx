"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { TextureLoader } from "three";

export default function Planet() {
  const planetRef = useRef<THREE.Mesh>(null);
  const earthTexture = useLoader(TextureLoader, "/image/earth.jpg");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (planetRef.current) {
      planetRef.current.rotation.y = t * 0.2; // Smooth auto-rotate
    }
  });

  return (
    <group>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Sphere ref={planetRef} args={[1, 64, 64]} scale={2}>
        <meshStandardMaterial map={earthTexture} transparent />
      </Sphere>
    </group>
  );
}

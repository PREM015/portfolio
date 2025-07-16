"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere, Ring } from "@react-three/drei";

export default function Planet() {
  const planetRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, "/image/herosection.png");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (planetRef.current) {
      planetRef.current.rotation.y = t * 0.3;
      planetRef.current.position.y = Math.sin(t * 0.5) * 0.1; // subtle float
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <>
      <Sphere ref={planetRef} args={[1, 64, 64]} scale={2}>
        <meshStandardMaterial map={texture} roughness={0.6} metalness={0.3} />
      </Sphere>

      <Ring
        ref={ringRef}
        args={[1.5, 1.8, 128]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
      >
        <meshBasicMaterial
          color="#00ffff"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </Ring>
    </>
  );
}

// components/main/StarBackground.tsx
"use client";

import React, { useState, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error maath/random has no TypeScript definitions
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: Record<string, unknown>) => {
  const ref = useRef<THREE.Points>(null!);

  // Generate 5,000 points → need 5,000 * 3 floats (x, y, z)
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;

"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const TiltImage = ({
  src,
  alt,
  size = 250,
}: {
  src: string;
  alt: string;
  size?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // normalized pointer positions
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // REALLY snappy spring: stiffness ↑↑, damping ↓, mass a bit lighter
  const springConfig = { stiffness: 2000, damping: 15, mass: 0.3 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // map to a wider rotation
  const rotateY = useTransform(smoothX, [0, 1], [-35, 35]);
  const rotateX = useTransform(smoothY, [0, 1], [35, -35]);

  // zoom a little more on hover
  const baseScale = useTransform(smoothY, [0, 1], [1.03, 1.08]);

  // track whether pointer is over so we can jump back
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - left) / width);
    y.set((e.clientY - top) / height);
  };

  const handleMouseLeave = () => {
    // snap back instantly
    x.jump(0.5);
    y.jump(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale: baseScale,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      className="w-fit rounded-full shadow-2xl"
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full border border-[#7042f88b] shadow-[0_0_20px_rgba(112,66,248,0.5)]"
      />
    </motion.div>
  );
};

export default TiltImage;

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
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springOpts = { stiffness: 600, damping: 8 };
  const smoothX = useSpring(x, springOpts);
  const smoothY = useSpring(y, springOpts);

  // Amplify tilt for depth
  const rotateY = useTransform(smoothX, [0, 1], [-25, 25]);
  const rotateX = useTransform(smoothY, [0, 1], [25, -25]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const xNorm = (e.clientX - left) / width;
    const yNorm = (e.clientY - top) / height;
    x.set(xNorm);
    y.set(yNorm);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="w-fit rounded-full shadow-xl transition-transform duration-300"
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full border border-[#7042f88b] shadow-lg"
      />
    </motion.div>
  );
};

export default TiltImage;

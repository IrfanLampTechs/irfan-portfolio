"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

// Animation variants
const slideInFrom = (
  direction: "left" | "right" | "bottom" | "top",
  delay = 0.2
) => {
  let x = 0;
  let y = 0;

  if (direction === "left") x = -100;
  else if (direction === "right") x = 100;
  else if (direction === "bottom") y = 100;
  else if (direction === "top") y = -100;

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    },
  };
};

const Project = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-0 mt-32 sm:mt-[-150px]"
      id="projects"
    >
      <motion.div
        variants={slideInFrom("top", 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-14">
          My Projects
        </h1>
      </motion.div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-[-20px] sm:mt-0">
        <motion.div
          variants={slideInFrom("left", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectCard
            src="/NextWebsite.png"
            title="Modern Next.js Portfolio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </motion.div>

        <motion.div
          variants={slideInFrom("bottom", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectCard
            src="/CardImage.png"
            title="Interactive Website Cards"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </motion.div>

        <motion.div
          variants={slideInFrom("right", 0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Website"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Project;

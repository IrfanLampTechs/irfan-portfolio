"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

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
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      src: "/yaabi.png",
      title: "YAABI",
      description:
        "This marketing software was developed using Laravel, with a RESTful API powering the backend. I was responsible for the backend development of this project, where I implemented a range of essential features to streamline customer engagement and advertising workflows. I built the functionality for uploading customer data through Excel files and integrated third-party APIs such as DX and Tixly to fetch customer information in real-time. I also developed a domain verification system to ensure secure communication. The system allows users to send targeted emails and SMS messages based on customer lists, tags, and segments. To handle high-volume operations efficiently, I implemented Laravel queue jobs for bulk customer data insertion and automated the scheduling of newsletters and SMS campaigns. Additionally, I integrated SparkPost APIs to track detailed email engagement metrics, such as opens, clicks, views, and bounces, providing accurate insights for advertising effectiveness.",
      link_address: "https://yaabi.io/",
    },
    {
      src: "/smart_nir.png",
      title: "Smart Nir",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "https://smartnir.com/",
    },
    {
      src: "/vloo.png",
      title: "VLOO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "https://vloo-fe-redesign.vercel.app/",
    },
    {
      src: "/oggato.PNG",
      title: "Oggato",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "https://oggato-fe.vercel.app/",
    },
    {
      src: "/deshi_trust.PNG",
      title: " Deshi Trust",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "https://deshitrust.com/",
    },
    {
      src: "/next_js_project.PNG",
      title: "Modern Next.js Portfolio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "",
    },
    {
      src: "/advisor_bd.PNG",
      title: "Space Themed Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      link_address: "https://www.adviserbangladesh.com/",
    },

    {
      src: "/times_project.PNG",
      title: "Times Group BD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "https://timesgroupbd.com/",
    },
    {
      src: "/promantra.PNG",
      title: "Promantra",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "https://promantraa.com/",
    },

    {
      src: "/lamptechs.PNG",
      title: "Lamp Techs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "https://lamptechs.com/",
    },
    {
      src: "/hrm.PNG",
      title: "HRMatrix",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address: "https://hr-matrix.vercel.app/",
    },

    {
      src: "/lgestic_template.PNG",
      title: "Logistics website template",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link_address:
        "https://irfanazad588.github.io/Logistics-website-template/",
    },
  ];

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

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 mt-[-20px] sm:mt-0">
        {(showAll ? projects : projects.slice(0, 6)).map((project, index) => (
          <motion.div
            key={index}
            variants={slideInFrom(
              index % 3 === 0 ? "left" : index % 3 === 1 ? "bottom" : "right",
              0.5
            )}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
              link_address={project.link_address}
            />
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="opacity-[0.7] mt-10 px-6 py-2 flex items-center gap-2 bg-gradient-to-r from-[#2e1f57] to-[#19178a] border  border-[#7B49CA] text-white font-bold rounded-full hover:scale-105 transition-transform z-30"
      >
        {showAll ? (
          <>
            Show Less <ChevronUpIcon className="w-5 h-5" strokeWidth={2.5} />
          </>
        ) : (
          <>
            More Projects{" "}
            <ChevronDownIcon className="w-5 h-5" strokeWidth={2.5} />
          </>
        )}
      </button>
    </div>
  );
};

export default Project;

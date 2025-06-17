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
        "This marketing software was developed using Laravel, with a RESTful API powering the backend. I handled the backend development of this Laravel-based project, where I implemented a range of essential features to streamline customer engagement and advertising workflows. I built the functionality for uploading customer data through Excel files and integrated third-party APIs such as DX and Tixly to fetch customer information in real-time. I also developed a domain verification system to ensure secure communication. The system allows users to send targeted emails and SMS messages based on customer lists, tags, and segments. To handle high-volume operations efficiently, I implemented Laravel queue jobs for bulk customer data insertion and automated the scheduling of newsletters and SMS campaigns. Additionally, I integrated SparkPost APIs to track detailed email engagement metrics, such as opens, clicks, views, and bounces, providing accurate insights for advertising effectiveness.",
      link_address: "https://yaabi.io/",
    },
    {
      src: "/smart_nir.png",
      title: "Smart Nir",
      description:
        "Smart Nir is a smart building management solution designed to streamline operations within residential and commercial complexes. I handled the backend development of this Laravel-based project, utilizing RESTful APIs to build a scalable and modular system. I implemented a full SaaS structure that includes subscription management and dynamic menu permission based on user roles. The platform features a comprehensive accounting module covering chart of accounts, general ledger, journal entries, asset and inventory tracking, cash flow management (including cash in, cash out, and cash in hand), loan tracking, payroll, service charge processing, and automated tenant rent management using Laravel’s scheduler. Additionally, I developed modules for managing building security, including child security tracking, as well as a dedicated parking management system. To enhance communication, I integrated SMS and email APIs, enabling automated notifications and alerts throughout the system.",
      link_address: "https://smartnir.com/",
    },
    {
      src: "/vloo.png",
      title: "VLOO",
      description:
        "This project is a workspace booking platform built with Laravel, featuring a RESTful API for robust backend operations. I was involved in the backend development, where I implemented a seamless space booking system integrated with Stripe for secure and efficient payment processing. To enhance the user experience, I developed a dynamic space availability calendar that allows users to view and reserve available workspaces in real time. Additionally, I built an automated dispatch system that calculates and distributes monthly earnings to space owners through Stripe, ensuring timely and accurate payouts. This platform offers a reliable and scalable solution for managing shared workspaces and streamlining the booking and payment process.",
      link_address: "https://vloo-fe-redesign.vercel.app/",
    },
    {
      src: "/oggato.PNG",
      title: "Oggato",
      description:
        "This project is a real-time live chat platform developed using Laravel, with a RESTful API powering the backend. I contributed to the backend development by implementing core communication features, including one-to-one messaging and global chat functionality, using Pusher WebSocket for real-time interaction. The platform also includes a friend request system and an interest-based friend filtering mechanism, allowing users to connect with others who share similar interests. The overall system is designed to provide a smooth and responsive chatting experience, enabling users to engage and build connections in real time.",
      link_address: "https://oggato-fe.vercel.app/",
    },
    {
      src: "/deshi_trust.PNG",
      title: " Deshi Trust",
      description:
        "This project is a multi-vendor e-commerce platform developed with Laravel, utilizing RESTful APIs for the backend. I contributed to the backend development by designing a scalable multi-vendor database structure to efficiently manage multiple sellers and their respective products. I also developed APIs for the landing page to dynamically load content and improve user engagement. In addition, I implemented essential e-commerce functionalities such as wishlist management, cart operations, category and subcategory handling, as well as discount and coupon features, ensuring a smooth and feature-rich shopping experience for end users.",
      link_address: "https://deshitrust.com/",
    },
    {
      src: "/next_js_project.PNG",
      title: "Modern Next.js Portfolio",
      description:
        "This is a visually engaging, space-themed portfolio website developed by me using modern web technologies. Built with Next.js and styled using Tailwind CSS, the site delivers a responsive and optimized user experience. I integrated Framer Motion to add smooth animations, enhancing the interactivity of the interface. The project also features 3D visual effects powered by Three.js and dynamic text animations using react-simple-typewriter. This portfolio showcases my skills in modern frontend development, creative UI/UX design, and interactive web experiences.",
      link_address: "",
    },
    {
      src: "/advisor_bd.PNG",
      title: "Advisers Bangladesh",
      description:
        "This is a Laravel-based project in which I contributed to both frontend and backend development. I redesigned the visitor-facing landing page to enhance user experience and improve visual appeal using modern frontend techniques. Additionally, I resolved several bugs to ensure smoother performance and system stability. A key highlight of my contribution was the implementation of a Bangladeshi tax calculation algorithm, tailored to meet local taxation rules and compliance requirements. This project demonstrates my ability to work across the full stack and solve domain-specific challenges effectively.",

      link_address: "https://www.adviserbangladesh.com/",
    },

    {
      src: "/times_project.PNG",
      title: "Times Group BD",
      description:
        "This is the official website of Times Group BD, fully developed by me using Laravel as the backend framework. The project includes both frontend and backend development. The frontend was built with HTML, CSS, and Bootstrap to ensure a responsive, user-friendly design that reflects the organization's brand identity. On the backend, I utilized Laravel to develop a structured, secure, and scalable system, enabling dynamic content management and smooth data handling. This project showcases my ability to deliver complete web solutions from design to deployment.",
      link_address: "https://timesgroupbd.com/",
    },
    {
      src: "/promantra.PNG",
      title: "Promantra",
      description:
        "This project is an online examination management system built with Laravel, utilizing a RESTful API for backend operations. I worked on developing key backend functionalities to streamline the exam creation and evaluation process. The system allows administrators to upload questions directly through Excel files, making content management efficient and scalable. I implemented flexible exam configuration features, enabling the platform to support both full and partial exams, along with automated result generation. Additionally, I developed APIs for the landing page to dynamically present exam-related content and improve overall user interaction with the platform.",
      link_address: "https://promantraa.com/",
    },

    {
      src: "/lamptechs.PNG",
      title: "Lamp Techs",
      description:
        "This project is the official website of Lamp Techs, developed using Laravel with a RESTful API powering the backend. I was responsible for developing approximately 60% of the backend APIs, focusing on building scalable and secure endpoints to support the website’s dynamic content and functionality. The project showcases a clean and professional interface, with the backend ensuring smooth data flow, efficient content management, and seamless user interaction across the platform.",
      link_address: "https://lamptechs.com/",
    },
    {
      src: "/hrm.PNG",
      title: "HRMatrix",
      description:
        "This project is an HR management system developed using Laravel, featuring a RESTful API architecture for efficient and scalable backend operations. I contributed to the backend by implementing a complete SaaS structure, supporting multi-tenant environments and subscription-based access control. The platform includes comprehensive modules for employee management and payroll processing, streamlining key HR functions. I also integrated attendance tracking with ZKTeco biometric devices, enabling real-time monitoring and accurate reporting. In addition, I developed essential accounting features to facilitate smooth financial operations, establishing the system as a robust and reliable solution for end-to-end organizational management.",
      link_address: "https://hr-matrix.vercel.app/",
    },

    {
      src: "/lgestic_template.PNG",
      title: "Logistics website template",
      description:
        "This project involved the development of a fully responsive frontend template using HTML, CSS, Bootstrap, and JavaScript. I designed and implemented the layout with a focus on clean structure, modern aesthetics, and cross-browser compatibility. The template ensures a seamless user experience across different devices and screen sizes, incorporating interactive elements and smooth transitions to enhance user engagement. This work reflects my proficiency in frontend development and attention to both design and usability.",
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

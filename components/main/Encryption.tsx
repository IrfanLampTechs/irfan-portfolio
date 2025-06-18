"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import TiltImage from "../sub/TiltImage";

const Encryption = () => {
  return (
    <motion.div className="mt-[-120px] sm:mt-0">
      <div
        className="mt-20 flex flex-row relative items-center justify-center min-h-screen w-full h-full overflow-visible"
        id="about-me"
      >
        <div className="absolute w-auto h-auto top-0 z-[5]">
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[40px] font-medium text-center text-gray-200"
          >
            About
            <span
              className=" text-transparent bg-clip-text bg-gradient-to-r
          from-purple-500 to-cyan-500"
            >
              {" "}
              Me{" "}
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center  absolute z-[30] w-full px-4">
          <div className="mt-52 sm:mt-[-350] Welcome-box w-full max-w-[360px] sm:max-w-5xl border border-[#7042f88b] opacity-[0.9] p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6">
            {/* Image (top on mobile, right on desktop) */}

            <motion.div
              variants={slideInFromLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-center md:order-2 w-full md:w-auto">
                <TiltImage
                  src="/upscalemedia-transformed.jpeg"
                  alt="Irfan Azad"
                  size={250}
                />
              </div>
            </motion.div>
            {/* Text Content */}

            <div className="flex-1 md:order-1 text-justify w-full ">
              <motion.div
                variants={slideInFromRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="Welcome-text text-sm text-white leading-relaxed break-words">
                  I work to provide top-notch software solutions that tackle
                  real-world problems, driven by a dedication to innovation and
                  excellence. I’m a dedicated and versatile software engineer
                  with hands-on experience in building full-stack applications
                  using modern tools like PHP Laravel for robust backend systems
                  and Next.js for dynamic frontend solutions. I’ve contributed
                  to the successful delivery of diverse projects, including a
                  marketing platform, workspace booking platform, e-commerce
                  site, chat applications, and management systems—always with a
                  focus on performance, scalability, and clean architecture. I
                  have built and maintained RESTful APIs, designed and
                  implemented SaaS structures, and handled complex backend tasks
                  involving API development, third-party API integration,
                  Payment system, and relational database management. These
                  experiences have sharpened my ability to build secure,
                  maintainable, and efficient infrastructures tailored to
                  real-world needs. With a degree in Computer Science and
                  Engineering and published research in Natural Language
                  Processing and Deep Learning, I bring an academic foundation
                  that fuels my passion for innovation and continuous learning.
                  I’m a strong problem-solver, an effective team collaborator,
                  and someone who genuinely enjoys turning ideas into impactful,
                  working software.
                </h3>
              </motion.div>
            </div>
          </div>
        </div>

        {/* <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end to end encryption
        </div>
      </div> */}
        {/* <div className="w-full flex items-start absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full"
          src="encryption.webm"
        />
      </div> */}
      </div>
    </motion.div>
  );
};

export default Encryption;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  slideInFromLeft,
  // slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center md:px-20 px-6 mt-10 sm:mt-32 w-full z-[30]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Mobile-only Image - positioned properly */}
        <motion.div
          className="w-full flex justify-end pr-0 mt-10 items-center sm:hidden mb-2"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            src="/mainIconsdark 1 1 1 (1).svg"
            alt="work icons"
            height={150}
            width={150}
          />
        </motion.div>

        <motion.div
          variants={slideInFromTop}
          className="mt-[-140px] sm:mt-8 flex flex-col gap-1 sm:gap-3 text-2xl sm:text-4xl md:text-5xl font-bold text-white max-w-[90%] sm:max-w-[100%] md:w-auto md:h-auto sm:w-full"
        >
          <div>Hi, I am</div>
          <div className="text-3xl sm:text-5xl md:text-6xl">Md. Irfan Azad</div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-0 md:mt-1 text-lg sm:text-3xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              <Typewriter
                words={[
                  "Programmer",
                  "Software Engineer",
                  "Backend Developer",
                  "Fronted Developer",
                  "Full Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-lg text-gray-400 max-w-[600px]"
        >
          I&apos;m a motivated and versatile individual, always eager to take on
          new challenges. With a passion for learning, I am dedicated to
          delivering high-quality results. With a positive attitude and a growth
          mindset, I am ready to make a meaningful contribution and achieve
          great things.
        </motion.p>

        <div className="flex flex-wrap gap-2 sm:gap-4 mt-2">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 sm:px-6 button-primary text-center text-white 
              cursor-pointer rounded-lg text-sm sm:text-base"
          >
            Hire me
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 sm:px-6 button-primary text-center text-white
              cursor-pointer rounded-lg text-sm sm:text-base"
          >
            Contact me
          </motion.a>
          <motion.a
            href="/pop.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variants={slideInFromLeft(1)}
            className="py-2 px-4 sm:px-6 button-primary text-center text-white
    cursor-pointer rounded-lg text-sm sm:text-base"
          >
            Resume
          </motion.a>
        </div>
      </div>

      {/* Desktop Image */}
      <motion.div
        className="w-full h-full flex justify-center items-center hidden sm:flex mt-[-45px]"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Image
          className="ml-20"
          src="/mainIconsdark 1 1 1 (1).svg"
          alt="work icons"
          height={550}
          width={550}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

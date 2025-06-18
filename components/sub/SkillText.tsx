"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center">

      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] flex items-center justify-center mx-auto"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-7 w-7" />
        <h1 className="Welcome-text text-[20px]">
          SKILLS
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Making website with modern technologies
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
};

export default SkillText;

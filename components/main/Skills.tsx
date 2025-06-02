import { Frontend_skill } from "@/constants";
// import { scale } from "framer-motion";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
// import { Image } from "next/image";



const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <div className=" flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;



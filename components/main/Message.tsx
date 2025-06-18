
"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Message = () => {
  return (
    <div>
      <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-30 "
          id="contact"
      >
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[800px] h-auto flex flex-col items-center justify-start mt-[-80px]">
              <div className="font-bold text-[30px]">Contact</div>
              <p className="flex flex-row items-center my-[15px] ">
                <span className="text-[15px] ml-[6px] z-30">
                  E-mail: irfanazad588500@gmail.com
                </span>
              </p>
              <p className="flex flex-row items-center my-[15px] z-30">
                <span className="text-[15px] ml-[6px]">
                  Mobile: +8801875283317
                </span>
              </p>
              {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
          
                    <span className="text-[15px] ml-[6px]">Linkedin</span>
                  </p> */}
            </div>
          </div>

          <div className="mb-[20px] text-[30px] text-center  border-[#b12323] text-white font-bold  ">
            
            
             <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#b12323] mt-[-10px]">
              <Typewriter
                words={[
                  "..................................................",
                  "..................................................",
                  "..................................................",
                  "..................................................",
                  "..................................................",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
            More Content Coming Soon
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#b12323] mt-[-10px]">
              <Typewriter
                words={[
                  "..................................................",
                  "..................................................",
                  "..................................................",
                  "..................................................",
                  "..................................................",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

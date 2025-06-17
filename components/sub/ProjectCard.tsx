import Image from "next/image";
import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link_address: string;
}

const ProjectCard = ({ src, title, description, link_address }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition duration-300 hover:scale-105 z-30">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain opacity-[0.8]"
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 text-justify">
            {description.length > 125
              ? `${description.slice(0, 125)}...`
              : description}
          </p>

          {/* Learn More - left aligned */}
          <div className="mt-4 flex justify-start">
            <button
              onClick={() => setIsOpen(true)}
              className="border border-[#a5a0eb] opacity-[0.8] bg-gradient-to-r from-[#372c99] to-[#7265e9] hover:scale-105 transition-transform text-white font-semibold py-1 px-3 rounded-md"
            >
              Learn More
            </button>
          </div>

          {/* Visit - right aligned */}
          <div className="mt-[-30px] flex justify-end">
            <button
              onClick={() => (window.location.href = link_address)}
              className="border border-[#a5a0eb] opacity-[0.8] bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white font-semibold py-1 px-3 rounded-md"
            >
              Visit
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0118] bg-opacity-60 px-4">
          <div className="bg-[#0A0118] rounded-lg p-6 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 relative shadow-lg border border-purple-600 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>

            <Image
              src={src}
              alt={title}
              width={1300}
              height={1300}
              className="w-full rounded-md object-contain mb-4"
            />

            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-300 mb-6 text-justify">{description}</p>

            {/* Only Visit - right aligned */}
            <div className="flex justify-end">
              <button
                onClick={() => (window.location.href = link_address)}
                className="border border-[#a5a0eb] bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform text-white font-semibold py-2 px-4 rounded-md"
              >
                Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

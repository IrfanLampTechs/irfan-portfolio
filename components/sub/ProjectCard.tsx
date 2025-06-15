import Image from "next/image";
import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
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
          <p className="mt-2 text-gray-300">
            {description.length > 125 ? `${description.slice(0, 125)}...` : description}
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-4 text-blue-400 hover:underline"
          >
            More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0118] bg-opacity-60">
          <div className="bg-[#0A0118] rounded-lg p-6 max-w-lg w-full relative shadow-lg border border-purple-600">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full rounded-md object-contain mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-300 mb-4">{description}</p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;

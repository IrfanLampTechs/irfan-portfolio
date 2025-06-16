"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // using Heroicons instead of lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
        <div className="w-full h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#about-me" className="flex items-center">
            <div
              className="block md:hidden p-2 rounded-full border border-[#7042f861] bg-[#06031a5e] mr-[15px] px-[20px] py-[10px]"
            >
              <Image
                src="/I_logo-2_3.png"
                alt="logo"
                width={150}
                height={140}
                className="rounded-full cursor-pointer hover:animate-slowspin"
              />
            </div>

            {/* Optional: Keep desktop logo version */}
            <Image
              src="/I_logo-2_3.png"
              alt="logo"
              width={170}
              height={160}
              className="hidden md:block cursor-pointer hover:animate-slowspin"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-16 ">
            <div className=" flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cousor-pointer">
                About me
              </a>
              <a href="#skills" className="cousor-pointer">
                Skills
              </a>
              <a href="#projects" className="cousor-pointer">
                Projects
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-row gap-5">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={26}
                  height={26}
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} aria-label="Toggle Menu">
              {isOpen ? (
                <XMarkIcon className="h-7 w-7 text-gray-200" />
              ) : (
                <Bars3Icon className="h-7 w-7 text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#030014ee] backdrop-blur-md z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4 py-4   ">
          <a
            href="#about-me"
            onClick={toggleSidebar}
            className="flex items-center"
          >
            <Image
              src="/I_logo-2_3.png"
              alt="logo"
              width={70}
              height={70}
              className="rounded-full object-contain"
            />
          </a>
          <button onClick={toggleSidebar} aria-label="Close Menu">
            <XMarkIcon className="h-6 w-6 text-gray-200" />
          </button>
        </div>
        <nav className="flex flex-col mt-6 space-y-6 px-6">
          <a
            href="#about-me"
            onClick={toggleSidebar}
            className="text-gray-200 text-lg"
          >
            About me
          </a>
          <a
            href="#skills"
            onClick={toggleSidebar}
            className="text-gray-200 text-lg"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={toggleSidebar}
            className="text-gray-200 text-lg"
          >
            Projects
          </a>
        </nav>
        <div className="mt-8 px-6 flex space-x-4">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleSidebar}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

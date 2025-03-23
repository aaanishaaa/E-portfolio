import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPen,
  FaCode,
} from "react-icons/fa";
import photo from "../assets/photo.jpg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="flex w-220 space-x-15 p-18 m-15 mx-65">
      <div className="bg-[#d4c1ec] text-center shadow-2xl w-1/2 ">
        <div>
          <div className="px-10 pt-10">
            <div className="flex justify-center ">
              <img
                src={photo}
                alt="Anisha"
                className="w-45 h-45 object-cover rounded-full border-4 border-white"
              />
            </div>
            <h2 className="text-xl font-bold mt-4 text-[#284b63]">
              Anisha Rawat
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto my-4"></div>
            <p className="text-[#284b63] tracking-wide mt-8 mb-10">
              Full Stack Developer / Software Engineer / Designer / ML
              Enthusiast
            </p>
          </div>
          <div className="flex justify-center space-x-4 text-gray-700 px-7 py-3 mt-5 bg-[#f8f8f8]">
            <a
              href="https://github.com/aaanishaaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer hover:text-blue-800"
                size={25}
              />
            </a>
            <a
              href="https://x.com/anisharawr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="cursor-pointer hover:text-blue-400"
                size={25}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/anisha-rawat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                className="cursor-pointer hover:text-blue-700"
                size={25}
              />
            </a>
            <a
              href="https://aaanishaaa.hashnode.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPen
                className="cursor-pointer hover:text-green-700"
                size={25}
              />
            </a>
            <a
              href="https://leetcode.com/u/aaanishaaa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode
                className="cursor-pointer hover:text-green-700"
                size={25}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 w-1/2">
        <div className="space-y-5">
          <h1 className="text-8xl font-bold">Hello!</h1>
          <p className="text-2xl font-weight-400">
            Turning Coffee into Code 💻☕
          </p>
          <div className="flex space-x-3">
            <div>
              <Link to="/resume">
                <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2">
                  RESUME
                </button>
              </Link>
            </div>
            <div>
              <Link to="/projects">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent">
                    PROJECTS
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-justify text-light pb-5">
              I'm a Web3 enthusiast and full-stack developer passionate about
              blockchain, machine learning, and problem-solving. I love building
              cool projects, competitive programming, and crafting amazing user
              experiences. Always eager to learn and explore new tech!
            </p>
          </div>
        </div>
        <div>
          <b>
            Got a Opportunity?{" "}
            <a
              href="mailto:anisharawat21@gmail.com"
              className="hover:text-[#0cff59]"
            >
              Email Me!
            </a>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import Navbar from "../components/Navbar";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className=" backgroundImage  bg-cover h-screen w-screen absolute top-0" />
      <div className="  h-screen  w-full flex items-center justify-center flex-col font-extrabold ">
        <h1 className=" text-xl text-white">Hello , I'M A FREELANCER.</h1>
        <h1 className=" text-5xl lg:text-7xl text-white">React Developer</h1>
        <div className="flex gap-8">
          <button className="flex flex-row group bg-green-900 text-white border-white hover:bg-green-500 hover:text-white hover:border-4 transition-all duration-100 border-2  rounded-full px-6 my-8 py-4 items-center">
            PROJECTS
            <span className="group-hover:rotate-90 duration-300 px-2">
              <HiArrowRight />
            </span>
          </button>
          <button className=" flex group bg-yellow-900 text-white border-white hover:bg-yellow-400 hover:text-yellow-50 hover:border-4  transition-all duration-100 border-2 rounded-full flex-row  px-6   items-center py-4 my-8 ">
            CONTACT
            <span className="group-hover:rotate-90 duration-300 px-2">
              <HiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

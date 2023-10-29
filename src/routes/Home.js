import React from "react";
import Navbar from "../components/Navbar";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className=" backgroundImage  bg-cover h-screen w-full absolute top-0" />
      <div className="  h-screen  w-full flex items-center justify-center flex-col font-extrabold ">
        <h1 className=" text-xl text-white">Hello , I'M A FREELANCER.</h1>
        <h1 className=" text-5xl lg:text-7xl text-white">React Developer</h1>
        <div className="flex ">
          <button className="flex flex-row group bg-green-300 text-white border-white hover:bg-green-800 hover:text-white transition-all duration-1000 border-2  rounded-full px-4 m-2 p-2">
            PROJECTS
            <span className="group-hover:rotate-90 duration-300 px-2">
              <HiArrowRight />
            </span>
          </button>
          <button className=" flex group bg-yellow-600 text-white border-white hover:bg-yellow-400 hover:text-white transition-all duration-1000 border-2 rounded-full flex-row  px-6 py-0 my-2 items-center ">
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

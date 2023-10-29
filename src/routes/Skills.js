import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongo.png";
import reactjs from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <>
      <div name="skills" className="text-white bg-[#3B3B3B] h-screen w-full ">
        <div>
          <p className="text-7xl font-bold inline border-b-4 border-pink-700 my-4 ">
            Experience
          </p>
          <p className="py-4 text-xl ">
            These are the Technologies i've worked
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 my-5  ">
          <div className=" hover:scale-110 duration-300">
            <img src={html} alt="html" className="h-[120px] w-[120px] " />
            <p className="my-5 ">HTML</p>
          </div>
          <div className=" hover:scale-110 duration-300">
            <img src={css} alt="css" className="h-[120px]" />
            <p classname="my-5">CSS</p>
          </div>

          <div className=" hover:scale-110 duration-300">
            <img
              className="h-[120px] w-[120px]"
              src={javascript}
              alt="javascript"
            ></img>
            <p classname="my-5">JAVASCRIPT</p>
          </div>
          <div className=" hover:scale-110 duration-300">
            <img
              className="h-[120px] w-[120px]"
              src={mongodb}
              alt="mongodb"
            ></img>
            <p classname="my-5">MONGO DB</p>
          </div>

          <div className=" hover:scale-110 duration-300">
            <img
              className="h-[120px] w-[120px]"
              src={reactjs}
              alt="reactjs"
            ></img>
            <p classname="my-5">REACT JS</p>
          </div>

          <div className=" hover:scale-110 duration-300">
            <img
              className="h-[120px] w-[120px]"
              src={github}
              alt="github"
            ></img>
            <p classname="my-5 ">GIT</p>
          </div>

          <div className=" hover:scale-110 duration-300 ">
            <img
              className="h-[120px] w-[120px]"
              src={tailwind}
              alt="tailwind"
            ></img>
            <p classname="my-5 ">TAILWIND CSS</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Skills;

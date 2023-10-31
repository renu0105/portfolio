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
      <div name="skills" className="text-white bg-[#3B3B3B]  ">
        <div className=" max-w-[1000px] h-full w-full flex flex-col  mx-[100px] p-4  justify-center sm:mx-[10px] ">
          <p className="text-7xl font-bold  border-b-4 border-pink-700 my-4  inline ">
            SKILLS
          </p>
          <p className="py-4 text-xl  mx-2">
            These are the Technologies i've worked
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4   w-full  ">
          <div className=" hover:scale-110 duration-300 object-contain">
            <img
              src={html}
              alt="html"
              className="h-[120px] w-[120px] mx-auto"
            />
            <p className="my-4 flex justify-center">HTML</p>
          </div>
          <div className=" hover:scale-110 duration-300  object-contain">
            <img src={css} alt="css" className="h-[120px] w-[120px] mx-auto" />
            <p className="my-4 flex justify-center">CSS</p>
          </div>

          <div className=" hover:scale-110 duration-300 object-contain">
            <img
              className="h-[120px] w-[120px] mx-auto"
              src={javascript}
              alt="javascript"
            ></img>
            <p className="my-5 flex justify-center">JAVASCRIPT</p>
          </div>
          <div className=" hover:scale-110 duration-300 object-contain">
            <img
              className="h-[120px] w-[120px] mx-auto"
              src={mongodb}
              alt="mongodb"
            ></img>
            <p className="my-5 flex justify-center">MONGO DB</p>
          </div>

          <div className=" hover:scale-110 duration-300 object-contain">
            <img
              className="h-[120px] w-[120px] mx-auto"
              src={reactjs}
              alt="reactjs"
            ></img>
            <p className="my-5 flex justify-center">REACT JS</p>
          </div>

          <div className=" hover:scale-110 duration-300 object-contain">
            <img
              className="h-[120px] w-[120px] mx-auto"
              src={github}
              alt="github"
            ></img>
            <p className="my-5 flex justify-center">GIT</p>
          </div>

          <div className=" hover:scale-110 duration-300 object-contain ">
            <img
              className="h-[120px] w-[120px] mx-auto"
              src={tailwind}
              alt="tailwind"
            ></img>
            <p className="my-5 flex justify-center">TAILWIND CSS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

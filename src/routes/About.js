import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function About() {
  return (
    <>
      <div className="bg-gray-950 h-screen w-full">
        <div className="flex flex-col justify-center items-center h-full w-full">
          <p className="text-white font-bold text-5xl border-b-8 border-green-800">
            ABOUT
          </p>

          <p className="text-pink-600  my-2 font-bold text-4xl mx-auto ">
            Hi there , I'm Renu!
          </p>
          <p className="text-white mx-auto w-7/12 text-2xl flex justify-center items-center ">
            I'm a front-end developer who loves building user-friendly websites
            ,enjoys writing documentations and loves helping people to learn how
            to code . I also really like styling with tailwind CSS.Most recently
            , I've been building web app with React amd severless provider like
            Netlify.
          </p>
          <button className="border-2 border-white text-white p-2 my-4 px-4 flex items-center hover:bg-pink-800 ">
            View work
            <span className=" hover:transition-all hover:rotate-90 hover:duration-100 mx-2 p-2 text-lg">
              <HiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

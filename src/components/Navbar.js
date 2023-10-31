import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.pngg.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [navbar, setnavbar] = useState(false);
  const handleclick = () => {
    setnavbar(!navbar);
  };

  return (
    <>
      <div className="fixed w-full h-[80px] flex jus items-center px-4 bg-transparent text-gray-600">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "75px",
              borderRadius: "100%",
              height: "70px",
              margin: "4px 24px",
            }}
          />
        </Link>

        <ul className=" hidden md:flex absolute top-2 right-2 m-2 ">
          <li className="nav">
            <Link to="/" element="Home">
              Home
            </Link>
          </li>
          <li className="nav">
            <Link to="/about" element="about">
              About
            </Link>
          </li>
          <li className="nav">
            <Link to="/contact" element="contact">
              Contact
            </Link>
          </li>
          <li className="nav">
            <Link to="/skills" element="skills">
              Skills
            </Link>
          </li>
        </ul>
      </div>

      <div
        onClick={handleclick}
        className=" md:hidden absolute top-4 right-4  z-10 "
      >
        {!navbar ? <FaBars color="white" /> : <FaTimes color="white" />}
      </div>

      <div
        className={
          !navbar
            ? "hidden"
            : "flex bg-gray-500 absolute top-0  h-full w-full flex-col justify-center items-center text-white"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link to="/" element="Home">
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/about" element="about">
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/contact" element="contact">
              Contact
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="/skills" element="skills">
              Skills
            </Link>
          </li>
        </ul>
      </div>

      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="  bg-blue-800 w-[170px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-150 rounded-sm">
            <a
              className=" flex items-center w-[160px] h-full justify-between text-xl m-4"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="  bg-slate-900 w-[170px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px]  duration-150 rounded-sm">
            <a
              className=" flex items-center w-[160px] h-[40px] justify-between text-xl m-4 "
              href="/"
            >
              github <FaGithub size={30} />
            </a>
          </li>
          <li className="  bg-gray-400 w-[170px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-150 rounded-sm">
            <a
              href="/"
              text-xl
              className=" flex items-center w-[160px] h-[40px] justify-between  text-xl m-4 "
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="  bg-green-200 w-[170px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-[-10px] duration-150 rounded-sm">
            <a
              href="/"
              className=" flex items-center w-[160px] h-[40px] justify-between  text-xl m-4 "
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

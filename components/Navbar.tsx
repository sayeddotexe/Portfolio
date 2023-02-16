import React from "react";
import { navLinks } from "./index";
import { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import close from "../public/Images/close.svg";
import menu from "../public/Images/menu.svg";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full flex py-6 justify-between items-center  ">
      <h1 className="flex items-center gap-1 text-2xl text-white font-semibold ">
        <a
          href="#hero"
          className="flex gap-1 hover:text-orange-400 transition-all"
        >
          <AiFillFire className="text-white" size={40} /> Sayed Ahmed
        </a>
      </h1>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 ">
        <li className=""></li>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white hover:text-orange-400 font-poppins mr-10 cursor-pointer text-2xl font-medium transition-all ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className=" sm:flex gap-3 hidden items-center">
        <button className="border border-white pr-4 pl-4 pt-2 pb-2 rounded-2xl text-lg text-white hidden">
          ACCOUNT
        </button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1GPn81_Rig7tKrzo7qzphg7IqBnM5Pqis/view?usp=share_link"
        >
          <button className="bg-orange-400 pr-5 pl-5 pt-2 pb-2 rounded-2xl text-lg text-black hover:opacity-80">
            RESUME
          </button>
        </a>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center text-white cursor-pointer">
        <Image
          className="w-8"
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        ></Image>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar bg-opacity-5`}
        >
          <ul className="list-none flex-col justify-center items-center flex-1">
            <li className=""></li>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white font-poppins  cursor-pointer text-2xl font-medium text-center ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <button className="bg-orange-400 pr-5 pl-5 pt-2 pb-2 rounded-2xl text-lg text-black mt-2 ml-2">
                RESUME
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

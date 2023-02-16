import React from "react";
import Image from "next/image";
import menu from "../public/Images/menu.svg";
import darrow from "../public/Images/darrow.svg";
import uarrow from "../public/Images/uarrow.svg";
import close from "../public/Images/close.svg";
import { useState } from "react";

const Experience = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);
  return (
    <section
      id="experience"
      className="flex flex-col items-center   sm:py-40 py-6 gap-10 "
    >
      <div className="flex flex-col items-center text-center">
        <h1 className=" text-white font-poppins font-bold sm:text-7xl text-3xl ">
          Discover a new world of <br /> growth potential
        </h1>
        <p className="text-white font-poppins sm:text-2xl text-xl leading-normal sm:pt-6 pt-5 max-w-[672px]">
          Choose from a multitude of skillsets I possess or challenge me and
          watch my adaptation in real time
        </p>
      </div>
      <div className="flex flex-col   max-w-[1200px] w-full gap-5">
        <div
          className="flex flex-row justify-between items-center hover:bg-gray-500 hover:bg-opacity-5 cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          <div>
            <h1 className="font-poppins font-bold">Front-End</h1>
          </div>

          <div className="flex gap-5 items-center">
            <h1 className="font-poppins font-semibold underline decoration-[#4725F2] underline-offset-8 decoration-2">
              JavaScript
            </h1>
            <Image
              className="w-[20px] h-[20px] "
              src={toggle ? uarrow : darrow}
              alt="menu"
            ></Image>
          </div>
        </div>
        <div className={`${toggle ? "flex" : "hidden"} text-white`}>
          React, JavaScript, TypeScript, HTML, CSS
        </div>
        <div className="min-h-[1px] bg-white"></div>
        <div
          className="flex flex-row justify-between items-center hover:bg-gray-500 hover:bg-opacity-5 cursor-pointer"
          onClick={() => setToggle2((prev) => !prev)}
        >
          <div>
            <h1 className="font-poppins font-bold">Back-End</h1>
          </div>
          <div className="flex gap-5 items-center">
            <h1 className="font-poppins font-semibold underline decoration-[#4725F2] underline-offset-8 decoration-2">
              JavaScript
            </h1>
            <Image
              className="w-[20px] h-[20px] "
              src={toggle2 ? uarrow : darrow}
              alt="menu"
            ></Image>
          </div>
        </div>
        <div className={`${toggle2 ? "flex" : "hidden"} text-white`}>
          NextJS, Python
        </div>
        <div className="min-h-[1px] bg-white"></div>
        <div
          className="flex flex-row justify-between items-center hover:bg-gray-500 hover:bg-opacity-5 cursor-pointer"
          onClick={() => setToggle3((prev) => !prev)}
        >
          <div>
            <h1 className="font-poppins font-bold">Database</h1>
          </div>
          <div className="flex gap-5 items-center">
            <h1 className="font-poppins font-semibold underline decoration-[#4725F2] underline-offset-8 decoration-2 ">
              SQL
            </h1>
            <Image
              className="w-[20px] h-[20px] "
              src={toggle3 ? uarrow : darrow}
              alt="menu"
            ></Image>
          </div>
        </div>
        <div className={`${toggle3 ? "flex" : "hidden"} text-white`}>
          SQL, PostgreSQL, MongoDB
        </div>
        <div className="min-h-[1px] bg-white"></div>
        <div
          className="flex flex-row justify-between items-center hover:bg-gray-500 hover:bg-opacity-5 cursor-pointer"
          onClick={() => setToggle4((prev) => !prev)}
        >
          <div>
            <h1 className="font-poppins font-bold">ML/DS</h1>
          </div>
          <div className="flex gap-5 items-center">
            <h1 className="font-poppins font-semibold underline decoration-[#4725F2] underline-offset-8 decoration-2">
              Python
            </h1>
            <Image
              className="w-[20px] h-[20px] "
              src={toggle4 ? uarrow : darrow}
              alt="menu"
            ></Image>
          </div>
        </div>
        <div className={`${toggle4 ? "flex" : "hidden"} text-white`}>
          Python, Pandas, NumPY, SciKitLearn, MatPlotLib, TensorFlow
        </div>
        <div className="min-h-[1px] bg-white"></div>
        <div
          className="flex flex-row justify-between items-center hover:bg-gray-500 hover:bg-opacity-5 cursor-pointer"
          onClick={() => setToggle5((prev) => !prev)}
        >
          <div>
            <h1 className="font-poppins font-bold">Version control</h1>
          </div>
          <div className="flex gap-5 items-center hover:bg-gray-500 hover:bg-opacity-5 cursor-pointer">
            <h1 className="font-poppins font-semibold underline decoration-[#4725F2] underline-offset-8 decoration-2">
              Git
            </h1>
            <Image
              className="w-[20px] h-[20px] "
              src={toggle5 ? uarrow : darrow}
              alt="menu"
            ></Image>
          </div>
        </div>
        <div className={`${toggle5 ? "flex" : "hidden"} text-white`}>
          Git, Github, SVN
        </div>
        <div className="min-h-[1px] bg-white"></div>
        <div
          className="flex flex-row justify-between items-center hover:bg-gray-500 hover:bg-opacity-5 cursor-pointer"
          onClick={() => setToggle6((prev) => !prev)}
        >
          <div>
            <h1 className="font-poppins font-bold">Cloud</h1>
          </div>
          <div className="flex gap-5 items-center">
            <h1 className="font-poppins font-semibold underline decoration-[#4725F2] underline-offset-8 decoration-2">
              AWS
            </h1>
            <Image
              className="w-[20px] h-[20px] "
              src={toggle6 ? uarrow : darrow}
              alt="menu"
            ></Image>
          </div>
        </div>
        <div className={`${toggle6 ? "flex" : "hidden"} text-white`}>
          Amazon Web Services, Google Cloud
        </div>
      </div>
    </section>
  );
};

export default Experience;

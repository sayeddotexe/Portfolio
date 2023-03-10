import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import mlrectangle from "../public/mlrectangle.png";
import sort from "../public/sort.png";
import phone from "../public/phone.png";
import githubprofile from "../public/githubprofile.png";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center   sm:py-40 py-6 gap-10 "
    >
      <div className="flex flex-col items-center text-center">
        <h1 className=" text-white font-poppins font-bold sm:text-6xl text-3xl ">
          Most Important side-quests
        </h1>
        <p className="text-white font-poppins sm:text-xl text-xl leading-normal sm:pt-5 pt-5 max-w-[502px]">
          As a developer I partake in side-quests to gain more exp in other
          words, projects I have worked on
        </p>
      </div>
      <div className="flex sm:flex-row flex-col justify-between gap-10 ">
        <div className="flex flex-row gap-10 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sayeddotexe/Machine-Learning-Bootcamp"
          >
            <Image
              src={mlrectangle}
              alt="profile"
              className="rounded-3xl hover:opacity-80 sm:h-[520px] h-[100px]  sm:w-[311px] w-[100px] sm:flex hidden transition-all"
            ></Image>
            <div className="sm:hidden hover:opacity-80 bg-[#272761] bg-[0rem_0rem] bg-[length:311px_520px] bg-no-repeat sm:h-[520px] h-[100px]  sm:w-[311px] w-[100px] rounded-2xl flex flex-col sm:justify-end sm:items-end justify-center items-center border-t-4 border-[#5A3AB1] ">
              <div className="bg-[#272761] border border-white h-[73px] w-[73px] rounded-full sm:mb-5 sm:mr-5 cursor-pointer flex flex-col items-center justify-center ">
                <BsArrowUpRight className="" size={40} />
              </div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sayeddotexe/Python-Sort-Search-Visualisation"
          >
            <Image
              src={sort}
              alt="profile"
              className="rounded-3xl hover:opacity-80 sm:h-[520px] h-[100px]  sm:w-[311px] w-[100px] sm:flex hidden transition-all"
            ></Image>
            <div className="sm:hidden hover:opacity-80 bg-[#272761] bg-[0rem_0rem] bg-[length:311px_520px] bg-no-repeat sm:h-[520px] h-[100px]  sm:w-[311px] w-[100px] rounded-2xl flex flex-col sm:justify-end sm:items-end justify-center items-center border-t-4 border-[#5A3AB1] ">
              <div className="bg-[#272761] border border-white h-[73px] w-[73px] rounded-full sm:mb-5 sm:mr-5 cursor-pointer flex flex-col items-center justify-center ">
                <BsArrowUpRight className="" size={40} />
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-row gap-10">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sayeddotexe/Tensorflow-Deep-Learning"
          >
            <Image
              src={phone}
              alt="profile"
              className="rounded-3xl hover:opacity-80 sm:h-[520px] h-[100px]  sm:w-[311px] w-[100px] sm:flex hidden transition-all"
            ></Image>
            <div className="sm:hidden hover:opacity-80 bg-[#272761] bg-[0rem_0rem] bg-[length:311px_520px] bg-no-repeat sm:h-[520px] h-[100px]  sm:w-[311px] w-[100px] rounded-2xl flex flex-col sm:justify-end sm:items-end justify-center items-center border-t-4 border-[#5A3AB1] ">
              <div className="bg-[#272761] border border-white h-[73px] w-[73px] rounded-full sm:mb-5 sm:mr-5 cursor-pointer flex flex-col items-center justify-center ">
                <BsArrowUpRight className="" size={40} />
              </div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sayeddotexe"
          >
            <Image
              src={githubprofile}
              alt="profile"
              className="rounded-3xl hover:opacity-80 sm:h-[520px] h-[100px]  sm:w-[311px] w-[100px] sm:flex hidden transition-all"
            ></Image>
            <div className="sm:hidden hover:opacity-80 bg-[#272761] bg-[0rem_0rem] bg-[length:311px_520px] bg-no-repeat sm:h-[520px] h-[100px]  sm:w-[311px] w-[100px] rounded-2xl flex flex-col sm:justify-end sm:items-end justify-center items-center border-t-4 border-[#5A3AB1] ">
              <div className="bg-[#272761] border border-white h-[73px] w-[73px] rounded-full sm:mb-5 sm:mr-5 cursor-pointer flex flex-col items-center justify-center ">
                <BsArrowUpRight className="" size={40} />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

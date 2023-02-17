import React from "react";
import profile from "../public/Images/profile.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col sm:py-72 py-6 bg-tech bg-no-repeat bg-[length:870px_870px]  bg-[40rem_1rem] pb-[100px] sm:mb-[100px] mb-[0px]`}
    >
      <Image
        src={profile}
        alt="profile"
        className="rounded-3xl sm:hidden "
      ></Image>
      <div className="flex flex-row justify-between items-center w-full ">
        <div className="">
          <h1 className=" text-white font-poppins font-bold sm:text-8xl text-5xl sm:pt-0 pt-10">
            Beautiful design,
            <br />
            Responsive UI
          </h1>
          <p className="text-white font-poppins sm:text-2xl text-xl leading-normal sm:pt-2 pt-5">
            Welcome to my portfolio, here you will find everything{" "}
            <br className="sm:flex hidden" />
            you need to know about my experience and skills.
          </p>
          <div className="flex  gap-3  items-center pt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sayed-ismail-ahmed-424469166/"
            >
              <button className="bg-[#4725F2] sm:pr-10 sm:pl-10 sm:pt-4 sm:pb-4 pr-5 pl-5 pt-2 pb-2 rounded-2xl text-lg text-white hover:opacity-80">
                {" "}
                LINKEDIN
              </button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sayeddotexe"
            >
              <button className="border border-[#987EF3]  sm:pr-10 sm:pl-10 sm:pt-4 sm:pb-4 pr-5 pl-5 pt-2 pb-2 rounded-2xl text-lg text-white hover:opacity-80">
                GITHUB
              </button>
            </a>
          </div>
        </div>
      </div>
      <Image
        src={profile}
        className="absolute w-[870px] rounded-3xl ml-[720px] hidden "
        alt="bg"
      ></Image>
    </section>
  );
};

export default Hero;

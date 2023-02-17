import React from "react";
import Image from "next/image";
import Icons from "../public/Images/Icons.png";

const About = () => {
  return (
    <section id="about" className="flex md:flex-row flex-col sm:py-20 py-6  ">
      <div className="flex sm:flex-row flex-col justify-between items-center w-full">
        <div>
          <h1 className=" text-white font-poppins font-bold sm:text-5xl text-2xl sm:pt-0 pt-5">
            Out of the shadows
            <br />
            into the light
          </h1>
          <p className="text-white font-poppins sm:text-xl text-xl leading-normal sm:pt-2 pt-5 max-w-[502px]">
            I’m a developer who has cultivated problem solving skills unlike any
            other through a technique uniquely developed for myself.
          </p>
        </div>

        <div className="flex sm:pl-[5vw] pl-0 ">
          <Image src={Icons} alt="icons" className="w-[923px] "></Image>
        </div>
      </div>
    </section>
  );
};

export default About;

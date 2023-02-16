import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Navbar,
  Hero,
  About,
  Projects,
  Experience,
  Contact,
} from "../components/index";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <div className={` bg-[#070614]`}>
      <Head>
        <title>Sayed Ismail Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}

      <div className="sticky top-0 sm:px-16 px-6 flex justify-center items-start bg-[#070614] bg-opacity-80 ">
        <div className="xl:max-w-[1700px] w-full ">
          <Navbar />
        </div>
      </div>
      <div className="bg-[url(../public/Images/image.jpg)] bg-no-repeat   bg-cover  ">
        {/* Hero */}
        <div className="  sm:px-16 px-6 flex justify-center items-center">
          <div className="max-w-[1700px] w-full">
            <Hero />
          </div>
        </div>
      </div>

      {/* About */}

      <div className="bg-[#070614] sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1472px] w-full text-white">
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
      {/* Projects */}
      {/* Experience */}
      {/* Footer */}
    </div>
  );
};

export default Home;

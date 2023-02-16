import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col ">
      <h1 className=" text-white font-poppins font-bold sm:text-5xl text-2xl sm:pt-0 pt-5">
        Sayed Ahmed
      </h1>
      <div className="flex flex-row  justify-between items-start w-full">
        <div>
          <p className="text-white font-mono sm:text-xl text-xs leading-normal sm:pt-2 pt-5 max-w-[502px]">
            All trademarks referenced here in are <br /> the properties of their
            respective owners
          </p>
        </div>

        <div className="flex flex-col sm:pl-[5vw] gap-1 font-poppins font-semibold sm:text-xl text-sm sm:text-left text-right  ">
          <h1 className=" font-poppins font-bold ">CONTACT ME</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sayed-ismail-ahmed-424469166/"
            className="hover:text-orange-400 transition-all font-normal"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              window.open("https://github.com/sayeddotexe", "_blank")
            }
            className="hover:text-orange-400 transition-all cursor-pointer font-normal"
          >
            Github
          </a>
          <a className="hover:text-orange-400 transition-all cursor-pointer font-normal">
            Twitter
          </a>
          <a className="hover:text-orange-400 transition-all cursor-pointer font-normal">
            Instagram
          </a>
        </div>
      </div>
      <p className="text-gray-300 font-poppins sm:text-lg text-sm leading-normal sm:pt-2 pt-5 max-w-[502px] mb-5">
        © 2023 Sayed. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;

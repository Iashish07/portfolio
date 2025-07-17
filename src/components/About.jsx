import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-linear-to-t from-[#101820] to-[#0A0A0A]
     text-white relative overflow-hidden px-6 md:px-16">
      <div
        className="absolute hidden md:block right-0 top-0 h-full w-full md:w-1/2 opacity-60 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/logo.png')" }}
      ></div>

      <div className="absolute top-6 left-6 md:top-10 md:left-16 z-20">
        <p className="uppercase text-sm tracking-widest text-gray-400">
          About Me
        </p>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full max-w-3xl pl-2 md:pl-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Aashish.
        </h1>

        <p className="mb-4">
          a self-taught developer passionate about building sleek, efficient, and animated web experiences. I started coding because I loved solving problems and seeing things come to life in the browser.
        </p>
        <p className="mb-4">
          I mostly work with React, Tailwind, and GSAP. Whether it’s a portfolio, startup landing page, or a custom interactive site — I bring ideas to life fast and clean.
        </p>
        <p>
          Outside code? I sketch, learn, and believe in making things that last.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-2 mt-6 bg-transparent border border-white text-white
          rounded-full hover:bg-white hover:text-black transition cursor-pointer">
            view projects
          </a>

        </div>
      </div>
    </div>
  );
};

export default About;

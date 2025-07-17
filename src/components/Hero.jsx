import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    tl.fromTo(
      heroRef.current.querySelectorAll(".animate-item"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen bg-gradient-to-b from-[#0e2433] to-[#0a0a0a] text-white flex flex-col justify-center px-6 md:px-16 overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1abc9c] rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="animate-item text-sm text-[#b0bec5] uppercase tracking-wide mb-4">
        Web Developer • Designer • Problem Solver
      </div>

      <h1 className="animate-item text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mb-4">
        Build Modern <span className="text-[#00bcd4]">Web Experiences</span> That Convert.
      </h1>

      <p className="animate-item  text-gray-300 text-base md:text-lg max-w-xl leading-relaxed mb-6">
        I create fast, responsive websites using React, TailwindCSS and smooth animations to engage users and grow brands.
      </p>

      <div className="animate-item flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition"
        >
          Contact Me
        </a>
      </div>


      <div className="animate-item absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm animate-bounce">
        ↓ Scroll down to explore
      </div>
    </section>
  );
};

export default Hero;

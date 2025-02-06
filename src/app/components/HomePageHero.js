"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function HomePageHero() {
  useEffect(() => {
    const letters = document.querySelectorAll(".animated-letter"); 

    gsap.fromTo(
      letters,
      {
        opacity: 0, 
        rotation: 360,
        y: -20,
      },
      {
        duration: 1, 
        opacity: 1,
        rotation: 0,
        y: 0,
        stagger: {
          amount: 1.5,
          from: "start", 
        },
        ease: "power1.out",
      }
    );
  }, []);

  const text = "Portfolio Template";
  const animatedText = (
    <>
      {text.split(' ').map((word, index) => (
        <span key={index}>
          {word.split('').map((letter, letterIndex) => (
            <span key={`${index}-${letterIndex}`} className="animated-letter">
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
          {index === 0 && <br />}
        </span>
      ))}
    </>
  );

  return (
    <section className="flex items-center h-screen relative px-[30px] lg:px-[60px]">
      <div className="absolute z-50 -translate-y-1/2 top-1/2 right-0 rotate-[270deg] translate-x-[36.5%] text-center flex items-center">
        <a id="resume" href="/sample.pdf" target="_blank" rel="noreferrer" className="w-44 h-12 flex justify-center items-center hover:text-black">
          <span className="uppercase font-bold tracking-widest text-xl">resume</span>
        </a>
      </div>
      <h1 className="overflow-hidden text-heading font-bold text-[45px] leading-[100%] xl:text-[120px] 2xl:text-[125px] xl:leading-[120px] 2xl:leading-[140px] uppercase mb-16">
        {animatedText}
      </h1>
      <div className="absolute left-0 bottom-[60px] right-0 flex items-end lg:items-start justify-between px-[30px] lg:px-[60px]">
        <div className="xl:h-[100px] xl:w-[100px] 2xl:w-[125px] 2xl:h-[125px] flex items-center">
          <a href="#projects" className="animate-bounce">
            <svg className="translate-y-12 lg:translate-y-4" width="50px" height="100px" viewBox="0 0 80 40">
              <polyline fill="none" strokeWidth="4" strokeLinecap="inherit" strokeLinejoin="inherit" points="0,0 40,20 80,0" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col mb-2 lg:mb-0">
          <div className="flex items-center gap-4 xl:gap-[20px] 2xl:gap-[30px] down">
            <h3 className="uppercase xl:text-[26px] 2xl:text-[32px] font-[400]">Lorem Ipsum</h3>
          </div>
          <h4 className="font-[200] lg:ml-1 based-in">Location</h4>
        </div>
      </div>
    </section>
  );
}

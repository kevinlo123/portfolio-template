'use client'
import React, { useEffect }from 'react'
import { gsap } from 'gsap'
import  ScrollTrigger  from 'gsap/dist/ScrollTrigger';


function TextAnimation() {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tlquote = gsap.timeline({
      scrollTrigger: {
        trigger: "#first",
        start: "-=500", 
        end: "bottom",
        scrub: 1, 
      },
    });

    tlquote.to(".quote-text", { opacity: '1' , display: 'block'})

    let tlquote2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#eighth",
        start: "-=500", 
        end: "-=250",
        scrub: 1, 
      },
    });

    tlquote2.to(".quote-text", { opacity: '0', display: 'none' })


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#first",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl.to("#first", { backgroundPositionX: '0%' })
    
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#second",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl2.to("#second", { backgroundPositionX: '0%' })   


    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#third",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl3.to("#third", { backgroundPositionX: '0%' })

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#fourth",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl4.to("#fourth", { backgroundPositionX: '0%' })

    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: "#fifth",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl5.to("#fifth", { backgroundPositionX: '0%' })

    let tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: "#sixth",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl6.to("#sixth", { backgroundPositionX: '0%' })

    let tl7 = gsap.timeline({
      scrollTrigger: {
        trigger: "#seventh",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl7.to("#seventh", { backgroundPositionX: '0%' })

    let tl8 = gsap.timeline({
      scrollTrigger: {
        trigger: "#eighth",
        start: "-=500", 
        end: "-=350",
        scrub: 1, 
      },
    });

    tl8.to("#eighth", { backgroundPositionX: '0%' })

  }, []);

    return (
      <section id="projects" className="py-[80px] lg:py-[200px] relative grid grid-cols-12 px-[30px] lg:px-[60px]">
        <div className="col-span-6 relative hidden lg:block">
          <div className="fixed top-1/2 -translate-y-1/2 text-white w-1/3">
            <p className="quote-text hidden citation opacity-0 font-[300] tracking-wide text-2xl italic">&quot;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;&quot;<br /> <br /></p>
          </div>
        </div>
        <div className="text col-span-12 lg:col-span-6 flex flex-col gap-14">
          <p id="first" className="about uppercase font-bold text-right text-[40px] lg:text-[80px] xl:text-[100px] first-p">SAMPLE 1</p>
          <p id="second" className="about uppercase font-bold text-right text-[40px] lg:text-[80px] xl:text-[100px]">SAMPLE 2</p>
          <p id="third" className="about uppercase font-bold text-right text-[40px] lg:text-[80px] xl:text-[100px]">SAMPLE 3</p>
          <p id="fourth" className="about uppercase font-bold text-right text-[40px] lg:text-[80px] xl:text-[100px]">SAMPLE 4</p>
          <p id="fifth" className="about uppercase font-bold text-right text-[40px] lg:text-[80px] xl:text-[100px]">SAMPLE 5</p>
          <p id="sixth" className="about uppercase font-bold text-right text-[40px] lg:text-[80px] xl:text-[100px]">SAMPLE 6</p>
          <p id="seventh" className="about uppercase font-bold text-right text-[40px] lg:text-[80px] xl:text-[100px]">SAMPLE 7</p>
          <p id="eighth" className="about uppercase font-bold text-right text-[40px] lg:text-[80px] xl:text-[100px]">SAMPLE 8</p>
        </div>
      </section>
    )
}

export default TextAnimation
'use client';

import React, { useState, useEffect, forwardRef } from 'react';
import Link from 'next/link';
import LightDarkToggle from '../components/LightDarkToggle.js';
import { Divide as Hamburger } from 'hamburger-react';
import { Transition } from '@headlessui/react'

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  let nav = forwardRef(function (props, ref) {
    return <nav className="…" ref={ref} {...props}></nav>
  })

  nav.displayName = 'Nav';

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName('body')[0].style.overflow = "hidden";
      document.getElementsByTagName('header')[0].style.height = '100%';
    } else {
      document.getElementsByTagName('body')[0].style.overflow = "auto";
      document.getElementsByTagName('header')[0].style.height = 'auto';
    }
  }, [isOpen]);

  const close = () => {
    document.getElementsByClassName('hamburger-react')[0].click();
  }

  return (
    <header className="h-[100%] pl-[30px] pr-[16px] py-[30px] lg:pr-[60px] lg:px-[60px]  flex items-center justify-between absolute top-0 left-0 right-0 items-baseline">
      <Link href="/" className="text-[30px] xl:text-[32px] 2xl:text-[40px] font-[300] text-heading">Name / Brand</Link>
      <div className="w-[110px] lg:w-[135px] flex justify-between items-center">
        <LightDarkToggle />
        <Hamburger
          toggled={isOpen} 
          toggle={setOpen} 
        />
        {
          isOpen &&
          <Transition
            appear={true}
            show={isOpen}
            as={nav}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
            className="lg:py-[4rem] flex items-center lg:items-start text-center lg:text-left lg:px-[4rem] py-[3rem] px-[3rem] absolute w-[100%] h-[100%] bg-black left-0 top-0 z-[51] flex flex-col justify-evenly"
          >
            <Link onClick={close} href="/" className="mb-5 text-[40px] tracking-widest lg:text-[60px] font-[300] text-heading uppercase font-bold relative w-fit block after:block after:content-[''] after:absolute after:h-[7px] w-[50%] lg:w-fit after:top-[3.5rem] lg:after:top-[5rem] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Home</Link>
            <Link onClick={close} href="/about" className="mb-5 text-[40px] tracking-widest lg:text-[60px] font-[300] text-heading uppercase font-bold relative w-fit block after:block after:content-[''] after:absolute after:h-[7px] after:top-[3.5rem] lg:after:top-[5rem] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</Link>
            <Link onClick={close} href="/projects/project-one" className="mb-5 text-[40px] tracking-widest lg:text-[60px] font-[300] text-heading uppercase font-bold relative w-fit block after:block after:content-[''] after:absolute after:top-[3.5rem] lg:after:top-[5rem] after:h-[7px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Projects</Link>
            <Link onClick={close} href="/contact" className="mb-5 text-[40px] tracking-widest lg:text-[60px] font-[300] text-heading uppercase font-bold relative w-fit block after:block after:content-[''] after:absolute after:h-[7px] after:top-[3.5rem] lg:after:top-[5rem] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Contact</Link>
          </Transition> 
        }
      </div>
    </header>
  );
}

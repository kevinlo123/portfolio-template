"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AnimatedText from '../components/AnimatedText';

export default function About() {
  const [loading, setLoading] = useState(true);
  const imagesRef = useRef([]);
  const soundCloudIframesRef = useRef([]);
  const text = "About";

  const images = [
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
    '/about/placeholder.jpg',
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the image is visible

    imagesRef.current.forEach(image => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  useEffect(() => {
    const loadedImages = images.map(() => false); // Keep track of loaded state for each image

    const checkIfAllImagesLoaded = () => {
      if (loadedImages.every(imageLoaded => imageLoaded)) {
        setLoading(false);
      }
    };

    const loadImage = (index) => {
      const image = new Image();
      image.onload = () => {
        loadedImages[index] = true;
        checkIfAllImagesLoaded();
      };
      image.src = images[index];
    };

    images.forEach((_, index) => loadImage(index));

  }, [images]);

  useEffect(() => {
    const soundCloudIframes = Array.from(document.querySelectorAll('.soundcloud-embed'));
    soundCloudIframes.forEach((iframe, index) => {
      const loadListener = () => {
        soundCloudIframesRef.current[index] = true;
        setLoading(false);
      };
      iframe.addEventListener('load', loadListener);
      return () => {
        iframe.removeEventListener('load', loadListener);
      };
    });
  }, [])


  return (
    <main className="contact my-[150px] md:my-[200px] mx-[30px] md:mx-[60px]">
        <div className={`mb-[5rem] ${loading ? 'hidden' : 'block'}`}>
          <h1 className="uppercase font-bold project-name leading-[100%] text-[40px] lg:text-[100px] mb-10 lg:mb-[3.5rem]"><AnimatedText text={text}/></h1>
          <p className="citation font-[300] tracking-wide text-2xl italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={`flex justify-center items-center h-[50vh] ${loading ? 'block' : 'hidden'}`}>
          <div className="animate-spin rounded-full h-32 w-32 border-b-4"></div>
        </div>
        <div className={`columns-2 gap-4 md:columns-3 ${loading ? 'hidden' : 'block'}`}>
          {images.map((url, index) => 
            <img 
              key={index}
              src={url}
              loading="lazy"
              alt="lifestyle picture"
              ref={el => imagesRef.current[index] = el}
              className="w-full aspect-square mb-4 max-w-full rounded-lg object-cover object-center fade-in"
            />
          )}
        </div>
    </main>
  );
}
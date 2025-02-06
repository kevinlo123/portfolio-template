'use client'; // This will only be client-side

import { useEffect } from 'react';
import gsap from 'gsap';


export default function AnimatedText({ text }) {
    useEffect(() => {
        const letters = document.querySelectorAll(".animated-letter"); // Select all letter spans

        gsap.fromTo(
        letters,
        {
            opacity: 0, 
            rotation: 360,
            y: -20,
        },
        {
            duration: .5, 
            opacity: 1,
            rotation: 0,
            y: 0,
            stagger: {
            amount: .75,
            from: "start", 
            },
            ease: "power1.out",
        }
        );
    }, []);


    return (
        <>
            {text.split(' ').map((word, index) => (
                <span key={index}>
                {word.split('').map((letter, letterIndex) => (
                    <span key={`${index}-${letterIndex}`} className="animated-letter">
                    {letter}
                    </span>
                ))}
                {index < text.split(' ').length - 1 && <span>&nbsp;</span>}
                </span>
            ))}
        </>
    );
}
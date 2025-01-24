'use client';
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";






export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const polygon = document.querySelector('.polygon-container');
    const polygonText = document.querySelector('.polygon-text');
    const Body = document.querySelector('body');

    if (polygon && polygonText && Body) {
      setTimeout(() => {
        polygon.style.opacity = '0';
        polygonText.style.opacity = '0';
        polygon.style.transform = 'scale(0.01)';
        setTimeout(() => {
        setIsAnimationComplete(true);
        Body.style.overflowY = 'unset';
        }, 500);
      }, 2000); // Match this duration with the animation duration
    }

  }, []);




  return (
    <div className="flex flex-col items-center justify-center">
      <div className="polygon-container transition duration-500 absolute top-[42%] mx-auto flex flex-row w-[80%] z-50 justify-center items-center">
        <svg height="140" width="140" xmlns="http://www.w3.org/2000/svg" >
        <polygon points="75,7.5 129,38.5 129,101 75,132.5 21,101 21,38.5 75,7.5" style={{ fill: 'none', stroke: 'white', strokeWidth: 4 }} className="hexagon" />
          <text className="polygon-text font-dmsans transition duration-500" x="75" y="75" textAnchor="middle" fill="white" fontSize="50" dy=".3em">AS</text>
        </svg>
      </div>
      {isAnimationComplete && (
        <div className="everything-container duration-500 flex flex-col items-center w-[80%]">
          <Navbar />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <div>
            <p className="font-dmsans text-white text-lg text-center">
            Made with Next.js, Tailwind CSS, and a lot of micromanaging by my buddy.
            </p>
            <p className="font-dmsans text-white text-lg text-center">
              © 2025 Ansuman Sharma. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
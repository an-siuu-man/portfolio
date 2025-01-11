'use client';


import { useEffect } from "react";


import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
export default function Home() {


  return (
    <div className="flex flex-col items-center ">
      <Navbar />
      <div className="w-[80%]">
      {/* <div style={backgroundImage}></div> */}


        <About />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}
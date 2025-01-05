'use client';


import { useEffect } from "react";
import background from '../../public/background.jpg';


import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
export default function Home() {

  // const backgroundImage = {
  //         backgroundImage: `url(${background.src})`,
  //         backgroundSize: 'cover',
  //         backgroundPosition: 'center',
  //         height: '100%', // Adjust as needed
  //         filter: 'blur(10px) brightness(60%)', // Adjust the blur intensity as needed
  //         position: 'absolute',
  //         width: '100%',
  //         zIndex: '-1',
  //     };


  return (
    <div className="flex flex-col w-full">
      {/* <div style={backgroundImage}></div> */}

      <Navbar />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
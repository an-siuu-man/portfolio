'use client';


import { useEffect } from "react";
import background from '../../public/background.jpg';


import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
export default function Home() {

  const backgroundImage = {
          backgroundImage: `url(${background.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%', // Adjust as needed
          filter: 'blur(10px) brightness(60%)', // Adjust the blur intensity as needed
          position: 'absolute',
          width: '100%',
          zIndex: '-1',
      };
  

  return (
    <div className=" w-full">
      {/* <div style={backgroundImage}></div> */}

      <Navbar />
      <About />
      <Experience />
    </div>
  );
}
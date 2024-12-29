'use client';


import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
export default function Home() {



  return (
    <div className="w-full">
      <Navbar />
      <Landing />
    </div>
  );
}
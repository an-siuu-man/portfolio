'use client';


import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelector('.links');
    


    if (links) {
      links.style.opacity = '0';
      setTimeout(() => {
        links.style.opacity = '1';
      }, 300);
    }


    if (navbar) {
      navbar.style.width = '0';
      setTimeout(() => {
      navbar.style.width = '90vw';
      }, 300);
    }
  }, []);


  return (
    <div className="flex justify-center ">
      <div className="navbar flex justify-between mt-4">
        <h1 className="font-cursive text-bold text-4xl">Ansuman Sharma</h1>
        <div className="links flex ml-auto">
          <p className="font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">Home</p>
          <p className="font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">About</p>
          <p className="font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">Projects</p>
        </div>
      </div>
    </div>
  );
}
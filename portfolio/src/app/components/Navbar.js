'use client';


import { useEffect } from "react";

export default function Navbar() {

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelector('.links');


    if (links) {
      setTimeout(() => {
        links.style.opacity = '1';
      }, 300);

      

    }


    if (navbar) {
      setTimeout(() => {
      navbar.style.width = '90%';
      }, 300);
    }
  }, []);


  return (
    <div className="flex justify-center mb-4">
      <div className="navbar w-[8%] flex sticky top-0 justify-between mt-4">
        <h1 className="name-header z-50 font-cursive whitespace-nowrap absolute text-bold text-4xl cursor-pointer">Ansuman Sharma</h1>
        <div className="links opacity-0 flex ml-auto">
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">About</p>
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">Experience</p>
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">Projects</p>
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">Contact</p>
        </div>
      </div>
    </div>
  );
}
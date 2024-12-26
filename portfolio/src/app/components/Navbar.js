'use client';


import { useEffect } from "react";

export default function Navbar() {

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelector('.links');
    var Links = document.querySelectorAll('.link');
    Links = Array.from(Links);
    if (Links) {
        Links.forEach((link) => {
            link.addEventListener('click', () => {
                Links.forEach((link) => {
                    link.style.color = '';
                });
                link.style.color = '#2e70db';
            });

            link.addEventListener('hover', () => {
                link.style.color = '#2e70db';
            });
        });
    }

    if (links) {
      setTimeout(() => {
        links.style.opacity = '1';
      }, 300);

      

    }


    if (navbar) {
      navbar.style.width = '0';
      setTimeout(() => {
      navbar.style.width = '90%';
      }, 300);
    }
  }, []);


  return (
    <div className="flex justify-center ">
      <div className="navbar flex sticky top-0 justify-between mt-4">
        <h1 className="name-header z-50 font-cursive whitespace-nowrap absolute text-bold text-4xl cursor-pointer">Ansuman Sharma</h1>
        <div className="links opacity-0 flex ml-auto">
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">Home</p>
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">About</p>
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db]">Projects</p>
        </div>
      </div>
    </div>
  );
}
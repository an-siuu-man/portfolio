'use client';

import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelector('.links');

    const handleResize = () => {
      if (window.innerWidth < 768) {
        navbar.style.width = '90%';
        links.style.display = 'none';
      } else {
        navbar.style.width = '90%';
        links.style.display = 'flex';
        setIsDropdownOpen(false);
      }
    };

    if (links) {
      setTimeout(() => {
        links.style.opacity = '1';
      }, 300);
    }

    if (navbar) {
      setTimeout(() => {
        handleResize();
      }, 300);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-center sticky top-0 z-50 pb-4 bg-[#2d2d2d] items-center mb-4">
      <div className="navbar w-[6%] flex justify-between items-center mt-4">
        <h1 className="name-header z-50 font-cursive whitespace-nowrap absolute text-bold text-4xl cursor-pointer">Ansuman Sharma</h1>
        <div className="links opacity-0 flex ml-auto">
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">About</p>
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">Experience</p>
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">Projects</p>
          <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">Contact</p>
        </div>
        <button className="block md:hidden ml-auto" onClick={toggleDropdown}>
          ☰
        </button>
        {isDropdownOpen && (
          <div ref={dropdownRef} className="dropdown-menu absolute top-full right-0 rounded-xl bg-[#333] py-4 shadow-lg">
            <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">About</p>
            <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">Experience</p>
            <p className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">Projects</p>
            <p className="link font-dmsans mx-[20px] cursor-pointer z-20 hover:text-[#2e70db] duration-100">Contact</p>
          </div>
        )}
      </div>
    </div>
  );
}
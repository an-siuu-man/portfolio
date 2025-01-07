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

    const handleScroll = () => {
      const navbarContainer = document.querySelector('.navbar-container');
      if (window.scrollY === 0) {
        navbar.style.width = '90%';
        navbarContainer.style.backgroundColor = 'transparent';
        navbar.style.color = '';
        navbar.style.transform = 'translateY(0)';
        navbar.style.backgroundColor = 'transparent';

      } else {
        navbarContainer.style.backdropFilter = 'blur(40px)';
        navbar.style.backdropFilter = 'blur(40px)';
        navbar.style.color = '#fff';
        navbar.style.transform = 'translateY(20px)';
        navbar.style.width = '80%';
        navbar.style.backgroundColor = 'rgba(15, 32, 39, 0.7)';
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
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

  function handleAbout() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // setTimeout(() => {
      //   window.scrollBy(0, -75); // Adjust the value (-75) to scroll a few pixels above the div
      // }, 500); // Adjust the timeout duration if necessary
    }
  function handleClick(ClassName) {
    const section = document.querySelector(ClassName);
    if (section) {
      // Scroll to the bottom of the specified div plus 20vh
      const additionalScroll = window.innerHeight * 0.2; // 20vh
      const targetScrollTop = section.scrollHeight - section.clientHeight -  additionalScroll;
      window.scrollTo({
        top: section.offsetTop + targetScrollTop,
        behavior: 'smooth'
      });
    }
  }


  return (
    <div className="navbar-container transition duration-500 flex justify-center fixed w-full top-0 z-50 pb-4 items-center mb-4">
      <div className="navbar rounded-2xl w-[6%] duration-500 flex justify-between items-center p-4 ">
        <h1 className="name-header z-50 font-cursive whitespace-nowrap absolute text-bold text-4xl">Ansuman Sharma</h1>
        <div className="links opacity-0 flex ml-auto">
          <p onClick = {() => {handleAbout()}} className="link font-dmsans mx-[20px]   cursor-pointer hover:text-[#2e70db] duration-100">About</p>
          <p onClick = {() => {handleClick('.experience-section')}} className="link font-dmsans mx-[20px]   cursor-pointer hover:text-[#2e70db] duration-100">Experience</p>
          <p onClick = {() => {handleClick('.projects-section')}} className="link font-dmsans mx-[20px]   cursor-pointer hover:text-[#2e70db] duration-100">Projects</p>
          <p onClick = {() => {handleClick('.skills-section')}} className="link font-dmsans mx-[20px]   cursor-pointer hover:text-[#2e70db] duration-100">Skills</p>
          <p onClick = {() => {handleClick('.contact-section')}} className="link font-dmsans mx-[20px]   cursor-pointer hover:text-[#2e70db] duration-100">Contact</p>
        </div>
        <button className="block md:hidden ml-auto" onClick={toggleDropdown}>
          ☰
        </button>
        {isDropdownOpen && (
          <div ref={dropdownRef} className="dropdown-menu absolute top-full right-0 rounded-xl bg-[#333] py-4 shadow-lg">
            <p onClick = {() => {handleAbout()}} className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">About</p>
            <p onClick = {() => {handleClick('.experience')}} className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">Experience</p>
            <p onClick = {() => {handleClick('.projects')}} className="link font-dmsans mx-[20px] cursor-pointer hover:text-[#2e70db] duration-100">Projects</p>
            <p onClick = {() => {handleClick('.skills-section')}} className="link font-dmsans mx-[20px]   cursor-pointer hover:text-[#2e70db] duration-100">Skills</p>
            <p onClick = {() => {handleClick('.contact-section')}} className="link font-dmsans mx-[20px] cursor-pointer z-20 hover:text-[#2e70db] duration-100">Contact</p>
          </div>
        )}
      </div>
    </div>
  );
}
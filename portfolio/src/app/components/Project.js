import React, { useState } from 'react';
import Image from 'next/image';

export default function Project(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project w-[fit-content] relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={props.imageName}
        className="project-image hover:cursor-pointer w-[500px] h-[281px] filter grayscale hover:grayscale-0 transition duration-500 ease-in-out"
        alt="project image"
      />
      <p
        className={`project-title absolute font-inter text-3xl font-semibold text-white rounded top-[250px] transition duration-500 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
        }`}
      >
        {props.title}
      </p>
      <p className="font-dmsans font-normal text-lg">{props.description}</p>
    </div>
  );
}
import React, { useState } from 'react';
import Skill from './Skill';

export default function Job(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const companyLinks = {
    'Ascend Learning LLC': 'https://www.ascendlearning.com/',
    'UiPath Inc.': 'https://www.uipath.com/',
  }
  return (
    <div className={`${props.margin}`}>
      <div className='job flex flex-col justify-center'>
        <div
            onClick={handleClick} 
            className='flex flex-row justify-between items-center cursor-pointer'>
          <h1 className={`${isVisible ? 'text-[#2e70db]' : ''} font-inter hover:text-[#2e70db] duration-200 font-semibold text-4xl`}>{props.title}</h1>
          <svg
            className={`transition-transform duration-700 ease-in-out ${isVisible ? 'rotate-180' : 'rotate-0'}`}
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`${isVisible ? 'stroke-blue-500':''} down-arrow opacity-1 cursor-pointer transition duration-700 ease-in-out hover:stroke-blue-500`}
              d="M7 10L12 15L17 10"
              stroke="#a5a5a5"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2
            className={`font-inter font-regular text-3xl mb-2 cursor-pointer border-b-2 w-[fit-content] duration-300 ${isHovered ? 'text-white border-b-white' : 'border-b-transparent'}`}
            onClick={() => { window.open(companyLinks[props.company], '_blank') }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.company}
            <svg
                viewBox="0 0 24 24"
                height='30px'
                width='30px'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                className={`transition duration-300 ${isHovered ? 'translate-x-[3px] translate-y-[-3px]' : ''}`}
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke={isHovered ? "#ffffff" : "#a5a5a5"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </svg>
        </h2>  
        <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${isVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className='font-dmsans font-light text-lg'>{props.date}</p>
          <p className='font-dmsans font-light text-lg mb-2'>{props.location}</p>
          <div className='flex flex-row flex-wrap'>
            {props.skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </div>
          <p className='font-dmsans font-light text-lg'>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
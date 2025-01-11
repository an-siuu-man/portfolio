import React, { useState } from 'react';
import ReactIcon from './ReactIcon';
import NextIcon from './NextIcon';
import DjangoIcon from './DjangoIcon';
import DotnetIcon from './DotnetIcon';
import GitIcon from './GitIcon';
import NodeIcon from './NodeIcon';




export default function Frameworks() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col justify-start w-full">
      <div
        onClick={handleClick}
        className='flex flex-row justify-between items-center cursor-pointer mb-5'
      >
        <h1 className={`${isVisible ? 'text-[#2e70db]' : ''} font-inter hover:text-[#2e70db] duration-200 font-semibold text-4xl`}>Frameworks and Tools</h1>
        <svg
          className={`transition-transform duration-500 ease-in-out ${isVisible ? 'rotate-180' : 'rotate-0'}`}
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
      <div className={`transition-all duration-700 ease-in-out grid grid-cols-3 gap-4 overflow-hidden justify-items-center items-start ${isVisible ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="min-h-[80px]"><ReactIcon /></div>
        <div className="min-h-[80px]"><NextIcon /></div>
        <div className="min-h-[80px]"><DotnetIcon /></div>
        <div className="min-h-[80px]"><DjangoIcon /></div>
        <div className="min-h-[80px]"><NodeIcon /></div>
        <div className="min-h-[80px]"><GitIcon /></div>
      </div>
    </div>
  );
}
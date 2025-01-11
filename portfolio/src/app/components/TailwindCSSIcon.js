import React, { useState } from 'react';

const TailwindCSSIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex flex-col justify-start items-center'>
      <div
        className={`group w-[fit-content] overflow-hidden duration-300 ease-in-out ${isHovered ? 'max-h-[80px]' : 'max-h-[50px]'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className='duration-300 ease-in-out'
            d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
            fill={isHovered ? "#44a8b3" : "#a5a5a5"}
          />
        </svg>
      </div>
      <p className={`font-dmsans font-light text-lg ${isHovered ? 'opacity-1' : 'opacity-0'} duration-300`}>TailwindCSS</p>

    </div>
  );
};

export default TailwindCSSIcon;
import React, { useState } from 'react';

export default function CppIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`duration-300 ease-in-out overflow-hidden ${isHovered ? 'max-h-[80px]' : 'max-h-[50px]'} flex flex-col items-center`}>
      <div>
        <svg
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          width="60px"
          height="60px"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.078 12A5.928 5.928 0 0 1 12 6.078a5.946 5.946 0 0 1 5.129 2.959l-1.499.867 5.027-2.902a1.579 1.579 0 0 0-.543-.575l-7.345-4.24c-.424-.245-1.116-.245-1.539 0l-7.345 4.24c-.422.244-.768.844-.768 1.333v8.48c0 .245.086.517.226.758l3.529-2.038A5.883 5.883 0 0 1 6.078 12z"
            fill={isHovered ? "#00599C" : "#a5a5a5"}
            className='transition duration-300'
          />
          <path
            d="M14.564 10.519A2.971 2.971 0 0 0 12 9.039a2.964 2.964 0 0 0-2.564 4.441L12 12l2.564-1.481z"
            fill={isHovered ? "#004482" : "#a5a5a5"}
            className='transition duration-300'
          />
          <path
            d="m20.657 7.002-5.046 2.913-1.046.605-.001-.001L12 12l-2.563 1.48A2.964 2.964 0 0 0 12 14.961a2.97 2.97 0 0 0 2.565-1.481l2.563 1.483a5.944 5.944 0 0 1-5.129 2.959 5.926 5.926 0 0 1-5.128-2.962l-3.529 2.038c.14.242.332.453.543.575l7.345 4.24c.423.245 1.115.245 1.539 0l7.345-4.24c.211-.122.403-.333.543-.575.14-.241.226-.513.226-.758V7.76c0-.245-.086-.517-.226-.758zm-2.735 5.327h-.658v.658h-.657v-.658h-.658v-.658h.658v-.658h.657v.658h.658v.658zm2.468 0h-.658v.658h-.658v-.658h-.657v-.658h.657v-.658h.658v.658h.658v.658z"
            fill={isHovered ? "#659AD2" : "#a5a5a5"}
            className='transition duration-300'
          />
        </svg>
      </div>
      <p className={`font-dmsans font-light text-lg ${isHovered ? 'opacity-1' : 'opacity-0'} duration-300`}>C++</p>
    </div>
  );
}
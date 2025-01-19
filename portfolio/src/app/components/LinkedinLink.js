import React, { useState } from 'react';

export default function LinkedinLink() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div 
      className={`duration-300 ease-in-out cursor-pointer overflow-hidden ${isHovered ? 'max-h-[80px]' : 'max-h-[50px]'} flex flex-col items-center`}
      onClick={() => window.open('https://www.linkedin.com/in/ansuman-sharma', '_blank')}
    >
      <div>
        <svg
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          width="50px"
          height="50px"
          viewBox="4 4 40 40"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300"
        >
          <circle cx="24" cy="24" r="20" fill={isHovered ? "#0077B5" : "#a5a5a5"} className='transition duration-300' />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
            fill="white"
          />
        </svg>
      </div>
      <p className={`font-dmsans font-light text-lg ${isHovered ? 'opacity-1' : 'opacity-0'} duration-300`}>LinkedIn</p>
    </div>
  );
}

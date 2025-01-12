import React, { useState } from 'react';

export default function GmailLink() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleClick = () => {
        navigator.clipboard.writeText('ansuman5171@gmail.com');
        alert('Email copied to clipboard!');
    };

    return (
        <div 
        className={`duration-300 ease-in-out cursor-pointer overflow-hidden ${isHovered ? 'max-h-[80px]' : 'max-h-[50px]'} flex flex-col items-center`}
        onClick={handleClick}>
        
            <div>
                <svg
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    width="50px"
                    height="50px"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300"
                >
                    <rect width="512" height="512" rx="15%" fill={isHovered ? "#ffffff" : "#a5a5a5"} className='transition duration-300'/>
                    <path d="M158 391v-142l-82-63V361q0 30 30 30" fill={isHovered ? "#4285f4" : "#fff"} className="transition duration-300" />
                    <path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill={isHovered ? "#ea4335" : "#fff"} className="transition duration-300" />
                    <path d="M354 391v-142l82-63V361q0 30-30 30" fill={isHovered ? "#34a853" : "#fff"} className="transition duration-300" />
                    <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill={isHovered ? "#c5221f" : "#fff"} className="transition duration-300" />
                    <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill={isHovered ? "#fbbc04" : "#fff"} className="transition duration-300" />
                </svg>
            </div>
            <p className={`font-dmsans font-light text-lg ${isHovered ? 'opacity-1' : 'opacity-0'} duration-300`}>Gmail</p>
        </div>
    );
}
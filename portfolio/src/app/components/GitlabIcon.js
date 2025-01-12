import React, { useState } from 'react';

export default function GitlabIcon() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className={`duration-300 ease-in-out overflow-hidden ${isHovered ? 'max-h-[80px]' : 'max-h-[50px]'} flex flex-col items-center`}>
            <div>
                <svg
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    width="50px"
                    height="50px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="transition duration-300"
                >
                    <path className="transition duration-300" fill={isHovered ? "#FC6D26" : "#a5a5a5"} d="M14.975 8.904L14.19 6.55l-1.552-4.67a.268.268 0 00-.255-.18.268.268 0 00-.254.18l-1.552 4.667H5.422L3.87 1.879a.267.267 0 00-.254-.179.267.267 0 00-.254.18l-1.55 4.667-.784 2.357a.515.515 0 00.193.583l6.78 4.812 6.778-4.812a.516.516 0 00.196-.583z"/>
                    <path className="transition duration-300" fill={isHovered ? "#E24329" : "#a5a5a5"} d="M8 14.296l2.578-7.75H5.423L8 14.296z"/>
                    <path className="transition duration-300" fill={isHovered ? "#FC6D26" : "#a5a5a5"} d="M8 14.296l-2.579-7.75H1.813L8 14.296z"/>
                    <path className="transition duration-300" fill={isHovered ? "#FCA326" : "#a5a5a5"} d="M1.81 6.549l-.784 2.354a.515.515 0 00.193.583L8 14.3 1.81 6.55z"/>
                    <path className="transition duration-300" fill={isHovered ? "#E24329" : "#a5a5a5"} d="M1.812 6.549h3.612L3.87 1.882a.268.268 0 00-.254-.18.268.268 0 00-.255.18L1.812 6.549z"/>
                    <path className="transition duration-300" fill={isHovered ? "#FC6D26" : "#a5a5a5"} d="M8 14.296l2.578-7.75h3.614L8 14.296z"/>
                    <path className="transition duration-300" fill={isHovered ? "#FCA326" : "#a5a5a5"} d="M14.19 6.549l.783 2.354a.514.514 0 01-.193.583L8 14.296l6.188-7.747h.001z"/>
                    <path className="transition duration-300" fill={isHovered ? "#E24329" : "#a5a5a5"} d="M14.19 6.549H10.58l1.551-4.667a.267.267 0 01.255-.18c.115 0 .217.073.254.18l1.552 4.667z"/>
                </svg>
            </div>
            <p className={`font-dmsans font-light text-lg ${isHovered ? 'opacity-1' : 'opacity-0'} duration-300`}>GitLab</p>
        </div>
    );
}
import React, { useState } from 'react';

export default function DjangoIcon() {
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
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300"
                >
                    <path
                        d="M14.135,4H18.1V22.169a26.218,26.218,0,0,1-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322,0-4,2.673-6.6,6.816-6.6a6.448,6.448,0,0,1,1.724.2V4Zm0,9.142a3.992,3.992,0,0,0-1.337-.2c-2,0-3.163,1.223-3.163,3.366,0,2.087,1.107,3.239,3.138,3.239a9.355,9.355,0,0,0,1.362-.1v-6.3Z"
                        fill={isHovered ? "#44b78b" : "#a5a5a5"}
                        className='transition duration-300'
                    />
                    <path
                        d="M24.4,10.059v9.1c0,3.133-.235,4.639-.923,5.938A6.316,6.316,0,0,1,20.237,28l-3.678-1.733A5.708,5.708,0,0,0,19.7,23.638c.566-1.121.745-2.42.745-5.837V10.059Z"
                        fill={isHovered ? "#44b78b" : "#a5a5a5"}
                        className='transition duration-300'
                    />
                    <rect
                        x="20.441"
                        y="4.02"
                        width="3.964"
                        height="4.028"
                        fill={isHovered ? "#44b78b" : "#a5a5a5"}
                        className='transition duration-300'
                    />
                </svg>
            </div>
            <p className={`font-dmsans font-light text-lg ${isHovered ? 'opacity-1' : 'opacity-0'} duration-300`}>Django</p>
        </div>
    );
}
import React, { useState } from 'react';

const SqlIcon = () => {
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
            d="M8.562,15.256A21.159,21.159,0,0,0,16,16.449a21.159,21.159,0,0,0,7.438-1.194c1.864-.727,2.525-1.535,2.525-2V9.7a10.357,10.357,0,0,1-2.084,1.076A22.293,22.293,0,0,1,16,12.078a22.36,22.36,0,0,1-7.879-1.3A10.28,10.28,0,0,1,6.037,9.7v3.55C6.037,13.724,6.7,14.528,8.562,15.256Z"
            fill={isHovered ? "#ffda44" : "#a5a5a5"}
          />
          <path
            className='duration-300 ease-in-out'
            d="M8.562,21.961a15.611,15.611,0,0,0,2.6.741A24.9,24.9,0,0,0,16,23.155a24.9,24.9,0,0,0,4.838-.452,15.614,15.614,0,0,0,2.6-.741c1.864-.727,2.525-1.535,2.525-2v-3.39a10.706,10.706,0,0,1-1.692.825A23.49,23.49,0,0,1,16,18.74a23.49,23.49,0,0,1-8.271-1.348,10.829,10.829,0,0,1-1.692-.825V19.96C6.037,20.426,6.7,21.231,8.562,21.961Z"
            fill={isHovered ? "#ffda44" : "#a5a5a5"}
          />
          <path
            className='duration-300 ease-in-out'
            d="M16,30c5.5,0,9.963-1.744,9.963-3.894V23.269a10.5,10.5,0,0,1-1.535.762l-.157.063A23.487,23.487,0,0,1,16,25.445a23.422,23.422,0,0,1-8.271-1.351c-.054-.02-.106-.043-.157-.063a10.5,10.5,0,0,1-1.535-.762v2.837C6.037,28.256,10.5,30,16,30Z"
            fill={isHovered ? "#ffda44" : "#a5a5a5"}
          />
          <ellipse
            className='duration-300 ease-in-out'
            cx="16"
            cy="5.894"
            rx="9.963"
            ry="3.894"
            fill={isHovered ? "#ffda44" : "#a5a5a5"}
          />
        </svg>
      </div>
      <p className={`font-dmsans font-light text-lg ${isHovered ? 'opacity-1' : 'opacity-0'} duration-300`}>SQL</p>

    </div>
  );
};

export default SqlIcon;
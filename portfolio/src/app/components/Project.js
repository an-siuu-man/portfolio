import Image from "next/image";
import { useState } from "react";

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
      className="flex flex-col justify-start rounded-xl overflow-hidden items-center m-4 max-w-[30vw]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project flex flex-col relative justify-start items-center">
        <Image
          className={`rounded-tl-xl rounded-tr-xl transition duration-200 filter ${isHovered ? 'blur-0' : 'blur-sm'} w-[100%] `}
          src={props.image}
          alt={props.title}
          height={300}
        />
        <h1 className="project-title py-2 absolute top-[0%] rounded-tr-xl rounded-tl-xl w-full text-center font-inter font-semibold text-white text-4xl">
          {props.title}
        </h1>
      </div>
      <div className="flex flex-col text-center text-[#ddd] min-h-[150px] items-center bg-[#333] p-4 rounded-bl-xl rounded-br-xl">
        <p className="font-dmsans text-lg">
          {props.description}
        </p>
      </div>
    </div>
  );
}
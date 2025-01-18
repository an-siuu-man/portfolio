import Image from "next/image";
import { useState } from "react";
import Skill from "./Skill";
export default function Project(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (link) => {
    window.open(link, '_blank');
  }

  return (
    <div
      className="project-container flex flex-col justify-start hover:scale-[1.05] duration-500 rounded-xl shadow-custom-dark bg-[#0f2027] overflow-hidden items-center  m-4 max-w-[30vw]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project w-full flex flex-col relative bg-[#222] justify-start items-center">
        <Image
          className={`w-full h-full rounded-tl-xl rounded-tr-xl transition duration-500 filter ${isHovered ? 'blur-0' : 'blur-sm'} object-cover`}          
          src={props.image}
          alt={props.title}
          height={300}
        />
        <h1 className="project-title py-2 absolute top-[0%] rounded-tr-xl rounded-tl-xl w-full text-center font-inter font-semibold text-white text-4xl">
          {props.title}
        </h1>
      </div>

      <div className="flex flex-col text-center text-[#ddd] w-full h-full z-5 items-center justify-start bg-[#1f3037] p-4 rounded-bl-xl rounded-br-xl">
      <div className="flex flex-row flex-wrap justify-center items-center w-full">
        {
          props.skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))
        }
      </div>
      <p className="font-dmsans text-lg">
        {props.description}
      </p>
      <div className={`flex flex-row justify-center items-baseline mt-4 w-full ease-in-out duration-500 ${isHovered ? 'max-h-[50px] overflow-hidden opacity-1' : 'opacity-0 max-h-0'}`}>
        <button onClick = {() => {handleClick(props.github)}} className="bg-[#2e70db] mx-2 hover:bg-[#1e60cb] duration-200 p-4 h-[20px] flex justify-center items-center font-dmsans rounded-full">
          Github
        </button>
        <button onClick = {() => {handleClick(props.devpost)}} className="bg-[#2e70db] mx-2 hover:bg-[#1e60cb] duration-200 p-4 h-[20px] flex justify-center items-center font-dmsans rounded-full">
          Devpost  
        </button>
      </div>
    </div>

    </div>
  );
}
'use client';

import { useEffect, useState } from "react";
import Skill from "./Skill";
import Image from "next/image";
export default function Project( props ) {
    
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        
    }, []);

    const handleClick = (link) => {
      window.open(link, '_blank');
    }


    
    return (
        <div className={`card ${isFocused ? `max-h-[700px]` : "max-h-64"} w-[450px] bg-[#1f3037] overflow-hidden rounded-3xl shadow transition-all ease-custom-ease duration-700`} 
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
            >
            <div className="card-image h-64 w-full flex flex-col overflow-hidden relative">
            <Image 
                    src={props.image} 
                    alt={props.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className={`rounded-tr-3xl rounded-tl-3xl transition-all duration-700 ease-in-out ${isFocused ? '' : 'blur-md'}`}
                />
                <h1 className={`project-title flex items-center justify-center py-2 absolute select-none bg-[#333] h-full w-full text-center font-inter font-semibold text-[#fafafa] text-4xl transition-opacity duration-700 ${isFocused ? 'cursor-default opacity-0' : 'cursor-pointer  opacity-50'}`}>
                {props.title}
                </h1>
            </div>
    
            <div className={`card-content flex flex-col justify-start text-[#ddd] items-center p-4 ${isFocused ? 'opacity-100 ': ' opacity-0'} transition-all ease-custom-ease duration-300`}>
                <div className="flex flex-row flex-wrap justify-start items-center">
                    {
                        props.skills.map((skill, index) => (
                        <Skill key={index} skill={skill} />
                        ))
                    }
                </div>
                <h1 className={`text-3xl mt-4 text-left w-full font-semibold font-inter ${isFocused ? 'translate-x-0' : 'translate-x-36'} transition-all ease-custom-ease duration-500`}>{props.title}</h1>

                <p className={`text-left text-lg font-dmsans ${isFocused ? 'translate-x-0' : 'translate-x-20'} transition-all ease-custom-ease duration-500`}>{props.description}</p>
                <div className={`flex flex-row justify-center items-baseline mt-2 w-full ease-in-out duration-500 ${isFocused ? 'opacity-100 ': ' opacity-0'} `}>
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
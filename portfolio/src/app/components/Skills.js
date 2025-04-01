import { useEffect, useRef } from "react";
import PythonIcon from "./PythonIcon";
import JsIcon from "./JsIcon";
import ProgrammingLanguages from "./ProgrammingLanguages";
import Frameworks from "./Frameworks";

export default function Skills() {

    const skillsRef = useRef(null);

    return (
        <div ref={skillsRef} className="skills-section flex flex-col justify-center items-center transition duration-1000 h-screen">
            <div className="skills flex flex-row w-full px-20 items-stretch">
                <div className="skills-left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 justify-start items-center">
                    <h1 className="font-inter font-semibold select-none text-6xl">Skills</h1>
                </div>
                <div className="skills-right w-[50%] flex flex-col p-4 transition duration-700">
                <p className="font-dmsans text-lg">    
                    Following are the skills that I have accumulated through my internship experience as well as personal projects.
                    My skills are primarily focused on web development on both frontend as well as backend sides.
                </p>
                <div className="skills-icons flex flex-col justify-start items-start mt-4">
                    {/* <PythonIcon />
                    <JsIcon /> */}
                    <ProgrammingLanguages />
                    <Frameworks />
                </div>
                </div>
            </div>
        </div>
    );
}
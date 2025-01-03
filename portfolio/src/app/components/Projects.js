import React, { useEffect, useRef } from 'react';
import Project from './Project';
import project2 from '../../../public/hackmidterms.jpg';

import project1 from '../../../public/project1.png';
import project3 from '../../../public/project3.png';
export default function Projects() {

    const projectsRef = useRef(null);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(200px)';
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1
        });

        if (projectsRef.current) {
            observer.observe(projectsRef.current);
        }

        return () => {
            if (projectsRef.current) {
                observer.unobserve(projectsRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col justify-start items-center mt-[20vh]">
            <div
            ref={projectsRef} 
            className="projects translate-y-[200px] w-full transition duration-1000 flex px-20 flex-col items-center justify-start opacity-0">
                <div className='flex flex-row items-stretch'>
                    <div className='left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 justify-start items-center'>
                        <h1 className="font-inter font-semibold text-6xl">Projects</h1>
                    </div>
                    <div className='right w-[50%] flex flex-col p-4 mb-3 transition duration-700 '>
                        <p className='font-dmsans text-lg'>
                            Most of my projects are products of intense collaborative efforts with my peers in hackathon environments.
                            I love participating in hackathons because they provide a platform for me to learn new technologies and work on projects that have a real-world impact.
                        </p>
                    </div>
                </div>
                <div className='projects-container flex flex-row items-stretch justify-center max-w-[80vw] flex-wrap'>
                    <Project image = {project1} title = 'CodeLingo</>' description = 'This is the description for the project This is the description for the project This is the description for the project' />
                    <Project image = {project2} title = 'HackMidterms' description = 'This is the description for the project This is the description for the project This is the description for the project This is the description for the project This is the description for the project This is the description for the project'/>
                    <Project image = {project3} title = 'Geogo' description = 'This is the description for the project This is the description for the project This is the description for the project This is the description for the project This is the description for the project This is the description for the project' />
                </div>
            </div>
        </div>
    );
}
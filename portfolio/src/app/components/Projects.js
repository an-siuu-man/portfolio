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
            threshold: 0.15
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
                <div className='flex flex-row items-stretch mb-10'>
                    <div className='left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 justify-start items-center'>
                        <h1 className="font-inter font-semibold text-6xl">Projects</h1>
                    </div>
                    <div className='right w-[50%] flex flex-col p-4 mb-3 transition duration-700 '>
                        <p className='font-dmsans text-lg'>
                            Most of my projects are products of intense collaborative efforts with my peers in hackathon environments.
                            I love participating in hackathons because I love the thrill of working with extremely tight deadlines and work on projects that have a real-world impact.
                        </p>
                    </div>
                </div>
                <div className='projects-container flex flex-row items-stretch justify-center max-w-[80vw] flex-wrap'>
                    <Project image = {project1} skills = {['Next.js', 'PostgreSQL','Flask']} title = 'CodeLingo</>' description = 'Winner in Hack K-State 2024, this web app helps users learn C++ with ease by letting them visualize their code in the form of dynamic boxes showing how variables are updated and functions are called.' />
                    <Project image = {project2} skills = {['Next.js', 'Pinata IPFS', 'Whisper by OpenAI']} title = 'HackMidterms' description = 'This web app helps users, especially students, create flashcards and practice questions from their online lectures through a speech-to-text model for quick revision and make studying easier.'/>
                    <Project image = {project3} skills = {['Django', 'Flask', 'SerpAPI', 'Gemini']} title = 'Geogo' description = 'To make tourism easier, me and three of my peers developed this app to provide users with visa requirements, flight itenaries, popular tourist spots, and potential daily costs of travelling to any city with an international airport.' />
                </div>
            </div>
        </div>
    );
}
import React, { useEffect, useRef } from 'react';

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
        <div className="flex flex-col justify-start items-center mt-[20vh] overflow-hidden">
            <div
            ref={projectsRef} 
            className="projects translate-y-[200px] w-full transition duration-1000 flex px-20 flex-row items-stretch opacity-0">
                <div className='left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 justify-start items-center'>
                    <h1 className="font-inter font-semibold text-6xl">Projects</h1>
                </div>
                <div className='right w-[50%] flex flex-col p-4 transition duration-700 '>
                    <div className="project">
                        <h1 className="font-inter font-semibold text-4xl">Project 1</h1>
                        <p className="font-inter font-normal text-lg">Description of Project 1</p>
                    </div>
                    <div className="project">
                        <h1 className="font-inter font-semibold text-4xl">Project 2</h1>
                        <p className="font-inter font-normal text-lg">Description of Project 2</p>
                    </div>
                    <div className="project">
                        <h1 className="font-inter font-semibold text-4xl">Project 3</h1>
                        <p className="font-inter font-normal text-lg">Description of Project 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
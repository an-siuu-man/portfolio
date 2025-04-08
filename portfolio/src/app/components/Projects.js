import React, { useRef } from 'react';
import Image from 'next/image';




import Project from './Project';
import lefticon from '../../../public/left.svg';
import righticon from '../../../public/right.svg';


import project1 from '../../../public/project1.png';
import project2 from '../../../public/hackmidterms.jpg';
import project3 from '../../../public/project3.png';
import project4 from '../../../public/project4.png';
import project5 from '../../../public/project5.jpg';
import project6 from '../../../public/project6.jpeg';
import project7 from "../../../public/bldr.png";


export default function Projects() {
    const carouselRef = useRef(null);

    const cardWidth = 450 + 16;

    const scrollLeft = () => {
        carouselRef.current.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        carouselRef.current.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    };

    const projectData = [
        {
            image: project7,
            github: 'https://github.com/shivanshshrivas/bldr',
            devpost: 'https://devpost.com/software/bldr?',
            title: 'bldr',
            skills: ['Next.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
            description: "Winner of 'Best use of MongoDB' at HackKU 25, bldr is a smart scheduling assistant that helps college students plan courses. Upload your transcript, and it suggests the best classes for your degree. The built-in chatbot lets the user refine their schedule by letting them ask about core requirements, avoid early classes, or explore electives, all through a simple, natural conversation powered by AI."
        },
        {
            image: project5,
            github: 'https://github.com/shivanshshrivas/SafeChain',
            devpost: 'https://devpost.com/software/safe-chain-3zi5m6?_gl=1*1lugloz*_gcl_au*MjA5NjE1MDQ4NS4xNzQzNDc1NjE4*_ga*MTA1OTMxMDQ2OC4xNzQzNDc1NjE4*_ga_0YHJK3Y10M*MTc0MzU0ODIwOC41LjEuMTc0MzU0ODIxOC4wLjAuMA',
            title: 'SafeChain',
            skills: ['React.js', 'Express.js', 'Pinata IPFS', 'PostgreSQL'],
            description: 'SafeChain is a decentralized communication system ensuring connectivity during emergencies and a winner of "Best Use of Pinata Track" at Block-a-thon 2025. Using blockchain, peer-to-peer communication, and decentralized storage, it enables secure information sharing among first responders, enhancing disaster response and coordination.',
        },
        {
            image: project6,
            github: 'https://github.com/an-siuu-man/finders-keepers',
            devpost: 'https://devpost.com/software/finders-seeekers?',
            title: 'Finders Keepers',
            skills: ['React Native', 'Express.js', 'PostgreSQL', 'Twilio'],
            description: 'A mobile app that helps college students find and report lost items using image recognition and location mapping. Users upload photos of found items, and fuzzy matching connects them with owners in real time to simplify the recovery process.',
        },
        {
            image: project1,
            github: 'https://github.com/an-siuu-man/code-lingo',
            devpost: 'https://devpost.com/software/codelingo-lg9a4q',
            title: 'CodeLingo</>',
            skills: ['Next.js', 'PostgreSQL', 'Flask'],
            description: 'Winner of Hack K-State 2024, CodeLingo is a web app that helps users learn C++ through dynamic visualizations. It turns code into interactive boxes that show variable updates and function calls in real time, making it easier for beginners to understand logic, follow execution flow, and build coding confidence.',
        },
        {
            image: project2,
            github: 'https://github.com/an-siuu-man/hackmidterms',
            devpost: 'https://devpost.com/software/hackmidterms',
            title: 'HackMidterms',
            skills: ['Next.js', 'Pinata IPFS', 'Whisper by OpenAI', 'Flask'],
            description: 'This web app helps users, especially students, create flashcards and practice questions from their online lectures through a speech-to-text model for quick revision and make studying easier.',
        },
        {
            image: project3,
            github: 'https://github.com/an-siuu-man/geogo',
            devpost: 'https://devpost.com/software/geogo',
            title: 'Geogo',
            skills: ['Django', 'Flask', 'SerpAPI', 'Gemini'],
            description: 'Geogo is a web app that simplifies international travel planning by providing visa requirements, legal info, and cost estimates for over 100+ destinations. It helps users find budget-friendly, accessible countries and eliminates the stress of navigating complex travel documentation and logistics.',
        },
        {
            image: project4,
            github: 'https://github.com/manees-singh/NeoPyramid',
            devpost: 'https://devpost.com/software/servo-tower',
            title: 'NeoPyramid',
            skills: ['C/C++', 'Arduino', 'Raspberry Pi'],
            description: 'This project is a mechanical rubber-band shooting turret with a rotating barrel that can detect foreign objects and shoot accurately at them at distances more than 25ft.',
        }
    ];

    return (
        <div className="projects-section flex flex-col justify-start items-center w-full">
            <div className="projects w-full px-4 sm:px-20 flex flex-col items-center justify-start">
                <div className='flex w-full flex-col md:flex-row items-stretch mb-10'>
                    <div className='projects-left md:w-[50%] w-full flex flex-col border-[transparent] border-r-[#2e70db] md:border-r-2 justify-start items-center'>
                        <h1 className="font-inter font-semibold select-none text-4xl sm:text-6xl">Projects</h1>
                    </div>
                    <div className='projects-right md:w-[50%] w-full flex flex-col p-4'>
                        <p className='font-dmsans text-lg'>
                            Most of my projects are products of intense collaborative efforts with my peers in hackathon environments.
                            I love participating in hackathons because I love the thrill of working with extremely tight deadlines and create solutions that have a real-world impact.
                        </p>
                    </div>
                </div>

                <div className="relative flex justify-center w-full ">
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 z-10 px-3 py-2 transition"
                    style={{ top: '100px' }} 
                >
                    { lefticon && <Image src={lefticon} alt="Left Arrow" width={50} height={50} /> }
                </button>

                    <div className="w-[916px] overflow-x-hidden">
                        <div
                            ref={carouselRef}
                            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-4"
                            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
                        >
                            {projectData.map((proj, i) => (
                                <div key={i} className="w-[450px] snap-start flex-shrink-0 ">
                                    <Project
                                        image={proj.image}
                                        title={proj.title}
                                        skills={proj.skills}
                                        github={proj.github}
                                        devpost={proj.devpost}
                                        description={proj.description}
                                    />
                                </div>
                            ))}
                            <p className='font-dmsans mt-4 text-lg flex items-start'>More projects coming soon!</p>

                        </div>
                    </div>

                    <button
                        onClick={scrollRight}
                        className="absolute right-0 z-10 px-3 py-2 transition"
                        style={{ top: '100px' }}
                    >
                        { righticon && <Image src={righticon} alt="Right Arrow" width={50} height={50} /> }
                    </button>

                </div>
            </div>
        </div>
    );
}

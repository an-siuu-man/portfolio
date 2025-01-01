import React, { useEffect, useRef } from 'react';
import Job from './Job';




export default function Experience() {
  const experienceRef = useRef(null);

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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col justify-start items-center mt-[20vh]  overflow-hidden">
      <div
        ref={experienceRef}
        className="experience translate-y-[200px] w-full transition duration-1000 flex px-20 flex-row items-stretch opacity-0"
      >
        <div className='left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 justify-start items-center'>
          <h1 className="font-inter font-semibold text-6xl">Experience</h1>
        </div>
        <div className='right w-[50%] flex flex-col p-4 transition duration-700 '>
            <Job title  = 'Software Engineer Intern' company = 'Ascend Learning LLC' date = 'November 2024 - Present' location = 'Hybrid - Overland Park, KS' skills = {['.NET Core', 'SQL Server']} description = 'Utilizing C# .NET Core to develop API infrastructure for a new Faculty Course Enablement Portal in the Learning Management System. Collaborating within an agile team environment by participating in daily stand-ups, sprint planning, and iterative development cycles.'/>
            <Job title = 'Enterprise Success Intern' company = 'UiPath Inc.' date = 'June 2024 - August 2024' location = 'Bellevue, WA' skills = {['.NET Core', 'SQL Server', 'Python', 'UiPath Apps']} description = 'Developed a centralized comprehensive repository to help users access hundreds of production-implemented use cases, business challenges, and case studies for enterprise-level clients. Designed efficient automation workflows to automatically generate comprehensive PowerPoints with the use case data within seconds. Reduced product use case research time for Technical Account Managers at the company by over 95%.' />
        </div>
      </div>
    </div>
  );
}
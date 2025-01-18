import React, { useEffect, useRef } from 'react';
import Job from './Job';

export default function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.style.opacity !== '1') {
            entry.target.style.opacity = '1';
          }
        } else {
          if (entry.target.style.opacity !== '0') {
            entry.target.style.opacity = '0';
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3
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
    <div
      ref={experienceRef}
      className="experience-section flex flex-col transition duration-1000 justify-start items-stretch h-full opacity-0"
    >
      <div
        className="experience  w-full flex px-20 flex-row items-stretch "
      >
        <div className='experience-left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 transition items-center justify-start'>
          <h1 className="font-inter font-semibold text-6xl">Experience</h1>
        </div>
        <div className='experience-right w-[50%] flex flex-col p-4 transition duration-700 '>
            <Job title  = 'Software Engineer Intern' margin= 'mb-5' company = 'Ascend Learning LLC' date = 'November 2024 - Present' location = 'Hybrid - Overland Park, KS' skills = {['.NET Core', 'SQL Server']} description = 'Utilizing C# .NET Core to develop API infrastructure for a new Faculty Course Enablement Portal in the Learning Management System. Collaborating within an agile team environment by participating in daily stand-ups, sprint planning, and iterative development cycles.'/>
            <Job title = 'Enterprise Success Intern' margin= 'mt-5' company = 'UiPath Inc.' date = 'June 2024 - August 2024' location = 'Bellevue, WA' skills = {['.NET Core', 'SQL Server', 'Python', 'UiPath Apps']} description = 'Developed a centralized comprehensive repository to help users access hundreds of production-implemented use cases, business challenges, and case studies for enterprise-level clients. Designed efficient automation workflows to automatically generate comprehensive PowerPoints with the use case data within seconds. Reduced product use case research time for Technical Account Managers at the company by over 95%.' />
        </div>
      </div>
    </div>
  );
}
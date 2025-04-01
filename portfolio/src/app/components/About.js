import photo from '../../../public/Photo.png';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const about = document.querySelector('.about');
    const right = document.querySelector('.about-right');
    const left = document.querySelector('.about-left');
    const image = document.querySelector('.self-image');
    const downArrow = document.querySelector('.down-arrow');

    const handleResize = () => {
      if (window.innerWidth < 768) {
        about.style.flexDirection = 'column';
        left.style.borderRightColor = 'transparent';
        left.style.width = '100%';
        right.style.width = '100%';
        image.style.width = '80%';
      } else {
        about.style.flexDirection = 'row';
        left.style.borderRightColor = '';
        left.style.width = '50%';
        right.style.width = '50%';
        image.style.width = '';
      }
    };

    if (about && right && left && image && downArrow) {
      setTimeout(() => {
        about.style.opacity = '1';
        left.style.transform = 'translateY(0)';
        image.style.transform = 'translateY(0)';
        image.style.opacity = '1';
        right.style.transform = 'translateX(0)';
        right.style.opacity = '1';
        downArrow.style.opacity = '1';
        if (window.scrollY === 0) {
          downArrow.style.strokeWidth = '1';
  
        } else {
          downArrow.style.strokeWidth = '0';
        }
        handleResize();
      }, 300);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleClick() {
    const section = document.querySelector('.experience-section');
    if (section) {
      // Scroll to the bottom of the specified div plus 20vh
      const additionalScroll = window.innerHeight * 0.2; // 20vh
      const targetScrollTop = section.scrollHeight - section.clientHeight -  additionalScroll;
      window.scrollTo({
        top: section.offsetTop + targetScrollTop,
        behavior: 'smooth'
      });
    }
  }


  function handleLinkClick(ClassName) {
    const section = document.querySelector(ClassName);
    if (section) {
      // Scroll to the bottom of the specified div plus 20vh
      const additionalScroll = window.innerHeight * 0.2; // 20vh
      const targetScrollTop = section.scrollHeight - section.clientHeight -  additionalScroll;
      window.scrollTo({
        top: section.offsetTop + targetScrollTop,
        behavior: 'smooth'
      });
    }
  }


  return (
    <div className="about-section flex flex-col justify-center items-center h-screen overflow-hidden">
      <div ref={aboutRef} className="about transition duration-700 flex flex-row items-stretch justify-start px-20">
        <div className='about-left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 transition duration-700 translate-y-[200px] items-center justify-start'>
          <div className="photo-container">
            <Image
              className='self-image opacity-0 transition duration-700 translate-y-[300px] h-[300px] w-[300px] object-cover rounded-[50%]'
              src={photo}
              alt="Ansuman Sharma"
            />
          </div>
          <h1 className="font-inter font-semibold text-6xl text-center">
            Ansuman Sharma
          </h1>
          <p className="font-inter text-2xl text-center">
            University of Kansas
          </p>
        </div>
        <div className='about-right opacity-0 w-[50%] p-4 transition duration-700 translate-x-[200px]'>
          <h1 className='font-inter font-semibold text-4xl'>
            Hey there, visitor!
          </h1>
          <p className='font-dmsans text-lg py-4'>
            I am a third year student at the <span className='text-white cursor-pointer hover:border-b-white border-b-transparent border-b-2 transition duration-300' onClick={() => {
            window.open('https://www.ku.edu/', '_blank');
            }}>University of Kansas</span> pursuing Computer Science 
            and a minor in Mathematics with an expected graduation of May 2026.
          </p>
          <p className='font-dmsans text-lg py-4'>
            I like to develop innovative software solutions to solve real world problems 
            with my proficiency in <span className='text-white cursor-pointer hover:border-b-white border-b-transparent border-b-2 transition duration-300' onClick={() => {
            handleLinkClick('.skills-section');
            }}>
            various programming languages and frameworks. 
            </span> I intend to pursue a career in software development and am currently seeking 
            internship opportunities for Summer 2025.
          </p>
          <p className='font-dmsans text-lg py-4'>
            In my free time you can find me playing soccer, doing calligraphy, 
            or watching action comedy movies. <span className='text-white cursor-pointer hover:border-b-white border-b-transparent border-b-2 transition duration-300' onClick={() => {
              handleLinkClick('.contact-section');
            }}>Let's connect!</span> I'm always up for
             movie talk, answering your burning questions, or simply a friendly hello.
          </p>
        </div>
      </div>
    </div>
  );
}
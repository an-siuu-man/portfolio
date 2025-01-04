import photo from '../../../public/Photo.png';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function About() {
  const aboutRef = useRef(null);

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
      threshold: 0.4
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const about = document.querySelector('.about');
    const right = document.querySelector('.right');
    const left = document.querySelector('.left');
    const image = document.querySelector('.self-image');
    const downArrow = document.querySelector('.down-arrow');

    const handleResize = () => {
      if (window.innerWidth < 768) {
        about.style.flexDirection = 'column';
        left.style.borderRightColor = 'transparent';
      } else {
        about.style.flexDirection = 'row';
        left.style.borderRightColor = '';
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
        handleResize();
      }, 300);
    }

    const handleScroll = () => {
      const downArrow = document.querySelector('.down-arrow');
      if (window.scrollY === 0) {
        downArrow.style.opacity = '1';
        setTimeout(() => {
          downArrow.style.strokeWidth = '1';
        }, 600);
      } else {
        downArrow.style.opacity = '0';
        setTimeout(() => {
          downArrow.style.strokeWidth = '0';
        }, 600);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClick() {
    const experienceSection = document.querySelector('.experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        window.scrollBy(0, -250); // Adjust the value (-75) to scroll a few pixels above the div
      }, 500); // Adjust the timeout duration if necessary
    }
  }

  return (
    <div className="flex flex-col  justify-start items-center mt-[20vh] h-full overflow-hidden">
      <div ref={aboutRef} className="about transition duration-700 opacity-0 flex flex-row items-stretch justify-start px-20">
        <div className='left w-[50%] flex flex-col border-[transparent] border-r-[#2e70db] border-r-2 transition duration-700 translate-y-[200px] items-center justify-start'>
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
        <div className='right opacity-0 w-[50%] p-4 transition duration-700 translate-x-[200px]'>
          <h1 className='font-inter font-semibold text-4xl'>
            Hey there, visitor!
          </h1>
          <p className='font-dmsans text-lg py-4'>
            I am a third year student at the University of Kansas pursuing Computer Science and a minor in Mathematics with strong programming and mathematics skills.
          </p>
          <p className='font-dmsans text-lg py-4'>
            I like to develop innovative software solutions to solve real world problems with my proficiency in languages such as Python, JavaScript, C#, etc. and frameworks such as React, Next, .NET, Django, etc.
          </p>
          <p className='font-dmsans text-lg py-4'>
            In my free time you can find me playing soccer, doing calligraphy, or watching action comedy movies. Feel free to reach out to me for any queries, movie recommendations, or just to say hi!
          </p>
        </div>
      </div>
      <svg
        onClick={handleClick}
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
        width="100px"
        height="100px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="down-arrow opacity-0 cursor-pointer transition duration-500 hover:stroke-blue-500"
          d="M7 10L12 15L17 10"
          stroke="#a5a5a5"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
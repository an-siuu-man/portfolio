import photo from '../../../public/Photo.png';
import Image from 'next/image';

export default function About () {

    return (
      <div className="relative flex justify-center">
      <div className="home flex flex-row items-center p-20">
        <div className='left w-[50%] h-[100%] flex flex-col items-center justify-start'>
          <div className="photo-container">
          <Image 
            className='h-[200px] w-[200px] object-cover rounded-[50%]' 
            src={photo} 
            alt="Ansuman Sharma"
          />
          </div>
          <h1 className="font-inter text-6xl text-center">Ansuman Sharma</h1>
          <p className="font-dmsans text-2xl text-center">
            University of Kansas
          </p>
        </div>
        <div className='right w-[50%] rounded p-4'>
          <p className='font-dmsans text-lg py-4'>
          I am a Computer Science student at the University of Kansas with strong programming and mathematics skills. Proficient in Python, C++, and frameworks like React.js, I enjoy creating solutions that solve real-world problems and enhance user experiences. My passion lies in building intuitive and impactful tools through innovative technology.</p>

        </div>
      </div>
      </div>
    );
}
import photo from '../../../public/Photo.png';
import Image from 'next/image';



export default function Landing () {
    return (
      <div className="flex justify-center">
      <div className="home flex flex-col items-center">
        <div className="photo-container">
        <Image className='h-[200px] w-[200px] object-cover rounded-[50%] ' src={photo} alt="Ansuman Sharma"/>
        </div>
        <h1 className="font-inter text-6xl text-center">Ansuman Sharma</h1>
        <p className="font-dmsans text-2xl text-center">Web Developer</p>
      </div>
      </div>
    );
}
import { useState } from 'react';


export default function Job(props) {

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className="">
            <div className='job flex flex-col justify-center items-left mb-10'>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='font-inter font-semibold text-4xl'>{props.title}</h1>
                    <svg  onClick = {handleClick} className = {`${isVisible ? 'rotate-180' : 'rotate-0'} transition duration-500`} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className = {`down-arrow opacity-1 cursor-pointer transition duration-500 hover:stroke-blue-500`} onClick = {handleClick} d="M7 10L12 15L17 10" stroke="#a5a5a5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <h2 className='font-inter font-regular text-3xl mb-2'>{props.company}</h2>
                {isVisible && <p className='font-dmsans font-light text-lg'>{props.date}</p>}
                {isVisible && <p className='font-dmsans font-light text-lg mb-2'>{props.location}</p>}
                {isVisible && <p className='font-dmsans font-light text-lg'>{props.description}</p>}
            </div>
        </div>
    );
}
import React, { useEffect, useRef, useState } from 'react'
import dashboardImg from '../images/dashboard.jpg';
import robofriends1 from '../images/robofriends1.png';
import robofriends2 from '../images/robofriends2.png';
import robofriends3 from '../images/robofriends3.png';
import { 
    FaCircleChevronRight,
    FaCircleChevronLeft
} from 'react-icons/fa6'

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(2);
    const prevRef = useRef(null);
    const currentRef = useRef(null);
    const nextRef = useRef(null);

    const prevInitialClass = 'w-full absolute opacity-50 -z-10 scale-[90%]  top-0 left-0 flex flex-col md:w-1/2 bg-teal-400 h-full p-10 mx-auto';
    const currentInitialClass = 'w-full flex flex-col md:w-1/2 bg-teal-400 p-10 mx-auto h-[850px]';
    const nextInitialClass = 'w-full absolute opacity-50 -z-10 scale-[90%]  top-0 right-0 flex flex-col md:w-1/2 bg-teal-400 h-full p-10 mx-auto';

    useEffect(() => {

        currentRef.current.className = currentInitialClass;
        nextRef.current.className = nextInitialClass;
        prevRef.current.className = prevInitialClass;
    });

    const projects = [
        {
            title: 'Project 1',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, doloremque obcaecati dolore vel quos totam repellendus voluptatum adipisci, in delectus dolores officia tempora impedit repellat enim velit deleniti veniam a.',
            image: dashboardImg,
            links: {
                website: '',
                github: '',
            }
        },
        {
            title: 'RoboFriends',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, doloremque obcaecati dolore vel quos totam repellendus voluptatum adipisci, in delectus dolores officia tempora impedit repellat enim velit deleniti veniam a.',
            image: [
                robofriends1,
                robofriends2,
                robofriends3
            ],
            links: {
                website: '',
                github: 'https://github.com/JimChristian21/robofriends',
            }
        },
        {
            title: 'Project 3',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, doloremque obcaecati dolore vel quos totam repellendus voluptatum adipisci, in delectus dolores officia tempora impedit repellat enim velit deleniti veniam a.',
            image: dashboardImg,
            links: {
                website: '',
                github: '',
            }
        }
    ];

    const handlePrevious = () => {

        let prev = prevIndex - 1;
        let current = currentIndex - 1;
        let next = nextIndex-1;

        if (prev < 0) {

            prev = projects.length - 1;
        }

        if (current < 0) {

            current = projects.length - 1;
        }

        if (next < 0) {

            next = projects.length - 1;
        }

        currentRef.current.className = 'w-full flex flex-col md:w-1/2 bg-teal-400 p-10 mx-auto opacity-50 -z-10 scale-90';
        prevRef.current.className = 'w-full absolute scale-100 opacity-100 z-10 top-0 left-0 flex flex-col md:w-1/2 bg-teal-400 h-full p-10 scale-[100%] mx-auto z-10';

        currentRef.current.className = currentRef.current.className + 'transform duration-1000 opacity-50 scale-[90%] -z-10 translate-x-1/2';
        nextRef.current.className = nextRef.current.className + 'transform duration-1000 opacity-100 scale-[90%] -z-10 -translate-x-full';
        prevRef.current.className = prevRef.current.className + 'transform duration-1000 translate-x-1/2';
        
        setTimeout(() => {

            setPrevIndex(prev);
            setCurrentIndex(current);
            setNextIndex(next);
        }, 1000);
    }

    const transitionRender = async(prev, current, next) => {

        setPrevIndex(prev);
        setCurrentIndex(current);
        setNextIndex(next);
    }

    const handleNext = () => {

        let prev = prevIndex + 1;
        let current = currentIndex + 1;
        let next = nextIndex+1;

        if (prev === projects.length) {

            prev = 0;
        }

        if (current === projects.length) {

            current = 0;
        }

        if (next === projects.length) {

            next = 0;
        }

        currentRef.current.className = 'w-full flex flex-col md:w-1/2 bg-teal-400 p-10 mx-auto opacity-50 -z-10 scale-[90%]';
        nextRef.current.className = 'w-full absolute opacity-100 -z-10 scale-100  top-0 right-0 flex flex-col md:w-1/2 bg-teal-400 h-full p-10 mx-auto z-10';

        currentRef.current.className = currentRef.current.className + 'transform duration-1000 opacity-50 scale-[90%] -z-10 -translate-x-1/2';
        nextRef.current.className = nextRef.current.className + 'transform duration-1000 opacity-100 scale-[100%] z-10 -translate-x-1/2';
        prevRef.current.className = prevRef.current.className + 'transform duration-1000 opacity-50 scale-[90%] -z-10 translate-x-full';

        setTimeout(() => {

            setPrevIndex(prev);
            setCurrentIndex(current);
            setNextIndex(next);
        }, 700);
    }

  return (
    <div className='relative'>
    <div id='Projects' className='w-full relative text-black mt-5 mb-10'>
        <button onClick={handlePrevious} className='text-white absolute top-1/2 left-[30px] z-20'>
            <FaCircleChevronLeft className='text-4xl bg-black drop-shadow-lg rounded-full text-gray-500 hover:text-gray-500 hover:transform hover:duration-500 hover:scale-[1.1] hover:bg-gray-900'/>
        </button>
        <div ref={prevRef} className={prevInitialClass}>
            <div className='mb-5'>
                <img src={dashboardImg} alt='Project'/>
            </div>
            <div className='mb-7'>
                <h2 className="text-2xl md:text-5xl mb-3">{projects[prevIndex].title}</h2>
                <p className='text-sm md:text-md'>TEST</p>
            </div>
            <div>
                <button className='p-2 border rounded-lg bg-white mr-5 md:ml-7'>
                    Website
                </button>
                <button className='p-2 border border-gray-500 rounded-lg bg-gray-500'>
                    GitHub
                </button>
            </div>
        </div>
        <div ref={currentRef} className={currentInitialClass}>
            <div className='mb-5'>
                <img src={dashboardImg} alt='main'/>
            </div>
            <div className='mb-7'>
                <h2 className="text-2xl md:text-5xl mb-3">{projects[currentIndex].title}</h2>
                <p className='text-sm md:text-md'>TEST</p>
            </div>
            <div>
                <button className='p-2 border rounded-lg bg-white mr-5 md:ml-7'>
                    Website
                </button>
                <button className='p-2 border border-gray-500 rounded-lg bg-gray-500'>
                    GitHub
                </button>
            </div>
        </div>
        <div ref={nextRef} className={nextInitialClass}>
            <div className='mb-5'>
                <img src={dashboardImg} alt='Project'/>
            </div>
            <div className='mb-7'>
                <h2 className="text-2xl md:text-5xl mb-3">{projects[nextIndex].title}</h2>
                <p className='text-sm md:text-md'>TEST</p>
            </div>
            <div>
                <button className='p-2 border rounded-lg bg-white mr-5 md:ml-7'>
                    Website
                </button>
                <button className='p-2 border border-gray-500 rounded-lg bg-gray-500'>
                    GitHub
                </button>
            </div>
        </div>
        <button onClick={handleNext} className='text-white absolute top-1/2 right-[30px] z-20'>
            <FaCircleChevronRight className='text-4xl bg-black drop-shadow-lg rounded-full text-gray-500 hover:text-gray-500 hover:transform hover:duration-500 hover:scale-[1.1] hover:bg-gray-900'/>
        </button>
    </div>
    </div>
  )
}

export default Carousel
import React, { useEffect, useRef, useState } from 'react'
import robofriends1 from '../images/robo_friends/robofriends1.png';
import robofriends2 from '../images/robo_friends/robofriends2.png';
import robofriends3 from '../images/robo_friends/robofriends3.png';
import mujerbella1 from '../images/mujer_bella/mujer_bella1.png';
import mujerbella2 from '../images/mujer_bella/mujer_bella2.png';
import mujerbella3 from '../images/mujer_bella/mujer_bella3.png';
import mujerbella4 from '../images/mujer_bella/mujer_bella4.png';
import mujerbella5 from '../images/mujer_bella/mujer_bella5.png';
import mujerbella6 from '../images/mujer_bella/mujer_bella6.png';
import mujerbella7 from '../images/mujer_bella/mujer_bella7.png';
import mujerbella8 from '../images/mujer_bella/mujer_bella8.png';
import mujerbella9 from '../images/mujer_bella/mujer_bella9.png';
import mujerbella10 from '../images/mujer_bella/mujer_bella10.png';
import nike_clone1 from '../images/nike_clone/nike_clone1.png';
import nike_clone2 from '../images/nike_clone/nike_clone2.png';
import nike_clone3 from '../images/nike_clone/nike_clone3.png';
import dev1 from '../images/shopify_store_dev/dev1.png';
import dev2 from '../images/shopify_store_dev/dev2.png';
import dev3 from '../images/shopify_store_dev/dev3.png';
import dev4 from '../images/shopify_store_dev/dev4.png';
import dev5 from '../images/shopify_store_dev/dev5.png';
import CarouselCard from './CarouselCard';
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

    const prevInitialClass = 'w-full absolute opacity-50 -z-10 scale-[90%] top-0 left-0 flex flex-col md:w-1/2 bg-teal-400 h-full p-10 mx-auto';
    const currentInitialClass = 'w-full flex flex-col md:w-1/2 bg-teal-400 p-10 mx-auto';
    const nextInitialClass = 'w-full absolute opacity-50 -z-10 scale-[90%]  top-0 right-0 flex flex-col md:w-1/2 bg-teal-400 h-full p-10 mx-auto';

    useEffect(() => {

        currentRef.current.className = currentInitialClass;
        nextRef.current.className = nextInitialClass;
        prevRef.current.className = prevInitialClass;
    });

    const projects = [
        {
            id: 1,
            title: 'RoboFriends',
            description: 'List of Robots that is searchable. Responsive search where every input search the name of the robot.',
            images: [
                robofriends1,
                robofriends2,
                robofriends3
            ],
            links: {
                website: 'https://jimchristian21.github.io/robofriends',
                github: 'https://github.com/JimChristian21/robofriends',
            }
        },
        {
            id: 2,
            title: 'Mujer Bella Management System',
            description: 'Management Information system that handle Inventory, User Management, Cart Order, Order, Customers, and Products.',
            images: [
                mujerbella1,
                mujerbella2,
                mujerbella3,
                mujerbella4,
                mujerbella5,
                mujerbella6,
                mujerbella7,
                mujerbella8,
                mujerbella9,
                mujerbella10,
            ],
            links: {
                website: '',
                github: 'https://github.com/JimChristian21/Mujer-Bella-Logistic-Management-System',
            }
        },
        {
            id: 3,
            title: 'Nike Store Clone',
            description: 'Created with the power of Shopify Store.',
            description2: 'This is a nike clone store.',
            description3: 'Visit sample link with the password "testdev"',
            images: [
                nike_clone1,
                nike_clone2,
                nike_clone3
            ],
            links: {
                website: 'https://nike-clone-store.myshopify.com/',
                github: '',
            }
        },
        {
            id: 4,
            title: 'Shopify Sample Store',
            description: 'Shopify Store sample setup',
            description2: 'Visit sample link with the password "testdev"',
            images: [
                dev1,
                dev2,
                dev3,
                dev4,
                dev5,
            ],
            links: {
                website: 'https://jim-test-dev.myshopify.com/',
                github: '',
            }
        },
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
        <CarouselCard key={projects[prevIndex].id} ref={prevRef} style={prevInitialClass} item={projects[prevIndex]}/>
        <CarouselCard key={projects[currentIndex].id} ref={currentRef} style={currentInitialClass} item={projects[currentIndex]}/>
        <CarouselCard key={projects[nextIndex].id} ref={nextRef} style={nextInitialClass} item={projects[nextIndex]}/>
        <button onClick={handleNext} className='text-white absolute top-1/2 right-[30px] z-20'>
            <FaCircleChevronRight className='text-4xl bg-black drop-shadow-lg rounded-full text-gray-500 hover:text-gray-500 hover:transform hover:duration-500 hover:scale-[1.1] hover:bg-gray-900'/>
        </button>
    </div>
    </div>
  )
}

export default Carousel
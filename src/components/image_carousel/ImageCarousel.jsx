import React, { useState } from "react";

const ImageCarousel = ({ images }) => {

    const [prevIndex, setPrevIndex] = useState(images.length);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    const handlePrevious = () => {

        let prev = prevIndex - 1;
        let current = currentIndex - 1;
        let next = nextIndex-1;

        if (prev < 0) {

            prev = images.length - 1;
        }

        if (current < 0) {

            current = images.length - 1;
        }

        if (next < 0) {

            next = images.length - 1;
        }
        
        setPrevIndex(prev);
        setCurrentIndex(current);
        setNextIndex(next);
    }

    const handleNext = () => {

        let prev = prevIndex + 1;
        let current = currentIndex + 1;
        let next = nextIndex+1;

        if (prev === images.length) {

            prev = 0;
        }

        if (current === images.length) {

            current = 0;
        }

        if (next === images.length) {

            next = 0;
        }

        setPrevIndex(prev);
        setCurrentIndex(current);
        setNextIndex(next);
    }

    return (
        <div className="flex relative">
            <button onClick={handlePrevious} className='text-white absolute h-[25rem] bg-gray-700 hover:bg-gray-600 right-[100%]'>
                <span className='text-gray-300 text-2xl mx-1'>{'<'}</span>
            </button>
            <img src={images[currentIndex]} alt='Project'/>
            <button onClick={handleNext} className='text-white absolute h-[25rem] bg-gray-700 hover:bg-gray-600 left-[100%]'>
                <span className='text-gray-300 text-2xl mx-1'>{'>'}</span>
            </button>
        </div>
    );
}

export default ImageCarousel;
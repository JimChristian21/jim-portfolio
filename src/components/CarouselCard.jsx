import React, { forwardRef } from 'react';
import dashboardImg from '../images/dashboard.jpg';

const CarouselCard = forwardRef(({ style, item}, ref) => {

    return (
        <div ref={ref} className={style}>
            <div className='mb-5'>
                <img src={dashboardImg} alt='Project'/>
            </div>
            <div className='mb-7'>
                <h2 className="text-2xl md:text-5xl mb-3">{item.title}</h2>
                <p className='text-sm md:text-md'>{item.description}</p>
            </div>
            <div>
                <a href={item.links.website} className='p-2 border rounded-lg bg-white mr-5' target="_blank">
                    Website
                </a>
                <a href={item.links.github} className='p-2 border border-gray-500 rounded-lg bg-gray-500' target="_blank">
                    GitHub
                </a>
            </div>
        </div>
    );
})

export default CarouselCard;
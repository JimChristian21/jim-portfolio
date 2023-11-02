import React from "react";
import dashboardImg from '../images/dashboard.jpg';
import Carousel from "./Carousel";

const Projects = () => {
    
    return (
        <div id='Projects' className='w-full text-black my-16 min-h-full'>
            <div className='text-white text-7xl  color-3 font-semibold ml-20'>
                Projects
            </div>
            <Carousel />
        </div>
    );
}

export default Projects;
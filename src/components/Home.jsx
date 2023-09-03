import React from "react";
import profile from "../images/profile.png";

const Home = () => {

    return (
        <div id="Home" className="w-full color-3 flex flex-col md:flex-row items-center md:items-start">
            <div className='flex flex-col w-100 md:w-6/12 items-end order-last md:order-first'>
                <div className="md:pl-4 md:mt-20 lg:mt-40">
                    <p className="text-white text-md md:text-2xl lg:text-4xl mt-5 md:mt-0">
                        Hi, my name is...
                    </p>
                    <p className="font-bold text-2xl md:text-6xl lg:text-9xl">
                        Jim Christian <br className="hidden md:block"/> Edullantes
                    </p>
                    <p className="text-white text-xl md:text-xl lg:text-3xl">
                        Software Engineer
                    </p>
                    <p className="text-sm text-white mt-3">
                        I build things for the web that help businesses achieve its goal. <br /> 
                        Create and build solutions that will satisfy your needs.  <br /> 
                        Provided solutions and applications are well planned and analyzed.
                    </p>
                </div>
            </div>
            <div className='w-100 w-7/12 md:w-6/12 order-first md:order-last'>
                <img className="w-10/12" src={profile} alt="profile"/>
            </div>
        </div>
    );
}

export default Home;
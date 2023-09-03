import React from "react";
import profile from "../images/profile.png";

const Home = () => {

    return (
        <div id="Home" className="w-full color-3 flex">
            <div className='mx-auto md:mt-20 lg:mt-40 w-6/12 md:pl-40 lg:pl-64'>
                <p className="text-white md:text-3xl lg:text-4xl">
                    Hi, my name is...
                </p>
                <p className="font-bold md:text-7xl lg:text-9xl">
                    Jim Christian <br/> Edullantes
                </p>
                <p className="text-white md:text-2xl lg:text-3xl">
                    Software Engineer
                </p>
                <p className="text-xl text-white mt-3">
                    I build things for the web that help businesses achieve its goal. <br /> 
                    Create and build solutions that will satisfy your needs.  <br /> 
                    Provided solutions and applications are well planned and analyzed.
                </p>
            </div>
            <div className='mx-auto w-6/12'>
                <img className="w-10/12" src={profile} alt="profile"/>
            </div>
        </div>
    );
}

export default Home;
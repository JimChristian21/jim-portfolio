import React from "react";

const Navigation = () => {

    const classes = 'mx-5 p-2 color-3 border-b-2 border-color-3 hover:bg-slate-700 rounded-t-md font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500';

    return (
        <div className="w-full h-14 flex justify-center items-center text-2xl my-4 sticky top-0">
            <a href="#Home" className={classes}>Home</a>
            <a href="#Projects" className={classes}>Projects</a>
            <a href="#AboutMe" className={classes}>About Me</a>
            <a href="#Contacts" className={classes}>Contacts</a>
        </div>
    );
}

export default Navigation;
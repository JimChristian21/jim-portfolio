import React from "react";

const Navigation = () => {

    const classes = 'mx-5 p-2 color-3 border-b-2 border-color-3 hover:bg-slate-700 hover:rounded-t-md font-medium';

    return (
        <div className="w-full h-14 flex justify-center items-center text-2xl mt-5">
            <a href="#Home" className={classes}>Home</a>
            <a href="#Projects" className={classes}>Projects</a>
            <a href="#AboutMe" className={classes}>About Me</a>
            <a href="#Contacts" className={classes}>Contacts</a>
        </div>
    );
}

export default Navigation;
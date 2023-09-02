import React from "react";

const Navigation = () => {

    return (
        <div className="w-full h-14 flex justify-center items-center text-2xl mt-5">
            <a href="#Home" className="mx-5 p-2 color-3 border-b-2 border-color-3 hover:bg-slate-700 hover:rounded-t-md">Home</a>
            <a href="#Projects" className="mx-5 p-2 color-3 border-b-2 border-color-3 hover:bg-slate-700 hover:rounded-t-md">Projects</a>
            <a href="#AboutMe" className="mx-5 p-2 color-3 border-b-2 border-color-3 hover:bg-slate-700 hover:rounded-t-md">About Me</a>
            <a href="#Contacts" className="mx-5 p-2 color-3 border-b-2 border-color-3 hover:bg-slate-700 hover:rounded-t-md">Contacts</a>
        </div>
    );
}

export default Navigation;
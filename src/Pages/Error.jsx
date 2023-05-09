import React from 'react';
import ErrorImage from '../assets/404.svg'

const Error = () => {
    return (
        <section className="relative h-screen overflow-hidden bg-white">
            <div className="container relative z-10 flex items-center px-6 py-20 mx-auto md:px-12">
                <div className="container relative flex flex-col items-center justify-between px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center w-full mb-16 space-x-12 md:flex-row md:mb-8">
                        <h1 className="text-6xl font-thin text-center text-gray-800">
                            GOT LOST ?
                        </h1>
                        <button className="w-32 px-3 py-2 text-2xl font-light uppercase transition duration-200 ease-in border-b border-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none">
                            Help Me
                        </button>
                    </div>
                    <div className="relative block w-full mx-auto mt-6 md:mt-0">
                        <img src={ ErrorImage } alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Error;

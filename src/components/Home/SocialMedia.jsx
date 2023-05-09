import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';

import coffeeImage from '../../assets/cups/Rectangle 10.png'

const SocialMedia = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center'>
                <h3 className='text-base font-poppins'>Follow Us Now</h3>
                <h2 className='lg:text-5xl md:text-4xl text-3xl py-2'><strong>Our Popular Products</strong></h2>
            </div>
            <div className='lg:w-9/12 w-full mx-auto my-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
                { [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                    return (<div key={ index } className="group relative block bg-black rounded-lg py-20">
                        <img
                            alt="Developer"
                            src={ coffeeImage }

                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-lg"
                        />
                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 duration-300 text-center">
                                <button className='btn btn-primary btn-lg'>
                                    <AiFillInstagram />
                                    <span>Follow Us</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default SocialMedia;

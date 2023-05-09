import React from 'react';
import heroImage from '../../assets/more/3.png'

const Hero = () => {
    return (
        <div className="hero min-h-[85vh]" style={ { backgroundImage: `url(${ heroImage })` } }>
            <div className="grid lg:grid-cols-2 mx-10 text-white">
                <div></div>
                <div>
                    <h1 className="mb-5 lg:text-5xl text-4xl font-bold">Would you like a cup of Delicious Coffee?</h1>
                    <p className="mb-5">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn btn-primary rounded-none">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

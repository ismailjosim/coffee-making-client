import React from 'react';
import bgImage from '../assets/more/15.jpg'
import logo from '../assets/more/logo1.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const styles = {
        backgroundImage: `url(${ bgImage })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    }



    return (
        <header>
            <div style={ styles } className='h-40'>
                <div>
                    <Link className='flex items-center justify-center' to={ '/' }>
                        <img src={ logo } width={ 75 } alt="" />
                        <h2 className='title text-white lg:text-6xl md:text-4xl text-3xl'>Espresso Emporium</h2>
                    </Link>
                </div>
                <div className='flex justify-center items-end gap-5'>
                    <Link className='text-white text-2xl' to={ '/' }>Home</Link>
                    <Link className='text-white text-2xl' to={ '/orders' }>Orders</Link>
                </div>
            </div>


        </header>
    );
};

export default Header;

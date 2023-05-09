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
        <Link to={ '/' } style={ styles } className='h-28 flex items-center justify-center'>
            <>
                <img src={ logo } width={ 75 } alt="" />
                <h2 className='title text-white lg:text-6xl md:text-4xl text-3xl'>Espresso Emporium</h2>
            </>
        </Link>
    );
};

export default Header;

import React from 'react';

import icon01 from '../../assets/icons/1.png'
import icon02 from '../../assets/icons/2.png'
import icon03 from '../../assets/icons/3.png'
import icon04 from '../../assets/icons/4.png'

const data = [
    {
        icon: icon01,
        title: "Awesome Aroma",
        description: "You will definitely be a fan of the design & aroma of your coffee"
    },
    {
        icon: icon02,
        title: "High Quality",
        description: "You will definitely be a fan of the design & aroma of your coffee"
    },
    {
        icon: icon03,
        title: "Pure Grades",
        description: "The coffee is made of the green coffee beans which you will love"
    },
    {
        icon: icon04,
        title: "Proper Roasting",
        description: "Your coffee is brewed by first roasting the green coffee beans"
    }
]


const Categories = () => {
    return (
        <div className='bg-secondary'>
            <div className="w-11/12 mx-auto py-20 grid lg:grid-cols-4 grid-cols-2 gap-5">
                {
                    data.map((item, idx) => {
                        return (
                            <div key={ idx }>
                                <img width={ 70 } src={ item.icon } alt="" />
                                <h3 className='md:text-3xl lg:text-4xl text-2xl my-2'>{ item.title }</h3>
                                <p>{ item.description }</p>
                            </div>
                        )
                    })

                }
            </div>

        </div>
    );
};

export default Categories;

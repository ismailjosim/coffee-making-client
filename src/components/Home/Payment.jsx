import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    const [singleItem, setSingleItem] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${ id }`)
            .then(res => res.json())
            .then(data => {
                setSingleItem(data.orders);
            })

    }, [])

    const { name } = singleItem || {}

    return (
        <div className='text-center text-2xl  my-5'>
            Payment For : { name }
        </div>
    );
};

export default Payment;

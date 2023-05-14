import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../utils/Loading'
import CoffeeCard from './CoffeeCard';
import Error from '../../utils/Error';

const PopularProducts = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [products, setProducts] = useState([]);
    const [updatedProducts, setUpdatedProducts] = useState(products)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const url = 'https://coffee-making-server.vercel.app/products';
                const res = await fetch(url);
                const data = await res.json();
                setProducts(data.products);
                setUpdatedProducts(data.products);
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        };
        fetchData();
    }, []);


    // Show Loading When data is not Ready
    if (loading) return <Loading />

    if (error) return <Error message={ error } />



    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='text-center'>
                <h3 className='text-2xl'>--Sip & Savor--</h3>
                <h2 className='lg:text-5xl md:text-4xl text-3xl py-2'>Our Popular Products</h2>
                <Link className='btn btn-primary btn-sm border-accent border-2' to={ '/addproduct' }>
                    <span>Add Coffee</span>
                </Link>
            </div>
            <div className='lg:w-9/12 mx-auto grid md:grid-cols-2 grid-cols-1 my-10 lg:gap-10 gap-5 category-card'>
                { updatedProducts.length > 0 ?
                    updatedProducts.map(item => <CoffeeCard
                        key={ item._id }
                        item={ item }
                        updatedProducts={ updatedProducts }
                        setUpdatedProducts={ setUpdatedProducts }
                    />)
                    : <h3>No Data Found!</h3>
                }
            </div>

        </div>
    );
};

export default PopularProducts;

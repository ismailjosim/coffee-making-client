import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import Loading from '../../utils/Loading'

const PopularProducts = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const url = 'http://localhost:5000/products';
            const res = await fetch(url);
            const data = await res.json();
            setLoading(false)
            if (data.success === true) {
                setError('')
                setProducts(data.products);
                return
            } else {
                return setError("No Data Found ⚠️")
            }
        }
        fetchData()
    }, [])

    // Show Loading When data is not Ready
    if (loading) return <Loading />



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
                { products.map(item => {
                    const { category, chef, details, name, photo, supplier, taste, _id } = item;

                    return (
                        <div key={ _id } className="card card-side bg-neutral shadow-md rounded-md">
                            <figure><img src={ photo } alt="Movie" /></figure>
                            <div className="card-body font-poppins">
                                <h2 className="flex items-center justify-between">
                                    <span className='font-normal flex gap-3'>
                                        <strong>Name:</strong>
                                        { name }
                                    </span>
                                    <span className='btn btn-primary btn-sm w-10 h-10 rounded-md'><AiFillEye className='text-2xl' /></span>
                                </h2>
                                <p className="flex items-center justify-between">
                                    <span className='font-normal flex gap-3'>
                                        <strong>Chef:</strong>
                                        { chef }
                                    </span>
                                    <span className='btn btn-accent text-white btn-sm w-10 h-10 rounded-md'><MdEdit className='text-2xl' /></span>
                                </p>
                                <p className="flex items-center justify-between">
                                    <span className='font-normal flex gap-3'>
                                        <strong>Price:</strong>
                                        890 Taka
                                    </span>
                                    <span className='btn btn-error text-white btn-sm w-10 h-10 rounded-md'><FaTrash className='text-2xl' /></span>
                                </p>
                            </div>
                        </div>
                    )
                }) }
            </div>

        </div>
    );
};

export default PopularProducts;

import React from 'react';
import { AiFillEye } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom';
const CoffeeCard = ({ item, updatedProducts, setUpdatedProducts }) => {
    const { chef, name, photo, _id } = item;

    const handleDelete = id => {
        // eslint-disable-next-line no-restricted-globals
        const confirmed = confirm('are you Sure!');
        if (confirmed) {
            const url = `http://localhost:5000/products/${ id }`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = updatedProducts.filter(pd => pd._d !== id);
                        setUpdatedProducts(remaining)
                    }
                })
        }
    }

    return (
        <div key={ _id } className="card card-side bg-neutral shadow-md rounded-md flex flex-col lg:text-row md:flex-row">
            <div style={ { position: 'relative', overflow: 'hidden' } }>
                <figure style={ { margin: 0 } }>
                    <img className='w-full h-full object-cover' src={ photo } alt={ name } />
                </figure>
            </div>
            <div className="card-body font-poppins" style={ { display: 'flex', flexDirection: 'column', flexGrow: 1 } }>
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
                    <Link to={ `/updateproduct/${ _id }` } className='btn btn-accent text-white btn-sm w-10 h-10 rounded-md'><MdEdit className='text-2xl' /></Link>
                </p>
                <p className="flex items-center justify-between">
                    <span className='font-normal flex gap-3'>
                        <strong>Price:</strong>
                        890 Taka
                    </span>
                    <button onClick={ () => handleDelete(_id) } className='btn btn-error text-white btn-sm w-10 h-10 rounded-md'><FaTrash className='text-2xl' /></button>
                </p>
            </div>
        </div>


    );
};

export default CoffeeCard;

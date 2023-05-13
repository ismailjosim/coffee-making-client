import React, { useEffect, useState } from 'react';
import bgImage from '../assets/more/11.png'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { toast } from 'react-toastify';

const styles = {
    backgroundImage: `url(${ bgImage })`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
}
const UpdateCoffee = () => {
    const { id: coffeeId } = useParams();
    const [loading, setLoading] = useState(false);
    const [singleProduct, setSingleProduct] = useState(null) || {}

    useEffect(() => {
        const url = `http://localhost:5000/products/${ coffeeId }`
        const fetchData = async () => {
            setLoading(true)
            const res = await fetch(url);
            const data = await res.json();
            if (data) {
                setLoading(false)
                setSingleProduct(data.product);
            }
        }
        fetchData()
    }, [coffeeId, setSingleProduct])

    const { category, chef, details, price, name, photo, taste } = singleProduct || {};


    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const coffeeInfo = {
            name: form.name.value,
            chef: form.chef.value,
            price: form.price.value,
            taste: form.taste.value,
            category: form.category.value,
            details: form.details.value,
            photo: form.photo.value
        }

        const url = `http://localhost:5000/products/${ coffeeId }`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.product.modifiedCount > 0) {
                    setLoading(false)
                    toast.success('Coffee Updated Successfully 🎉', { autoClose: 1000 })
                }
            })
    }


    return (
        <section className='w-11/12 mx-auto py-10' style={ styles }>
            <Link to={ '/' } className='btn btn-link no-underline capitalize text-2xl text-accent'>
                <AiOutlineArrowLeft />
                <span className='ml-2'>Back to home</span>
            </Link>
            <div className='bg-[#F4F3F0] p-10 rounded-md shadow-md'>
                <div className='text-center'>
                    <h3 className='text-3xl mb-5'><strong>Update Coffee Info</strong></h3>
                    <p className='font-poppins text-xs'>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <form action="" onSubmit={ handleUpdateCoffee } className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Name</label>
                        <input defaultValue={ name } type="text" placeholder="Enter Coffee Name" name='name' className="input input-bordered input-primary w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Chef</label>
                        <input defaultValue={ chef } type="text" placeholder="Enter Chef Name" name='chef' className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">price</label>
                        <input type="number" defaultValue={ price } name='price' placeholder="Enter Coffee price" className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Taste</label>
                        <input type="text" defaultValue={ taste } name='taste' placeholder="Enter Coffee Taste" className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Category</label>
                        <input type="text" defaultValue={ category } name='category' placeholder="Enter Category Name" className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Photo</label>
                        <input type="text" name='photo' defaultValue={ photo } className="file-input file-input-bordered file-input-primary w-full" />
                    </div>
                    <div className="form-control w-full md:col-span-2">
                        <label className="label font-poppins font-semibold">Details</label>
                        <textarea defaultValue={ details } className="textarea textarea-primary h-40" name='details' placeholder="Details" style={ { resize: 'none', overflow: 'auto' } }></textarea>
                    </div>

                    <div className="form-control w-full mt-10 md:col-span-2 md:flex justify-end items-end">
                        <button disabled={ loading } type='submit' className='btn btn-primary'>Add Coffee</button>
                    </div>
                </form>


            </div>

        </section>
    );
};

export default UpdateCoffee;

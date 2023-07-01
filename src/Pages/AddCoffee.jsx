import React, { useState } from 'react';
import bgImage from '../assets/more/11.png'
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { toast } from 'react-toastify';

const styles = {
    backgroundImage: `url(${ bgImage })`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
}

const AddCoffee = () => {
    const [loading, setLoading] = useState(false)
    const imageHostKey = process.env.REACT_APP_imgbb_key

    const handleAddCoffee = event => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const photo = form.photo.files[0];
        const url = `https://api.imgbb.com/1/upload?key=${ imageHostKey }`;
        const formData = new FormData(); // Create a new FormData object
        formData.append('image', photo); // Append the photo file to the FormData object
        fetch(url, {
            method: 'POST', body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const coffeeInfo = {
                        name: form.name.value,
                        chef: form.chef.value,
                        price: form.price.value,
                        taste: form.taste.value,
                        category: form.category.value,
                        details: form.details.value,
                        photo: imgData?.data?.url
                    }
                    // console.log(coffeeInfo);
                    fetch("http://localhost:5000/products", {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(coffeeInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message.acknowledged) {
                                toast.success('New Coffee Item Added Successfully 🎉', { autoClose: 1000 })
                                setLoading(false)
                                form.reset()
                            }
                        })
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
                    <h3 className='text-3xl mb-5'><strong>Add New Coffee</strong></h3>
                    <p className='font-poppins text-xs'>
                        It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                    </p>
                </div>
                <form action="" onSubmit={ handleAddCoffee } className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Name</label>
                        <input type="text" placeholder="Enter Coffee Name" name='name' className="input input-bordered input-primary w-full" />
                    </div>
                    { /*<InputField type={ "text" } name={ "name" } placeholderText={ "Enter Coffee Name" } />*/ }
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Chef</label>
                        <input type="text" placeholder="Enter Chef Name" name='chef' className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">price</label>
                        <input type="number" name='price' placeholder="Enter Coffee price" className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Taste</label>
                        <input type="text" name='taste' placeholder="Enter Coffee Taste" className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Category</label>
                        <input type="text" name='category' placeholder="Enter Category Name" className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Photo</label>
                        <input type="file" name='photo' className="file-input file-input-bordered file-input-primary w-full" />
                    </div>
                    <div className="form-control w-full md:col-span-2">
                        <label className="label font-poppins font-semibold">Details</label>
                        <textarea className="textarea textarea-primary h-40" name='details' placeholder="Details" style={ { resize: 'none', overflow: 'auto' } }></textarea>
                    </div>

                    <div className="form-control w-full mt-10 md:col-span-2 md:flex justify-end items-end">
                        <button disabled={ loading } type='submit' className='btn btn-primary'>Add Coffee</button>
                    </div>
                </form>


            </div>

        </section>
    );
};

export default AddCoffee;

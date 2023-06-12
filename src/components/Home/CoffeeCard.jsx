import React from 'react';
import { AiFillEye } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
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




    // open specific data for modal
    const handleModal = (event, item) => {
        event.preventDefault()
        const comment = event.target.comments.value;

        const orderData = {
            name: item.name,
            category: item.category,
            photo: item.photo,
            price: item.price,
            chef: item.price,
            serveStatus: false,
            customerComment: comment
        }
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message.acknowledged) {
                    toast.success('Your Is Placed Successfully 🎉', { autoClose: 1000 })
                    const modalCheckbox = document.getElementById(`my_modal_${ _id }`);
                    const textarea = event.target.comments;
                    modalCheckbox.checked = false;
                    textarea.value = '';
                }
            })

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

                    <label htmlFor={ `my_modal_${ _id }` }><span className='btn btn-primary btn-sm w-10 h-10 rounded-md'><AiFillEye className='text-2xl' /></span></label>
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
            {/* The button to open modal */ }
            {/* Put this part before </body> tag */ }
            <input type="checkbox" id={ `my_modal_${ _id }` } className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <form onSubmit={ (event) => handleModal(event, item) } className="card w-full image-full opacity-100">
                        <figure><img src={ photo } alt="Shoes" /></figure>
                        <div className="card-body justify-center
                        items-center">
                            <h3 className="font-bold text-4xl">{ name }</h3>
                            <span className='font-normal flex gap-3 text-3xl'>
                                <strong>Chef:</strong>
                                { chef }
                            </span>
                            <textarea className="textarea textarea-primary w-full" name='comments' placeholder="Add custom comment"></textarea>
                            <div className="modal-action flex-col gap-5">
                                <button type='submit' className='btn btn-primary'>Order Now</button>
                                <label htmlFor={ `my_modal_${ _id }` } className="btn">Close!</label>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    );
};

export default CoffeeCard;

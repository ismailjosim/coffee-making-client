import React, { useEffect, useState } from 'react';
import Loading from '../utils/Loading';
import Error from '../utils/Error';
import { Link } from 'react-router-dom';
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
const Orders = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState(products)

    // sort data by price:
    const [sorted, setSorted] = useState('acc');

    const handleSort = () => {
        if (sorted === 'acc') {
            setSorted("dec")
        } else {
            setSorted("acc")
        }
    }


    useEffect(() => {
        const url = `http://localhost:5000/sort/${ sorted }`
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const data = await res.json();
                setProducts(data);
                setOrder(data);
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        };
        fetchData();


    }, [sorted])


    if (loading) <Loading />
    if (error) <Error />







    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-between items-center my-5'>
                <h3 className='text-5xl'>All Orders Goes Here</h3>
                <h3 className='text-3xl'>Total Orders: { order && order.length }</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */ }
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>category</th>
                            <th>Comment</th>
                            <th>
                                <div className='flex items-center gap-5'>
                                    <span>price</span>
                                    <button onClick={ handleSort } >
                                        {
                                            sorted === "acc" ?
                                                <BiSolidUpArrow className='transition-all duration-1000 ease-in-out' size={ 16 } />
                                                :
                                                <BiSolidDownArrow className='transition-all duration-1000 ease-in-out' size={ 16 } />
                                        }
                                    </button>
                                </div>
                            </th>
                            <th>Served</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */ }
                        {
                            order && order.map(singleItem => {
                                const { name, category, customerComment, price, photo, _id, serveStatus } = singleItem || {}
                                return (
                                    <tr key={ _id }>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={ photo } alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            { name }
                                        </td>
                                        <td>{ category }</td>
                                        <td>{ customerComment }</td>
                                        <td>{ price }</td>
                                        <td>{ serveStatus ?
                                            <div className='badge badge-primary bg-green-600 text-white font-poppins'>Served</div> :
                                            <div className='badge badge-primary bg-red-600 text-white font-poppins'>Pending</div>
                                        }</td>
                                        <th>
                                            <Link to={ `/payment/${ _id }` } className="btn btn-primary btn-xs">Place Order</Link>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;

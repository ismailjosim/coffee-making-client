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

    }, [id])

    const {
        name,
        category,
        photo,
        price,
        customerComment } = singleItem || {}

    return (


        <section>
            <h1 className="text-3xl text-center my-5">Checkout</h1>

            <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-50 py-12 md:py-24">
                    <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                        <div className="flex items-center gap-4">
                            <h2 className="font-medium text-gray-900 text-3xl">{ name }</h2>
                        </div>

                        <div>
                            <p className="text-2xl font-medium tracking-tight text-gray-900">
                                $ { price }
                            </p>

                            <p className="mt-1 text-sm text-gray-600">{ customerComment }</p>
                        </div>

                        <div>
                            <div className="flow-root">
                                <ul className="-my-4 divide-y divide-gray-100">
                                    <li className="flex items-center gap-4 py-4">
                                        <img
                                            src={ photo }
                                            alt=""
                                            className="h-36 w-36 rounded object-cover"
                                        />

                                        <div>
                                            <h3 className="text-sm text-gray-900">Order Name: { name }</h3>
                                            <div>No Of order: 1</div>
                                            <div> category: ${ category }</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <form className="grid grid-cols-6 gap-4">
                            <fieldset className="col-span-6">
                                <legend className="block text-sm font-medium text-gray-700">
                                    Card Details
                                </legend>

                                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                    <div>
                                        <label htmlFor="CardNumber" className="sr-only"> Card Number </label>

                                        <input
                                            type="text"
                                            id="CardNumber"
                                            placeholder="Card Number"
                                            className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                                        />
                                    </div>

                                    <div className="flex gap-5">
                                        <div className="flex-1">
                                            <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>

                                            <input
                                                type="text"
                                                id="CardExpiry"
                                                placeholder="Expiry Date"
                                                className="w-full input input-primary"
                                            />
                                        </div>

                                        <div className="-ms-px flex-1">
                                            <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                                            <input
                                                type="text"
                                                id="CardCVC"
                                                placeholder="CVC"
                                                className="w-full input input-primary"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="col-span-6">
                                <button
                                    className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Payment;

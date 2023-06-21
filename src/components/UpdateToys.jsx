import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MotionAnimate } from 'react-motion-animate';

const UpdateToys = () => {

    const { users } = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState('toys');

    const loaderToy = useLoaderData()
    console.log(loaderToy);

    const { Name, Picture, _id } = loaderToy

    const handleUpdate = (event) => {
        event.preventDefault()

        const form = event.target
        const quantity = form.quantity.value
        const Price = parseInt(form.price.value)
        const Rating = form.ratings.value
        const description = form.description.value

        const updateToy = { quantity, Price, Rating, description }
        console.log(updateToy);

        fetch(`https://toy-marketplace-server-eta-three.vercel.app/updateToys/${_id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'Your Toys Update Successfully',
                        'success'
                    )
                }
            })
    }

    return (
        <MotionAnimate animation='fadeInUp' reset={true}>
            <div className=" bg-red-50 md:p-24 p-6">
                <h2 className="text-5xl text-center font-bold">Update Toys</h2>
                <p className="text-gray-400 text-center my-8">A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, <br />
                    a stuffed animal, or a set of blocks. Some toys are specifically designed for play, <br /> like a small wooden train set or a baby's shape sorter.</p>
                <form className="md:mx-48" onSubmit={handleUpdate}>
                    {/* form coffee name and quantity row */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toys Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" defaultValue={Name} name="name" placeholder="Toys Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-6">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier and Taste row */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" defaultValue={users.displayName} name="seller" placeholder="Seller Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-6">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={users.email} name="sellerEmail" placeholder="Seller Email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub Category</span>
                            </label>
                            <label className="input-group ">
                                {/* <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" /> */}
                                <input className='p-3 w-full border' type="text" name='CategoryName' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} />
                                <select value={selectedOption} className='border' onChange={(e) => setSelectedOption(e.target.value)}>
                                    <option value="teddy">Teddy Bear</option>
                                    <option value="horse">Horse</option>
                                    <option value="dogs">Dogs</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* rating and description */}
                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" name="ratings" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:ml-6">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* form Photo url row */}
                    <div className="mb-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group ">
                                <input type="text" defaultValue={Picture} name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Toys" className="btn btn-block" />
                </form>
            </div>
        </MotionAnimate>
    );
};

export default UpdateToys;
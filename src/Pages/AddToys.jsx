import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
const AddToys = () => {
    const [selectedOption, setSelectedOption] = useState('toys');

    const {users} = useContext(AuthContext)

    const handleAddTeddy = (event) => {
        event.preventDefault()

        const form = event.target
        const Name = form.name.value
        const quantity = form.quantity.value
        const SellerName = form.seller.value
        const sellerMail = form.sellerEmail.value
        const CategoryName = form.CategoryName.value
        const Price = parseInt(form.price.value)
        const Rating = form.ratings.value
        const description = form.description.value
        const Picture = form.photo.value

        const product = { Name, Picture, description, Rating, quantity, SellerName, sellerMail, CategoryName, Price}

        console.log(product);

        fetch('https://toy-marketplace-server-eta-three.vercel.app/teddys',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire(
                    'Good job!',
                    'You New Teddy Added Successfully',
                    'success'
                  )
            }
        })
    }

    return (
        <div className=" bg-red-50 md:p-24 p-6">
            <h2 className="text-5xl text-center font-bold">Add New Toys</h2>
            <p className="text-gray-400 text-center my-8">A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, <br />
                a stuffed animal, or a set of blocks. Some toys are specifically designed for play, <br /> like a small wooden train set or a baby's shape sorter.</p>
            <form className="md:mx-48" onSubmit={handleAddTeddy}>
                {/* form coffee name and quantity row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toys Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="name" placeholder="Toys Name" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default AddToys;
import React from 'react';

const UpdateToys = () => {
    return (
        <div className=" bg-red-50 md:p-24 p-6">
            <h2 className="text-5xl text-center font-bold">Update Toys</h2>
            <p className="text-gray-400 text-center my-8">A toy is an object that's made for a child to play with. Your favorite childhood toy might have been a dollhouse, <br />
                a stuffed animal, or a set of blocks. Some toys are specifically designed for play, <br /> like a small wooden train set or a baby's shape sorter.</p>
            <form className="md:mx-48" onSubmit={handleAddTeddy}>
                {/* form coffee name and quantity row */}
                <div className="md:flex mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text">Price</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-6">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Detail Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default UpdateToys;
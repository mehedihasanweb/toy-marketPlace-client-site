import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const SingleItem = ({ data, handleViewDetails }) => {

   
    const { Name, Picture, Price, Rating, _id } = data
    return (
        <div className='md:flex justify-center gap-3 mb-6'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={Picture} alt="Shoes" className="rounded-xl h-72" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{Name}</h2>
                    <p>Price: ${Price}</p>
                    <p>Rating: {Rating}</p>
                    <div className="card-actions">
                        <Link to={`/details/${_id}`}><button onClick={() => handleViewDetails(_id)} className="btn btn-outline btn-error">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
// import React, { useContext } from 'react';
// import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { MotionAnimate } from 'react-motion-animate';

const SingleItem = ({ data }) => {

   
    const { Name, Picture, Price, Rating, _id } = data
    return (
        <MotionAnimate animation='fadeInUp' reset={true}>
            <div className='md:flex w-full justify-center gap-3 mb-6'>
            <div className="card w-full mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={Picture} alt="Shoes" className="rounded-xl h-72" />
                </figure>
                <div className="card-body w-full items-center text-center">
                    <h2 className="card-title">{Name}</h2>
                    <p>Price: ${Price}</p>
                    <p>Rating: {Rating}</p>
                    <div className="card-actions">
                        <Link to={`/teddys/${_id}`}><button className="btn btn-outline btn-error">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </MotionAnimate>
    );
};

export default SingleItem;
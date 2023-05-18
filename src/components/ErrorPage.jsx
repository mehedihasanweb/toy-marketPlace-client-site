import React from 'react';

import error from '../assets/error.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className='flex mx-auto mt-40' src={error} alt="" />
            <div className='flex justify-center'>
                <Link to='/'><button className='btn btn-outline btn-error '>Back TO Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
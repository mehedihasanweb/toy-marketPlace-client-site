import React from 'react';

import error from '../assets/error.png'

const ErrorPage = () => {
    return (
        <div>
            <img className='flex mx-auto mt-40' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;
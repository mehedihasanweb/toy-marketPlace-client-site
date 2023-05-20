import React, { useEffect, useState } from 'react';

const Latest = () => {
    const [latest, setLatest] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/latest')
            .then(res => res.json())
            .then(data => setLatest(data))
    }, [])
    console.log(latest);

    return (
        <div className='py-8'>
            <h2 className='text-5xl text-center font-semibold'>Latest News</h2>
            <h2 className='text-xl pt-4 text-orange-300 text-center font-semibold'>OUR NEWS & EVENTS</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    latest.map(newItem => (
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={newItem?.picture} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <div className='flex justify-end gap-4'>
                                    <h2>{newItem.team}</h2>
                                    <h2>{newItem.date}</h2>
                                </div>
                                <p>{newItem?.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Latest;
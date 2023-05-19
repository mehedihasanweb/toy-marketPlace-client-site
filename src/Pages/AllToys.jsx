import React, { useEffect, useState } from 'react';
import SingleItem from '../components/SingleItem';

const AllToys = () => {
    const [allData, setAlldata] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/teddys')
            .then(res => res.json())
            .then(data => setAlldata(data))
    }, [])


    const handleViewDetails = (id) => {

        if (!users) {
            return toast("“You have to log in first to view details”");
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                allData.map(data => <SingleItem key={data._id} handleViewDetails={handleViewDetails} data={data} />)
            }
        </div>
    );
};

export default AllToys;
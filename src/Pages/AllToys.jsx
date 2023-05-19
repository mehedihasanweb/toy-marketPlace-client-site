import React, {  useEffect, useState } from 'react';
import SingleItem from '../components/SingleItem';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllToys = () => {
    const [allData, setAlldata] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/teddys')
            .then(res => res.json())
            .then(data => setAlldata(data))
    }, [])


    const handleViewDetails = () => {

        if (!users) {
            return toast("“You have to log in first to view details”");
        }
    }
    // console.log(allData);

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Seller</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((data, index) => (
                        
                        <tr>
                            <th>{index + 1}</th>
                            <td>{data.Name}</td>
                            <td>{data.SellerName}</td>
                            <td>{data.SubCategoryName}</td>
                            <td>{data.Price}</td>
                            <td>{data.quantity}</td>
                            <td><Link to={`/details/${data._id}`}><button onClick={handleViewDetails} className='btn btn-outline btn-error'>View Details</button></Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
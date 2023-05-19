import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { users } = useContext(AuthContext)
    console.log(users);

    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/teddys/${users.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleUpdate = () =>{
        console.log('click');
    }

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
                        <th>Update</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map((toy, index) => (

                        <tr>
                            <th>{index + 1}</th>
                            <td>{toy.Name}</td>
                            <td>{toy.SellerName}</td>
                            <td>{toy.SubCategoryName}</td>
                            <td>{toy.Price}</td>
                            <td>{toy.quantity}</td>
                            <td><Link to='/addToys'><button onClick={handleUpdate} className='btn btn-outline btn-error'>Update</button></Link></td>
                            <td><button className='btn btn-outline btn-error'>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default MyToys;
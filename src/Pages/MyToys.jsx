import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MotionAnimate } from 'react-motion-animate';

const MyToys = () => {
    const { users } = useContext(AuthContext)
    // console.log(users);

    const [toys, setToys] = useState([])

    const handleDelete = (id) => {
        console.log(id);


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-marketplace-server-eta-three.vercel.app/teddys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id)
                            setToys(remaining)
                        }
                    })
            }
        })



    }
    const [asc, setAsc] = useState(true)

    useEffect(() => {
        fetch(`https://toy-marketplace-server-eta-three.vercel.app/bookings?sellerMail=${users.email}&sort=${asc ? 'asc' : 'des'}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [asc])
    // https://toy-marketplace-server-eta-three.vercel.app

    return (
        <MotionAnimate animation='fadeInUp' reset={true}>
            <div className="overflow-x-auto">
            <button onClick={()=>setAsc(!asc)} className='flex mx-auto mb-3 btn btn-primary'>{asc ? 'Asending' : 'desending'}</button>
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

                        <tr key={toy._id}>
                            <th>{index + 1}</th>
                            <td>{toy.Name}</td>
                            <td>{toy.SellerName}</td>
                            <td>{toy.SubCategoryName}</td>
                            <td>{toy.Price}</td>
                            <td>{toy.quantity}</td>
                            <td><Link to={`/updateToys/${toy._id}`}><button className='btn btn-outline btn-error'>Update</button></Link></td>
                            <td><button onClick={() => handleDelete(toy._id)} className='btn btn-outline btn-error'>Delete</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
        </MotionAnimate>
    );
};

export default MyToys;
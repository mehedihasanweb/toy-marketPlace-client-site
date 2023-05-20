import React, { useEffect, useState } from 'react';
import SingleItem from '../components/SingleItem';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AllToys = () => {
    const [allData, setAlldata] = useState([])
    // const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetch('https://toy-marketplace-server-eta-three.vercel.app/teddys')
            .then(res => res.json())
            .then(data => setAlldata(data))
    }, [])


    const handleViewDetails = () => {
        if (!users) {
            return toast("“You have to log in first to view details”");
        }
    }

    // const filteredItems = allData.filter(item => {
    //     if (selectedCategory && item.CategoryName !== selectedCategory) {
    //         return false;
    //     }

    //     return item.CategoryName.toLowerCase().includes(searchText.toLowerCase());
    // });

    // console.log(searchText);


    const [searchQuery, setSearchQuery] = useState('');

    // const handleSearch = () => {
    //     fetch(`https://toy-marketplace-server-eta-three.vercel.app/teddys/${searchText}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setJobs(data);
    //         });
    // };

    const filteredToys = allData.filter(toy => {
        return toy.Name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const limit = 20;
    const limitedToys = filteredToys.slice(0, limit);
  

    // onClick={handleSearch}

    return (
        <div className="overflow-x-auto">
            <h1 className='text-3xl text-center font-semibold'>All Toys</h1>
            <div className='flex my-6 justify-center'>
                <input type="text" value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} className='p-1 mr-2 border-2 rounded-lg pl-4' placeholder='Search' />
                <button className='btn btn-outline btn-error'>Search</button>
            </div>
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
                    {limitedToys.map((data, index) => (

                        <tr key={data._id}>
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
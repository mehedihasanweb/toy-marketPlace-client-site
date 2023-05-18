import React, { useContext } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import teddy from '../assets/teddy.jpg'
import teddy2 from '../assets/teddy2.jpg'
import horse from '../assets/horse.jpeg'
import horse2 from '../assets/horse2.jpeg'
import dogs from '../assets/dogs.jpeg'
import dogs2 from '../assets/dogs2.jpeg'
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const TabsCategory = () => {
    const { users } = useContext(AuthContext)

    const handleDetails = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }
    const handleDetails1 = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }
    const handleDetails2 = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }
    const handleDetails3 = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }
    const handleDetails4 = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }
    const handleDetails5 = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }
    const handleDetails6 = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }
    const handleDetails7 = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }
    const handleDetails8 = () => {
        if (!users) {
            toast("“You have to log in first to view details”");
            return <Navigate to='/login' />
        }
        else {
            <Navigate />
        }
    }

    return (
        <div>
            <div className='text-center'>
                <h2 className='font-bold text-teal-300 text-xl'>Out Products</h2>
                <h2 className='text-3xl pb-4 font-bold '>Shop By Category</h2>
                {/* <Category /> */}
            </div>
            <Tabs className='text-center'>
                <TabList>
                    <Tab>Teddy Bear</Tab>
                    <Tab>Horse</Tab>
                    <Tab>dogs</Tab>
                </TabList>

                <TabPanel>
                    <div className='md:flex justify-center gap-3 mb-6'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={teddy} alt="Shoes" className="rounded-xl h-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Cuddly Brown Bear</h2>
                                <p>Price: $29.99</p>
                                <p>Rating: 4.5</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails} className="btn btn-outline btn-error">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={teddy2} alt="Shoes" className="rounded-xl h-72 " />
                            </figure>
                            <div className="card-body items-center text-center ">
                                <h2 className="card-title">Fluffy White Bear</h2>
                                <p className='p-0 m-0'>Price: $24.99</p>
                                <p className='p-0 m-0'>Rating: 4.2</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails1} className="btn btn-outline btn-error">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={teddy} alt="Shoes" className="rounded-xl h-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Cuddly Brown Bear</h2>
                                <p>Price: $29.99</p>
                                <p>Rating: 4.5</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails2} className="btn btn-outline btn-error">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:flex justify-center gap-3 mb-6'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={horse} alt="Shoes" className="rounded-xl h-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Plush Brown Horse</h2>
                                <p>Price: $19.99</p>
                                <p>Rating: 4.5</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails3} className="btn btn-outline btn-error ">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={horse2} alt="Shoes" className="rounded-xl h-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Wooden Horse Puzzle</h2>
                                <p>Price: $14.99</p>
                                <p>Rating: 4.2</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails4} className="btn btn-outline btn-error">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={horse} alt="Shoes" className="rounded-xl h-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Plush Brown Horse</h2>
                                <p>Price: $19.99</p>
                                <p>Rating: 4.5</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails5} className="btn btn-outline btn-error ">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:flex justify-center gap-3 mb-6'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={dogs} alt="Shoes" className="rounded-xl h-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Plush Squeaky Bone</h2>
                                <p>Price: $9.99</p>
                                <p>Rating: 4.5</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails6} className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={dogs2} alt="Shoes" className="rounded-xl h-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Rubber Chew Toy</h2>
                                <p>Price: $14.99</p>
                                <p>Rating: 4.4</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails7} className="btn btn-outline btn-error ">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={dogs} alt="Shoes" className="rounded-xl h-72" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Plush Squeaky Bone</h2>
                                <p>Price: $9.99</p>
                                <p>Rating: 4.5</p>
                                <div className="card-actions">
                                    <button onClick={handleDetails8} className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
            <ToastContainer />
        </div>
    );
};

export default TabsCategory

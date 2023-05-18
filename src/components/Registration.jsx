import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="hero mt-20">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card w-96 mt-12 max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error font-bold">Login</button>
                        </div>
                    </form>
                    <p className='text-center'>Already Have an Account? <Link to='/login' className='text-error'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button className="mb-4 btn btn-outline btn-error btn-wide mx-auto"><FaGoogle className='h-4 w-4 mt-1' /><span className='text-xl ml-2'>Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default Registration;
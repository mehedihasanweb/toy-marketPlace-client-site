import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { googleLogin, signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    // console.log(location);

    const handleSignIn = (event) => {
        event.preventDefault()


        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                toast("Login Successfully");
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast(error.message);
            })
    }

    const handleGoogleLogin = () => {

        googleLogin()
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
        })
        .catch(err => console.log(err))
        navigate(from, { replace: true })
    }

    return (
        <div className="hero mt-20" >
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-96 mt-12 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error font-bold">Login</button>
                        </div>
                        <p className='text-center'>Don't Have an Account? <Link to='/registration' className='text-error'>Please Register</Link></p>
                        <div className="divider">OR</div>
                    </form>
                    <button onClick={handleGoogleLogin} className="mb-4 btn btn-outline btn-error btn-wide mx-auto"><FaGoogle className='h-4 w-4 mt-1' /><span className='text-xl ml-2'>Google</span></button>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;
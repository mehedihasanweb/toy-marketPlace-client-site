import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import 'aos/dist/aos.css';
const Footer = () => {
    return (
        // <footer>
        <div className='mb-4 bg-slate-700 text-white p-12'>
            <img className='mx-auto' src="https://bw-petito-demo2.bzotech.com/wp-content/uploads/2023/03/logo-1.svg" alt="" />
            <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="">
                    <h3 className='text-3xl'>About Petito</h3>
                    <p>Patito is your one-stop shop for all things duck-related. We offer a wide selection of duck toys, accessories, and more. Dive into the world of ducks with Patito!</p>
                </div>
                <div>
                    <h3 className='text-3xl'>SubsCription</h3>
                    <input type="text " className='w-[60%] p-2 rounded-md my-4' placeholder='Your Email' /><br />
                    <button className='btn btn-outline btn-error'>SUBSCRIBE NOW</button>
                </div>
                <div className="py-4">
                    <h3 className='text-3xl'>Contact Us</h3>
                    <p>Email: info@patito.com</p>
                    <p>Phone: 123-456-7890</p>
                    <p>Address: 123 Duck Street, Bangladesh</p>
                    <ul className="flex gap-4">
                        <li><FaFacebook className='h-7 w-7 hover:bg-orange-300 rounded-xl' /></li>
                        <li><FaTwitter className='h-7 w-7 hover:bg-orange-300 rounded-xl' /></li>
                        <li><FaInstagram className='h-7 w-7 hover:bg-orange-300 rounded-xl' /></li>
                    </ul>
                </div>
            </div>
            <p className='text-center mt-6'>&copy; 2023 Petito. All rights reserved.</p>
        </div>
        // </footer>
    );
};

export default Footer;
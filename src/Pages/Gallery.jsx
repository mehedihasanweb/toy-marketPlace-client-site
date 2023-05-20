import React from 'react';
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.webp'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.png'
import img5 from '../assets/image5.png'
import img6 from '../assets/image6.jpg'
import 'aos/dist/aos.css';


const Gallery = () => {
    return (
        <div className='my-12' data-aos="fade-up">
            <h2 className='text-5xl text-center mb-16 font-bold'>Our Products Gallery</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center"></div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center"></div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center"></div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center"></div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center"></div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center"></div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
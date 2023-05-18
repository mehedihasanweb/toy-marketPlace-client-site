import React from 'react';
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.webp'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.png'
import img5 from '../assets/image5.png'
import img6 from '../assets/image6.jpg'

const Gallery = () => {
    return (
        <div className='my-12'>
            <h2 className='text-5xl text-center pb-6 font-bold'>Our Products Gallery</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <img src={img1} className='border border-r-emerald-800 h-full' alt="" />
                <img src={img2} className='border border-r-emerald-800 h-full' alt="" />
                <img src={img3} className='border border-r-emerald-800 h-full' alt="" />
                <img src={img4} className='border border-r-emerald-800 h-full' alt="" />
                <img src={img5} className='border border-r-emerald-800 h-full' alt="" />
                <img src={img6} className='border border-r-emerald-800 h-full' alt="" />
            </div>
        </div>
    );
};

export default Gallery;
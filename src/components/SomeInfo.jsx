import React from 'react';
import { FaRegSmileBeam } from 'react-icons/fa';
import 'aos/dist/aos.css'; 

const SomeInfo = () => {
    return (
        <div data-aos="fade-down" className='my-8' >
            <h2 className='text-4xl text-center font-semibold mb-12'>Check Offer & Satisfaction</h2>
            <div className='grid gap-6  justify-items-center grid-cols-1 md:grid-cols-2 text-center'>
                <div>
                    <img className='ml-8' src="https://cdn.shopify.com/s/files/1/1152/4590/files/happiness_small.png?v=1676974815" alt="" />
                    <h2 className='text-2xl py-2'>100% Satisfaction</h2>
                    <h2>If You Are Unable</h2>
                </div>
                <div>
                    <img className='ml-8' src="https://cdn.shopify.com/s/files/1/1152/4590/files/online-support_small.png?v=1676974980" alt="" />
                    <h2 className='text-2xl py-2'>Online Support</h2>
                    <h2>Any Time Support</h2>
                </div>
                <div>
                    <img className='ml-8' src="https://cdn.shopify.com/s/files/1/1152/4590/files/return-on-investment_small.png?v=1676975087" alt="" />
                    <h2 className='text-2xl py-2'>Money Returns</h2>
                    <h2>Guarantee In 7 Days</h2>
                </div>
                <div>
                    <img className='ml-8' src="https://cdn.shopify.com/s/files/1/1152/4590/files/percentage_small.png?v=1676975243" alt="" />
                    <h2 className='text-2xl py-2'>Member Discount</h2>
                    <h2>Customer's First Order</h2>
                </div>
            </div>
        </div>
    );
};

export default SomeInfo;
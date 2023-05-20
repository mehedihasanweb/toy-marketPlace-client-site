import React, { useEffect } from 'react';
import image2 from '../../assets/images.png'
import image1 from '../../assets/pet-3.png'
import image3 from '../../assets/pet1.jpeg'
import Gallery from '../Gallery';
import TabsCategory from '../../components/TabsCategory';
import Latest from '../../components/Latest';
import SomeInfo from '../../components/SomeInfo';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, [])
    return (
        <>
            <div className="carousel w-full" data-aos="zoom-in">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={image1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={image2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={image3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Latest />
            <Gallery />
            <TabsCategory />
            <SomeInfo />
            
        </>

    );
};

export default Home;
import React from "react"
import '../css/Slider.css'
import Banner from '../assets/Banner.jpeg';


const Slider = () => {
return (
    <div className='ContenedorBanner'>
        <img src={Banner} alt="" className='Banners' />
    </div>
);
};

export default Slider;

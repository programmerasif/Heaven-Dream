"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const { default: Image } = require("next/image")


const Gallary = () =>{

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
return(
    <div  className='overflow-hidden '>
     <h5  className="overflow-x-hidden text-[#0f172b] text-center text-3x' lg:text-4xl font-semibold mt-24">Some<span className="text-[#ffa000]"> Of Picture</span> </h5>
            <h5 className="text-center text-[#ffa000] text-xs lg:text-sm">Our-Showcase</h5>
    <div className="grid grid-cols-5  mx-auto gap-1 mt-12">
       
        <Image data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src='/galary1.jpg' alt="hotel_image" width={500} height={50} className="row-span-3 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src='/room1.jpg' alt="hotel_image" width={500} height={500} className="h-full  hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src='/gallary2.jpg' alt="hotel_image" width={1900} height={700} className="col-span-2 h-full  hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src='/gallary6.jpg' alt="hotel_image" width={500} height={500} className="hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image data-aos="flip-down"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="700" src='/gallary4.jpg' alt="hotel_image" width={1900} height={900} className="col-span-2 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image data-aos="flip-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1200" src='/gallary8.jpg' alt="hotel_image" width={1900} height={700} className="col-span-2 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
    </div>
    </div>
)
}
export default Gallary
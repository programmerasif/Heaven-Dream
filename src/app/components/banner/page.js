"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FaPhoneVolume } from 'react-icons/fa6';
import './style.css';
import Link from 'next/link';


export default function Banner() {
  
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
    return (
      <main className='grid items-center banner h-[100vh] w-screen'>
      
      <div className=' h-[75vh] md:h-[100vh]  relative'>
        <div className='text-white  flex flex-col  justify-center items-center h-full px-2 gap-2 mb:gap-5'>
            <h4  data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-duration="700"
                 className='md:text-5xl text-2xl md:font-semibold lg:font-bold text-center uppercase'>
          Wellcome to our Heaven-Dearm
            </h4>
            <span
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1400"
            className='text-white text-center text-sm md:text-xl w-full lg:w-[50%]'>
            We are thrilled to extend a warm invitation to you, inviting you to experience the epitome of luxury and comfort at Haver Dream. 
            </span>
            <div data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                 data-aos-duration="1600" className='text-white flex justify-center items-center gap-5 mt-8'>
                <Link href='/allRooms'>
                <button className='bg-[#ffa000] px-6 py-2 md:px-12 md:py-4 font-bold rounded-full hover:bg-white hover:text-[#ffa000] duration-300'>Book-room</button>
                </Link>
                <Link href='/allRooms'>
                <button className='border-2 border-white px-6 py-2 md:px-12 md:py-4 font-bold rounded-full hover:bg-white hover:text-[#ffa000] duration-300'>See-room</button>
                </Link>
                
                
            </div>
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1900"
              className='text-3xl font-semibold absolute bottom-10 flex rounded-lg'>
            <span className='bg-[#0f172b] text-sm md:text-3xl font-semibold px-4  md:px-14 flex justify-center items-center gap-2 hover:bg-gray-200 hover:text-[#ffa000] duration-300'><span className='animate-pulse '> <FaPhoneVolume /> </span> <span>Call Now</span> </span>
            <span className='bg-white text-black text-xl md:px-14 md:text-4xl font-semibold p-4 '>+880-1#72#52#848</span>
          
        </div>
        </div>
       
      </div>
      </main>
    )
  }
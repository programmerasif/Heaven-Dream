"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img from '../../assets/banner1.jpg'
import './style.css'
import Link from 'next/link';

const Rooms = () =>{

    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
        

    return(
        <>
        <div className='mt-24'>

        <h5 className='text-3x lg:text-4xl  font-semibold text-center mb-2 text-[#0f172b]'>Best <span className='text-[#ffa000]'>Rooms</span> </h5>
        <h5 className='text-xs lg:text-sm text-[#ffa000] mb-10 text-center'>The Luxury Hotel</h5>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center items-center mx-auto w-full  gap-5 px-3 lg:w-[80%]">
            
            <div data-aos="fade-up" className="border-2 border-gray-200  hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md">
                <img src='room1.jpg' className=' hover:rounded-md'/>
                <div className='p-5'>
                    <h5 className="text-2xl font-semibold">Deluxe Dark Room</h5>
                <p className="text-gray-600 mt-5">{`3 adult(s) and 2 child(ern)`}</p>
                <p className="text-gray-600 mt-5">{`Deluxe Dark Room" - A sleek, upscale space with sophisticated ambiance and low lighting, catering to various experiences.`}</p>
                <button className='w-full py-3 border-2 border-[#ffa000] mt-5 hover:bg-[#ffa000] hover:text-white duration-300'> Book Now</button>
                </div>
            </div>
            <div data-aos="fade-up" className="border-2 border-gray-200 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md">
                <img src='/room2.jpg' className='  hover:rounded-md'/>
                <div className='p-5'>
                    <h5 className="text-2xl font-semibold">Deluxe Dark Room</h5>
                <p className="text-gray-600 mt-5">{`3 adult(s) and 2 child(ern)`}</p>
                <p className="text-gray-600 mt-5">{`"Deluxe Dark Room" - A sleek, upscale space with sophisticated ambiance and low lighting, catering to various experiences.`}</p>
                <Link href='/id'><button className='w-full py-3 border-2 border-[#ffa000] mt-5 hover:bg-[#ffa000] hover:text-white duration-300'> Book Now</button></Link>
                </div>
            </div>
            <div data-aos="fade-up" className="border-2 border-gray-200 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md">
                
                <img src='/room5.png' className=' hover:rounded-md'/>
              
                <div className='p-5'>
                    <h5 className="text-2xl font-semibold">Deluxe Dark Room</h5>
                <p className="text-gray-600 mt-5">{`3 adult(s) and 2 child(ern)`}</p>
                <p className="text-gray-600 mt-5">{`"Deluxe Dark Room" - A sleek, upscale space with sophisticated ambiance and low lighting, catering to various experiences.`}</p>
                <Link href='/id'><button className='w-full py-3 border-2 border-[#ffa000] mt-5 hover:bg-[#ffa000] hover:text-white duration-300'> Book Now</button></Link>
                </div>
            </div>
            <div data-aos="fade-up" className="border-2 border-gray-200 hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md">
                <img src='room1.jpg' className=' hover:rounded-md'/>
                <div className='p-5'>
                    <h5 className="text-2xl font-semibold">Deluxe Dark Room</h5>
                <p className="text-gray-600 mt-5">{`3 adult(s) and 2 child(ern)`}</p>
                <p className="text-gray-600 mt-5">{`Deluxe Dark Room" - A sleek, upscale space with sophisticated ambiance and low lighting, catering to various experiences.`}</p>
                <Link href="/rooms/asd">go to</Link>
                </div>
            </div>
           
        </div>
        {/* offer */}
        <div className='bgImage h-[70vh] bg-fixed mt-32 flex flex-col justify-center items-center gap-8'>
        <h5 data-aos="fade-right" className='text-white text-center text-2xl md:text-4xl font-semibold '>Act Fast, Save 15% - Limited Time Offer!</h5>
        <p
        data-aos="fade-up"
        data-aos-duration="1500"
        className='w-full md:w-[60%] text-center  text-gray-100'>Embark on instant savings with a timely reservation. This exclusive, fleeting offer presents a valuable 15% discount. Seize the opportunity now to secure both reduced rates and an unforgettable experience in our Deluxe Dark Room.</p>
        <button
        data-aos="fade-up"
        data-aos-duration="2000"
        className='bg-[#ffa000] text-sm text-white px-12 py-4 md:mt-5 mt:2 font-bold rounded-full hover:bg-white hover:text-[#ffa000] duration-300'>Book-Room</button>
        </div>
        </div>
        </>
    )
}
export default Rooms
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { root } from 'postcss';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Dynamic = ({params}) => {
    const [room,setRoom] = useState({})
    const id = params.dynamic
// console.log(id);
    useEffect(() =>{
        fetch('/hotel.json')
        .then(res => res.json())
        .then(data => {
            const detilses = data.find((element) => element.id == id)
            setRoom(detilses)
        })
    },[id])
    
    if (!room.id) {
        return 
    }
    return (
       <>
       <div>
       {/* <Image src='/deteilBG.jpg' width={1400} height={300} alt='room' className='w-full h-[40vh]'></Image> */}
       <Image src={room.imageUrl} width={1000} height={500} alt='room' className='w-full h-[80vh]'></Image>
       </div>
       <div className=' flex justify-center flex-col items-center w-full lg:w-[66%] mx-auto'>
            <div className='flex justify-start items-start gap-3 flex-col px-2'>
           
           
           <div className='flex justify-between items-end w-full lg:w-[66%] '>
           <h5 className='lg:text-5xl text-2xl font-bold text-[#0f172b] mt-5 '>{room.name}</h5>
           <h5 className='bg-[#ffa000] text-white px-6 py-2 md:px-12 md:py-4 font-bold rounded-full hover:bg-white hover:text-[#ffa000] hover:border-2 border-yellow-500 duration-300'> <Link href={`/roomss/${id}/detils`} >Book Now</Link> </h5>
           </div>
            <h5 className='text-xl'>{room.capacity}</h5>
            <h5 className='w-[90%] '>{room.description}</h5>
            <h5 className='text-2xl font-bold '>Price: {room.pricePerNight}$</h5>
            </div>
            <span className='text-3xl font-bold text-[#ffa000] me-auto mt-5 flex justify-center items-center gap-5'><span>Facalities</span> <FaArrowRightLong /> </span>
            <div className='lg:w-[90%] w-full me-auto text-xs md:text-sm bg-gray-200 p-5 grid grid-cols-2 lg:grid-cols-4 mb-5 justify-start items-start mt-5 gap-4'>
            {
                room.amenities.map(amenitie => <>
                <div className='bg-white text-[#ffa000] font-semibold p-10 text-center h-32 rounded-md gap-y-5'>{amenitie}</div>
                </>)
            }
        </div>
        </div>
        
        
       </>
    );
};

export default Dynamic;
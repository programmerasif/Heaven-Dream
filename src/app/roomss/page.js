"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const Roomss = () => {
const [rooms,setRooms] = useState([])

    useEffect(() =>{
        fetch('/hotel.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])

   
    return (
        <div>
           <div className='mt-24'>

<h5 className='text-3x lg:text-4xl  font-semibold text-center mb-2 text-[#0f172b]'>Best <span className='text-[#ffa000]'>Rooms</span> </h5>
<h5 className='text-xs lg:text-sm text-[#ffa000] mb-10 text-center'>The Luxury Hotel</h5>
<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center mx-auto w-full  gap-5 px-3 xl:w-[80%]">
    {
        rooms.map(room => <>
         <div data-aos="fade-up" className="border-2 border-gray-200 ">
                <Image src={room.imageUrl} className=' hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md' alt='room' width={400} height={300}></Image>
        <div className='p-5'>
            <h5 className="text-sm lg:text-2xl font-semibold">{`${room.name.slice(0,10)}...`}</h5>
        <p className="text-gray-600 mt-5">{room.capacity}</p>
        <p className="text-gray-600 mt-5 min-h-[150px]">{`${room.description.slice(0,140)}  ...`}</p>
        <Link href={`/roomss/${room.id}`}><button className='w-full rounded-sm py-3 border-2 border-[#ffa000] mt-5 hover:bg-[#ffa000] hover:text-white duration-300'>View Detils</button></Link>
        </div>
    </div>
        </>)
    }
</div>
{/* offer */}

           </div>
        </div>
    );
};

export default Roomss;
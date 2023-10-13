import Image from 'next/image';
import React from 'react';
import drink from '../../assets/drink.jpg'
import cleneRoom from '../../assets/roomClean.jpeg'
import { FaCheck } from 'react-icons/fa6';

const ExtraService = () => {
    return (
        <div className='mt-32 w-full bg-[#0f172b] text-white px-2 py-8 xl:p-10'>
            <div className='flex justify-center items-center w-4/5 mx-auto flex-col md:flex-row'>
                <div className='w-full xl:w-2/5'>
                    <h5 className='leading-9 text-[#ffa000]'>BEST PRICES</h5>
                    <h5 className='text-4xl xl:text-6xl font-semibold mb-5'>Extra Service</h5>
                    <p className='text-gray-300 xl:w-2/3 mb-3'>The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>

                    <p className='text-gray-300 w-full xl:w-2/3 mb-3'>
                    Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.
                    </p>
                </div>
                <div className='flex justify-center items-center gap-5 flex-col md:flex-row'>
                    <div className='text-black bg-white  rounded-md'>
                    <Image src={cleneRoom} width={340} height={240} alt="logo"></Image>
                    <div className='p-5 xl:p-3'>
                    <h5 className='text-2xl font-semibold'>Room Clening</h5>
                    
                    <span className='flex justify-start items-start flex-col gap-5'>
                    <p><span className='text-2xl font-semibold text-[#ffa000]'>50$</span> / month</p>
                    <div className='flex justify-center items-center gap-2'>
                    <span className='text-[#ffa000]'><FaCheck /></span>  <span>Cleane all Room in morning</span>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                    <span className='text-[#ffa000]'><FaCheck /></span>  <span>Cleane all Room in Afternoon</span>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                    <span className='text-[#ffa000]'><FaCheck /></span>  <span>Cleane all Room in Night</span>
                    </div>
                    </span>
                    </div>
                    </div>

                    <div className='text-black bg-white  rounded-md'>
                    <Image src={drink} width={340} height={240} alt="logo"></Image>
                    
                    <div className='p-5 xl:p-3'>
                    <h5 className='text-2xl font-semibold'>Room Clening</h5>
                    
                    <span className='flex justify-start items-start flex-col gap-5'>
                    <p><span className='text-2xl font-semibold text-[#ffa000]'>50$</span> / month</p>
                    <div className='flex justify-center items-center gap-2'>
                    <span className='text-[#ffa000]'><FaCheck /></span>  <span>Cleane all Room in morning</span>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                    <span className='text-[#ffa000]'><FaCheck /></span>  <span>Cleane all Room in Afternoon</span>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                    <span className='text-[#ffa000]'><FaCheck /></span>  <span>Cleane all Room in Night</span>
                    </div>
                    </span>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ExtraService;
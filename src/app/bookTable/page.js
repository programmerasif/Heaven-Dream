import Image from 'next/image';
import React from 'react';
import background from '@/app/assets/restaurant.jpeg'

const BookTable = () => {
    const tables = [
        {
        name : 'table one'
        },
        {
        name : 'table two'
        },
        {
        name : 'table three'
        },
        {
        name: 'table four'
        },
        {
         name : 'table five'
        },
        {
         name : 'table six'
        },
        {
          name : 'table seven'
        },
        {
        name : 'table eight'
        },
    ] 
    return (
        <div>
            <Image  src={background} alt='background' className='w-full h-[60vh]'></Image>
            <div className='grid grid-cols-4 gap-5'>
            {
                tables.map((table,i) => <div key={i} className='flex justify-center items-center p-5 mt-5 w-4/5 mx-auto'>
                    <div className='bg-white drop-shadow-lg p-3 rounded-md'>
                    <Image  src={background} alt='background' className='w-full h-14'></Image>
                    <div className='text-center text-2xl font-semibold uppercase mb-2'>
                    {table.name}
                    </div>
                    <div className='bg-[#ffa000] px-6 py-2 md:px-12 text-white font-bold rounded-full hover:bg-white hover:text-[#ffa000] hover:ring-2 hover:ring-[#ffa000] duration-300'>
                        BOOK
                    </div>
                    </div>
                     </div>)
            }
            </div>
            
        </div>
    );
};

export default BookTable;
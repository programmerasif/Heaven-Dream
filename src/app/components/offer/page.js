import React from 'react';

const Offer = () => {
    return (
        <div>
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
    );
};

export default Offer;
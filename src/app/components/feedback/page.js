"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
const FeedBack = () =>{
    return(
        <>
         <section >
         <h5 className="text-[#0f172b] text-center text-3x' lg:text-4xl font-semibold mt-24">Happy <span className="text-[#ffa000]">Coustomer</span> </h5>
            <h5 className="text-center text-[#ffa000] text-xs lg:text-sm">{`Coustomer's Feedback`}</h5>
      <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className=''>
        <SwiperSlide >
            <div className='text-4xl p-20 m-5 bg-white shadow-lg rounded-lg'>
                Hello world
            </div>
        </SwiperSlide>
        </div>
        
        
        
      </Swiper>
      </div>
         </section>
    </>
    )
}
export default FeedBack
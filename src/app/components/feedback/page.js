"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import Image from 'next/image';
const FeedBack = () =>{
  const feetdacks = [
    {
      id:1,
      name : "Johan",
      feedack: "Enchanting from start to finish, Heaven-Dream Hotel is a true gem. The lavish decor and impeccable attention to detail create an atmosphere of luxury. With stunning views, delectable dining, and exceptional service, every moment feels like a dream turned reality. A stay at Heaven-Dream is an experience I'll treasure forever",
      reting: 4.5,
      image: '/feedback1.jpg'
    },
    {
      id:1,
      name : "Thomas",
      feedack: "A stay at Heaven-Dream Hotel exceeded all expectations. The opulent decor and attention to detail are second to none, creating an ambiance of pure luxury. From the gourmet dining to the top-notch service, every aspect was flawless, making it a dream destination that I can't wait to revisit.",
      reting: 4.7,
      image: '/feedback2.jpg'
    },
    {
      id:1,
      name : "Willam-Black",
      feedack: "Enchanting from start to finish, Heaven-Dream Hotel is a true gem. The lavish decor and impeccable attention to detail create an atmosphere of luxury. With stunning views, delectable dining, and exceptional service, every moment feels like a dream turned reality. A stay at Heaven-Dream is an experience I'll treasure forever",
      reting: 4.9,
      image: '/feedback3.jpg'
    },
    {
      id:1,
      name : "Johan",
      feedack: "Enchanting from start to finish, Heaven-Dream Hotel is a true gem. The lavish decor and impeccable attention to detail create an atmosphere of luxury. With stunning views, delectable dining, and exceptional service, every moment feels like a dream turned reality. A stay at Heaven-Dream is an experience I'll treasure forever",
      reting: 4.5,
      image: '/feedback4.jpg'
    },
  ]
    return(
        <>
         <section >
         <h5 className="text-[#0f172b] text-center text-3x lg:text-4xl font-semibold lg:mt-24">Happy <span className="text-[#ffa000]">Coustomer</span> </h5>
            <h5 className=" mb-24 text-center text-[#ffa000] text-xs lg:text-sm">{`Coustomer's Feedback`}</h5>
      <div className='w-full lg:w-[50%] mx-auto shadow-lg'>
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
          {
            feetdacks.map(fBack => <div key={fBack.id}>
             <SwiperSlide >
            <div className='p-0 py-5 lg:p-10 '>
              <Image src={fBack.image} alt='person' width={100} height={100} className='rounded-full bg-black ring-4 ring-[#ffa000] mx-auto'></Image>
              <h5 className='text-2xl font-semibold'>{fBack.name}</h5>
              <p className='flex flex-col relative'>
                
                <Image src='/quote.png' width={50} height={50} className='me-auto absolute -top-5'></Image>
              <span className='text-start px-14'>
              {fBack.feedack}
              </span>
              <Image src='/double-quotes.png' width={50} height={50} className='ms-auto absolute bottom-0 right-0'></Image>
              
              </p>
              
            </div>
        </SwiperSlide>
            </div>)
          }
       
        </div>
        
        
        
      </Swiper>
      </div>
         </section>
    </>
    )
}
export default FeedBack
import { FaPhoneVolume } from 'react-icons/fa6';
import './style.css';


export default function Banner() {
  
    return (
      <main>
      
      <div className='banner h-[75vh] md:h-[100vh] '>
        <div className='text-white  flex flex-col  justify-center items-center h-full px-2 gap-2 mb:gap-5'>
            <h4 className='md:text-5xl text-2xl font-semibold text-center uppercase'>
          Wellcome to our Heaven-Dearm
            </h4>
            <span className='text-gray-300 text-center text-sm md:text-xl w-full md:w-[50%]'>
            We are thrilled to extend a warm invitation to you, inviting you to experience the epitome of luxury and comfort at Haver Dream. 
            </span>
            <div className='text-white flex justify-center items-center gap-5 mt-8'>
                <button className='bg-[#ffa000] px-12 py-4 font-bold rounded-full hover:bg-white hover:text-[#ffa000] duration-300'>Book-room</button>
                <button className='border-2 border-white px-12 py-4 font-bold rounded-full hover:bg-white hover:text-[#ffa000] duration-300'>See-room</button>
            </div>
            <div className='text-3xl font-semibold absolute bottom-64 md:bottom-10 flex rounded-lg'>
            <span className='bg-[#0f172b] text-xl md:text-4xl font-semibold px-4  md:px-14 flex justify-center items-center gap-2 hover:bg-gray-200 hover:text-[#ffa000] duration-300'><span className='animate-pulse '> <FaPhoneVolume /> </span> <span>Call Now</span> </span>
            <span className='bg-white text-black text-xl md:px-14 md:text-4xl font-semibold p-4 '>+880-1#72#52#848</span>
          
        </div>
        </div>
       
      </div>
      </main>
    )
  }
'use client'
import { FaXmark,FaBars} from "react-icons/fa6";
import { useState } from "react";
import Image from "next/image";




const Navbr = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return(
        <>
       
        <nav className="bg-[#0f172b] top-0 text-white shadow-lg p-4 flex md:flex-row flex-row-reverse md:justify-around items-center w-full fixed z-20">
      <div className=" text-xl h-full  font-semibold md:mb-0">
     <Image src='/logo3.png' width={240} height={240} alt="logo">

     </Image>
      </div>
      <button
        onClick={toggleMenu}
        className="md:hidden me-auto text-white focus:outline-none"
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>
      <ul
        className={`absolute top-4 md:top-0 right-1 font-semibold bg-white text-gray-500 md:text-white shadow-lg md:shadow-none rounded-md z-10  p-10 md:p-0 md:bg-transparent transition-transform duration-300 md:flex ml-auto md:relative ${
          isOpen ? 'transform translate-x-0 md:translate-x-0' : 'transform translate-x-52 md:translate-x-0'
        }`}
      >
        <li className=" cursor-pointer p-2 ">Home</li>
        <li className=" cursor-pointer p-2">About</li>
        <li className=" cursor-pointer p-2">Services</li>
        <li className=" cursor-pointer p-2">Contact</li>
        <button
        onClick={toggleMenu}
        className="md:hidden me-auto absolute top-0 p-3 shadow-sm rounded-md border left-0 text-black focus:outline-none"
      >
        {isOpen ? <FaXmark /> : <FaBars />}
      </button>
      </ul>
    </nav>
    
        </>
    )
}
export default Navbr
import Image from "next/image"
import { FaCheck } from "react-icons/fa6"


const Manager = () =>{
    return(
        <>
        <div>
            <h5 className="text-[#0f172b] text-center text-3x lg:text-4xl font-semibold mt-24">Meet <span className="text-[#ffa000]">Our-Manager</span> </h5>
            <h5 className="text-center text-[#ffa000] text-xs lg:text-sm">Wellcome-speach</h5>
            <div className="flex flex-col-reverse lg:flex-row justify-center  items-center w-full px-4 lg:w-[80%] mx-auto">
                
                <div className=" w-full lg:w-[60%] text-xl text-gray-500">
                    <p className=" text-sm lg:text-xl">
                    <span className="text-[#ffa000] text-xl lg:text-3xl md:font-semibold lg:font-bold">Greetings To All Our  Esteemed Guests.</span> I am Androw, the proud Manager of Heaven-Dream. With a deep passion for hospitality, I lead a dedicated team in crafting exceptional experiences for you. Welcome to Heaven-Dream, where our commitment to excellence is evident in every detail from our luxurious accommodations to our world-class dining. As your host, I assure you that your comfort and satisfaction are my top priorities. Join us on a journey of redefining hospitality and creating lasting memories at Heaven-Dream. Your experience is my personal mission, and I eagerly anticipate the pleasure of welcoming you.
                    </p>
                   <div className=" mt-8 text-sm lg:text-xl">
                    <p className="flex justify-start items-center gap-5"> <span className="text-[#ffa000]"><FaCheck /></span><span>Ensure Privacy</span> </p>
                   <p className="flex justify-start items-center gap-5"> <span className="text-[#ffa000]"><FaCheck /></span>Top-Class Service </p>
                    <p className="flex justify-start items-center gap-5"> <span className="text-[#ffa000]"><FaCheck /></span>coustomer Happinese </p>
                    <p className="flex justify-start items-center gap-5"> <span className="text-[#ffa000]"><FaCheck /></span>Available 24/7 coustomer survice</p>
                    <p className="flex justify-start items-center gap-5"> <span className="text-[#ffa000]"><FaCheck /></span> Give importance, coustomer feedback </p>
                   </div>
                </div>
                <div className="w-full lg:w-[40%] flex justify-center items-center relative">
                    <div>
                    <Image alt="manager" src='/person1.png' width={1000} height={1000} className="z-10"></Image>
                    <Image alt="manager" src='/blob7.png' width={1200} height={1200} className="absolute bottom-0 left-0 -z-10"></Image>

                    </div>
                     </div>
            </div>
        </div>
       
        </>
    )
}
export default Manager
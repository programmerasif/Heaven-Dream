import { FaPhoneVolume } from "react-icons/fa6"
import { BiMailSend } from "react-icons/bi";
import Image from "next/image";

const Footer = () => {

    return (
        <>
            <div className="bg-[#0f172b] text-white mt-24 flex justify-center items-center flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full lg:w-[80%] p-5 md:p-20">

                    <div className="flex flex-col">

                        <p className="text-sm text-gray-200">
                            <Image src='/logo3.png' width={340} height={340} className="text-start" alt="logo">

                            </Image>
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-xl font-semibold">
                            About Hotel
                        </h5>
                        <p className="text-sm text-gray-200">
                            Welcome to the best five-star deluxe hotel in Bangladesh. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h5 className="text-xl font-semibold">
                            Contact
                        </h5>
                        <div className="text-gray-300">
                            <p className="text-sm text-gray-200">
                               {` 102,Cox's Bazar, Dhaka, Banglaesh.`}
                            </p>
                            <h5 className="text-2xl font-semibold mt-5 flex justify-start gap-2 items-center"><FaPhoneVolume /> <span>+880-1721520848</span> </h5>
                            <p className="flex justify-st items-center gap-2 border-b-2 border-[#ffa000] w-full md:w-[55%]"><BiMailSend />  <span>heaven-drea@gmail.com </span></p>
                        </div>
                    </div>

                </div>
                <div className="text-gray-200 border-t-2 border-gray-600 w-full  md:w-[80%] text-sm py-5 text-center sm:text-start">
                    Copyright © 2023 - All right reserved by Asif Khan
                </div>
            </div>
        </>
    )
}
export default Footer
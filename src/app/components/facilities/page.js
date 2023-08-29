'use clint'
import { FaArrowUpRightDots, FaCarRear, FaCookieBite, FaHouseFlag, FaPersonSwimming, FaWifi, } from "react-icons/fa6"
import FacilitiesCard from "./facilitiesCard/page"
import Galary from "./galary/page"


const Facilities = () =>{
const facilities = [
    {
        id:1,
        logo: <FaArrowUpRightDots />,
        type : 'Pick Up & Drop',
        description : 'We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.'

    },
    {
        id:2,
        logo: <FaCookieBite />,
        type : 'Breakfast',
        description : 'Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant'

    },
    {
        id:3,
        logo: <FaWifi />,
        type : 'Fibre Internet',
        description : 'Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.'

    },
    {
        id:4,
        logo: <FaPersonSwimming />,
        type : 'Swimming Pool',
        description : 'Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.'

    },
    {
        id:5,
        logo: <FaHouseFlag />,
        type : 'Room Service',
        description : 'Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.'

    },
    {
        id:6,
        logo:<FaCarRear />,
        type : 'Parking Space',
        description : 'Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.'

    }
]
    return(
        <>
        <div className="mt-32 mb-32">
        <h5 className="text-center text-3xl font-bold">Facilities </h5>
        <h5 className="text-sm text-[#ffa000] mb-10 text-center">Our Survices</h5>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-[90%] lg:w-[80%] mx-auto px-2 gap-8 ">
            {
                facilities.map(facilitie => <FacilitiesCard facilitie={facilitie} key={facilitie.id}/>)
            }
        </div>
        </div>
        <Galary />
        </>
    )
}

export default Facilities
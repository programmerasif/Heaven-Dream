const { default: Image } = require("next/image")


const Gallary = () =>{
return(
    <>
     <h5 className="text-[#0f172b] text-center text-3x' lg:text-4xl font-semibold mt-24">Some<span className="text-[#ffa000]"> Of Picture</span> </h5>
            <h5 className="text-center text-[#ffa000] text-xs lg:text-sm">Our-Showcase</h5>
    <div className="grid grid-cols-5  mx-auto gap-1 mt-12">
       
        <Image src='/galary1.jpg' width={500} height={50} className="row-span-3 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image src='/room1.jpg' width={500} height={500} className="h-full  hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image src='/gallary2.jpg' width={1900} height={700} className="col-span-2 h-full  hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image src='/gallary6.jpg' width={500} height={500} className="hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image src='/gallary4.jpg' width={1900} height={900} className="col-span-2 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
        <Image src='/gallary8.jpg' width={1900} height={700} className="col-span-2 h-full hover:-translate-y-1 hover:scale-110 hover:shadow-md duration-300 hover:rounded-md overflow-hidden"></Image>
    </div>
    </>
)
}
export default Gallary
 import './style.css'

 const Food = () =>{

    return(
        <>
        <div className='bgImg h-[50vh] lg:h-[60vh] mb-32 '>
            <div className='text-4xl bg-[#0f172ba9] w-full md:w-[50%]  text-white flex justify-center h-full  items-center'>
                <div className='lg:w-[60%] w-full px-5'>
                    <h5 className='text-2xl lg:text-5xl font-bold leading-relaxed'>We Are Committed <br /> To Good Taste</h5>
                    <p className='text-sm mt-4 text-gray-200'>In our Food Court,Where Good Taste Reigns Supreme. From appetizers to signature dishes, savor perfection crafted by passionate chefs. Join us and indulge – taste, delight, repeat</p>
                    <button className='text-sm mt-4 rounded-md bg-[#ffa000]  px-6 py-3 hover:bg-white hover:text-[#ffa000] duration-300'>BOOK NOW</button>
                </div>
            </div>
        </div>
        </>
    )
 }
 export default Food
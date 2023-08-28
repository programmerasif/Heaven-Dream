

const FacilitiesCard = ({facilitie}) =>{
    
    return (
        <>
        <div className="text-start border-2 border-gray-100 py-8 px-5 rounded-md hover:bg-[#ffa200b9] hover:text-white duration-300">
            <h5 className="text-5xl text-[#ffa000]  py-3 hover:text-white">{facilitie.logo}</h5>
        <h5 className=" text-xl font-semibold">
            {facilitie.type}
        </h5>
        <p className="">
        {facilitie.description}
        </p>
        </div>
        </>
    )
}
export default FacilitiesCard
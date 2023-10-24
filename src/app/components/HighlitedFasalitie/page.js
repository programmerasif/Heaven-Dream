import Image from 'next/image';
import React from 'react';
import restaurant from '../../assets/restaurant ff.jpeg'
import spa from '../../assets/spa.jpg'

const HighlitedFasalitie = () => {
    return (
        <div>
            <div className='xl:w-4/5 w-full mx-auto flex flex-col xl:flex-row justify-center items-center text-white mt-32'>
                <div> <Image width={900} height={650} src={restaurant} alt='restaurant'></Image> </div>
                <div className='xl:w-[900px] xl:h-[570px] py-8 bg-[#0f172b] flex flex-col items-start justify-center ps-5 '>
                    <h5 className='text-4xl font-semibold text-white'>The Restaurant</h5> 
                    <p className='text-gray-300 w-[80%] py-3'>
                    Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.
                    </p>
                    <button className='bg-[#ffa000] px-5 py-2 rounded-md'>Lern-more</button>
                </div>
            </div>
            <div className='w-full xl:w-4/5 mx-auto flex justify-center items-center text-white flex-col-reverse xl:flex-row'>
                
                <div className='xl:w-[900px] xl:h-[570px] py-8 bg-[#0f172b] flex flex-col items-start justify-center ps-5 '>
                    <h5 className='text-4xl font-semibold text-white'>Spa Center</h5> 
                    <p className='text-gray-300 xl:w-[80%] py-3'>
                    Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.
                    </p>
                    <button className='bg-[#ffa000] px-5 py-2 rounded-md'>Lern-more</button>
                </div>
                <div> <Image width={900} height={650} src={spa} alt='spa'></Image> </div>
            </div>
        </div>
    );
};

export default HighlitedFasalitie;